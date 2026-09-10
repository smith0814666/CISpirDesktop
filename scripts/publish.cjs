'use strict';
// Local GitHub Releases publisher. Uses `gh auth login`; no CI, Git push or LFS.
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const { createHash } = require('node:crypto');
const { execFileSync } = require('node:child_process');
const REPOSITORY = 'smith0814666/CISpirDesktop';

async function validateAssets(root, manifest) {
  if (manifest.repository !== REPOSITORY || !/^\d+\.\d+\.\d+$/.test(manifest.version) ||
      !Array.isArray(manifest.files) || !manifest.files.length) throw new Error('Invalid release manifest');
  const names = new Set();
  for (const file of manifest.files) {
    if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(file.name) || names.has(file.name) ||
        !Number.isSafeInteger(file.size) || file.size <= 0 || file.size >= 2 * 1024 ** 3 || !/^[a-f0-9]{64}$/.test(file.sha256)) throw new Error('Invalid asset entry (each file must be smaller than 2 GiB)');
    names.add(file.name);
    const target = path.join(root, 'assets', file.name);
    const stat = await fsp.lstat(target);
    if (!stat.isFile() || stat.size !== file.size) throw new Error(`Asset missing or incorrect size: ${file.name}`);
    const hash = createHash('sha256');
    for await (const chunk of fs.createReadStream(target)) hash.update(chunk);
    if (hash.digest('hex') !== file.sha256) throw new Error(`Checksum mismatch: ${file.name}`);
  }
}

async function publish(root, run = args => execFileSync('gh', args, { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 }), { dryRun = false } = {}) {
  const raw = await fsp.readFile(path.join(root, 'release.json'), 'utf8');
  const manifest = JSON.parse(raw);
  await validateAssets(root, manifest);
  const tag = `v${manifest.version}`;
  const notes = await fsp.readFile(path.join(root, 'release-notes.md'), 'utf8');
  const marker = `<!-- cispir-release:${createHash('sha256').update(raw).update(notes).digest('hex')} -->`;
  if (dryRun) {
    console.log(`校验通过：${tag}，${manifest.files.length} 个附件。预演完成，没有联网或发布。`);
    return;
  }
  try { run(['auth', 'status', '--hostname', 'github.com']); }
  catch { throw new Error('请先安装 GitHub CLI 并运行 gh auth login（github.com）；SSH 的 git push 登录不等于 GitHub API 登录。'); }
  const repository = JSON.parse(run(['api', `repos/${REPOSITORY}`]));
  if (repository.full_name !== REPOSITORY || repository.private) throw new Error('The release repository must be public CISpirDesktop');
  // API errors must fail, never be mistaken for an absent release.
  const releases = JSON.parse(run(['api', '--paginate', '--slurp', `repos/${REPOSITORY}/releases?per_page=100`])).flat();
  const existing = releases.find(release => release.tag_name === tag);
  const newer = releases.some(release => !release.draft && !release.prerelease &&
    /^v\d+\.\d+\.\d+$/.test(release.tag_name) && compareVersions(release.tag_name.slice(1), manifest.version) > 0);
  if (newer) throw new Error('A newer stable version is already published; refusing to move Latest backwards.');
  if (existing && !String(existing.body || '').includes(marker)) throw new Error(`${tag} already exists with different content. Increase the application version.`);
  if (existing && !existing.draft) {
    if (!sameAssets(existing.assets, manifest.files)) throw new Error('Published release assets differ from the manifest');
    console.log(`${tag} is already published; no changes needed.`);
    return;
  }
  if (!existing) {
    // An empty public repository needs one small commit before a Release can be created.
    const branches = JSON.parse(run(['api', '--paginate', '--slurp', `repos/${REPOSITORY}/branches?per_page=100`])).flat();
    if (!branches.length) {
      const content = Buffer.from(`# CISpir Desktop\n\nDownload: https://github.com/${REPOSITORY}/releases/latest\n`).toString('base64');
      run(['api', `repos/${REPOSITORY}/contents/README.md`, '--method', 'PUT', '-f', 'message=Initialize release repository', '-f', `content=${content}`]);
    }
    const temporary = await fsp.mkdtemp(path.join(os.tmpdir(), 'cispir-publish-'));
    try {
      const notesFile = path.join(temporary, 'notes.md');
      await fsp.writeFile(notesFile, `${notes}\n\n${marker}\n`);
      run(['release', 'create', tag, '--repo', REPOSITORY, '--target', repository.default_branch,
        '--draft', '--title', `CISpir ${manifest.version}`, '--notes-file', notesFile]);
    } finally { await fsp.rm(temporary, { recursive: true, force: true }); }
  } else if ((existing.assets || []).some(asset => !manifest.files.some(file => file.name === asset.name))) {
    throw new Error('Draft contains unexpected assets; inspect it before retrying.');
  }
  for (const file of manifest.files) {
    // A failed previous upload can be resumed without re-uploading verified files.
    if (existing?.assets?.some(asset => asset.name === file.name && asset.size === file.size && asset.digest === `sha256:${file.sha256}`)) continue;
    console.log(`Uploading ${file.name}`);
    run(['release', 'upload', tag, path.join(root, 'assets', file.name), '--repo', REPOSITORY, '--clobber']);
  }
  // `releases/tags/{tag}` 404s for a draft whose git tag isn't materialized yet
  // (GitHub keeps draft releases with a fresh tag under an "untagged-…" ref until
  // published). `gh release view` resolves by the stored tag_name and works for drafts.
  const uploaded = JSON.parse(run(['release', 'view', tag, '--repo', REPOSITORY, '--json', 'assets']));
  if (!sameAssets(uploaded.assets, manifest.files)) throw new Error('Release upload is incomplete; the release remains a draft.');
  run(['release', 'edit', tag, '--repo', REPOSITORY, '--draft=false', '--latest']);
  console.log(`Published https://github.com/${REPOSITORY}/releases/tag/${tag}`);
}

function sameAssets(assets, files) {
  return Array.isArray(assets) && assets.length === files.length && files.every(file =>
    assets.some(asset => asset.name === file.name && asset.size === file.size &&
      (!asset.digest || asset.digest === `sha256:${file.sha256}`)));
}
function compareVersions(left, right) {
  const a = left.split('.').map(Number), b = right.split('.').map(Number);
  for (let i = 0; i < 3; i++) if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
  return 0;
}
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.some(arg => arg !== '--dry-run')) throw new Error('Only --dry-run is supported');
  publish(path.resolve(__dirname, '..'), undefined, { dryRun: args.includes('--dry-run') })
    .catch(error => { console.error(error.message); process.exitCode = 1; });
}
module.exports = { publish, validateAssets, sameAssets };
