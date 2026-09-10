# CISpir 下载与安装指南 · Download Guide · ダウンロードガイド

CISpir — 文字与语音双向转换的桌面应用 · A desktop app for bidirectional text ⇄ voice conversion · テキストと音声を双方向に変換するデスクトップアプリ

**最新版下载页 / Download page / ダウンロードページ：**
<https://github.com/smith0814666/CISpirDesktop/releases/latest>

---

# 中文

## 一、我该下载哪一个？

| 我的设备 | 芯片 | 下载文件 |
|---|---|---|
| Mac（Apple M1 / M2 / M3 / M4） | Apple Silicon（arm64） | [CISpir-1.4.0-arm64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-1.4.0-arm64.dmg) |
| Mac（Intel） | Intel（x64） | [CISpir-1.4.0-x64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-1.4.0-x64.dmg) |
| Mac（不确定芯片） | 通用 | [CISpir-1.4.0-universal.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-1.4.0-universal.dmg) |
| Windows（Intel / AMD） | x64 | [CISpir-Setup-1.4.0-x64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-Setup-1.4.0-x64.exe) |
| Windows（ARM：骁龙 / Copilot+ PC） | arm64 | [CISpir-Setup-1.4.0-arm64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-Setup-1.4.0-arm64.exe) |

> - `.dmg` 用于安装；`.zip` 仅用于自动更新或脚本化部署，普通用户无需下载。
> - `Setup` 是安装版（创建快捷方式、支持自动更新）；不带 `Setup` 的 `.exe` 是便携版（免安装、双击即用，但不支持自动更新）。推荐安装版。

## 二、如何查看我的芯片？

**macOS：** 点击左上角  → 「关于本机 / About This Mac」：
- 显示「芯片 Chip：Apple M1/M2/M3/M4」→ 下载 arm64；
- 显示「处理器 Processor：Intel …」→ 下载 x64。

**Windows：** 设置 → 系统 → 关于 / 系统信息（Settings → System → About）：
- 「系统类型 / System type」为「基于 x64 的处理器」→ 下载 x64；
- 为「基于 ARM 的处理器」→ 下载 arm64。

## 三、安装步骤

**macOS：**
1. 双击下载的 `.dmg`；
2. 把 CISpir 拖进「应用程序 Applications」文件夹；
3. 首次打开如提示「无法打开，因为它来自身份不明的开发者」，见下方「首次打开提示」。

**Windows：**
1. 双击 `CISpir-Setup-… .exe`；
2. 按提示选择安装目录（可保持默认）；
3. 完成。首次运行如出现 SmartScreen 提示，见下方「首次打开提示」。

## 四、首次打开提示

**macOS（Gatekeeper 提示）：**
若提示「CISpir 无法打开，因为它来自身份不明的开发者」，任选其一：
- 右键（或按住 Control 点击）应用图标 → 「打开」→ 再点「打开」；或
- 系统设置 → 隐私与安全性 → 往下找到「仍要打开」。

> Apple Silicon 用户请下载 arm64 版；如执意使用 x64 版，系统会提示安装 Rosetta 2，按提示安装即可。

**Windows（SmartScreen 提示）：**
若提示「Windows 已保护你的电脑」，点击「更多信息」→「仍要运行」。

---

# English

## 1. Which file should I download?

| Your device | Chip | Download |
|---|---|---|
| Mac (Apple M1 / M2 / M3 / M4) | Apple Silicon (arm64) | [CISpir-1.4.0-arm64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-1.4.0-arm64.dmg) |
| Mac (Intel) | Intel (x64) | [CISpir-1.4.0-x64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-1.4.0-x64.dmg) |
| Mac (not sure which chip) | Universal | [CISpir-1.4.0-universal.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-1.4.0-universal.dmg) |
| Windows (Intel / AMD) | x64 | [CISpir-Setup-1.4.0-x64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-Setup-1.4.0-x64.exe) |
| Windows (ARM: Snapdragon / Copilot+ PC) | arm64 | [CISpir-Setup-1.4.0-arm64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-Setup-1.4.0-arm64.exe) |

> - The `.dmg` is for installation; the `.zip` is only for auto-updates / scripted deployment — ordinary users don't need it.
> - `Setup` is the installer (creates shortcuts, supports auto-update); the plain `.exe` is portable (no install, run directly, no auto-update). The installer is recommended.

## 2. How do I check my chip?

**macOS:** Apple menu  → About This Mac:
- If it says "Chip: Apple M1/M2/M3/M4" → download arm64;
- If it says "Processor: Intel …" → download x64.

**Windows:** Settings → System → About:
- If "System type" says "x64-based processor" → download x64;
- If it says "ARM-based processor" → download arm64.

## 3. Installation

**macOS:**
1. Double-click the downloaded `.dmg`;
2. Drag CISpir into the Applications folder;
3. If the first launch warns "cannot be opened because it is from an unidentified developer", see below.

**Windows:**
1. Double-click `CISpir-Setup-… .exe`;
2. Choose an install folder (default is fine);
3. Done. If SmartScreen appears on first run, see below.

## 4. First-launch notes

**macOS (Gatekeeper):**
If you see "CISpir can't be opened because it is from an unidentified developer", do either:
- Right-click (or Control-click) the app icon → Open → Open again; or
- System Settings → Privacy & Security → scroll down → "Open Anyway".

> Apple Silicon users should use the arm64 build; if you insist on the x64 build, macOS will prompt you to install Rosetta 2 — follow the prompt.

**Windows (SmartScreen):**
If you see "Windows protected your PC", click "More info" → "Run anyway".

---

# 日本語

## 1. どのファイルをダウンロードすればいい？

| お使いの端末 | チップ | ダウンロード |
|---|---|---|
| Mac（Apple M1 / M2 / M3 / M4） | Apple Silicon（arm64） | [CISpir-1.4.0-arm64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-1.4.0-arm64.dmg) |
| Mac（Intel） | Intel（x64） | [CISpir-1.4.0-x64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-1.4.0-x64.dmg) |
| Mac（チップが分からない） | ユニバーサル | [CISpir-1.4.0-universal.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-1.4.0-universal.dmg) |
| Windows（Intel / AMD） | x64 | [CISpir-Setup-1.4.0-x64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-Setup-1.4.0-x64.exe) |
| Windows（ARM：Snapdragon / Copilot+ PC） | arm64 | [CISpir-Setup-1.4.0-arm64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.0/CISpir-Setup-1.4.0-arm64.exe) |

> - `.dmg` はインストール用です。`.zip` は自動更新・スクリプト配布専用で、通常は不要です。
> - `Setup` 付きはインストーラー版（ショートカット作成・自動更新対応）。`Setup` なしの `.exe` はポータブル版（インストール不要・直接実行、自動更新なし）。インストーラー版を推奨します。

## 2. チップの確認方法

**macOS:** アップルメニュー  → 「この Mac について」：
- 「チップ：Apple M1/M2/M3/M4」と表示 → arm64 を選択；
- 「プロセッサ：Intel …」と表示 → x64 を選択。

**Windows:** 設定 → システム → バージョン情報：
- 「システムの種類」が「x64 ベース プロセッサ」→ x64 を選択；
- 「ARM ベース プロセッサ」→ arm64 を選択。

## 3. インストール手順

**macOS:**
1. ダウンロードした `.dmg` をダブルクリック；
2. CISpir を「アプリケーション」フォルダへドラッグ；
3. 初回起動時に「身元不明の開発元のため開けません」と表示された場合は下記参照。

**Windows:**
1. `CISpir-Setup-… .exe` をダブルクリック；
2. インストール先を選択（既定でOK）；
3. 完了。初回起動時に SmartScreen が出た場合は下記参照。

## 4. 初回起動時の注意

**macOS（Gatekeeper）:**
「CISpir は身元不明の開発元のため開けません」と表示された場合、次のいずれか：
- アプリのアイコンを右クリック（または Control＋クリック）→「開く」→ もう一度「開く」；または
- システム設定 → プライバシーとセキュリティ → 下へスクロール →「このまま開く」。

> Apple Silicon の方は arm64 版をご利用ください。x64 版を使う場合は Rosetta 2 のインストールを求められますので、画面の案内に従ってください。

**Windows（SmartScreen）:**
「Windows によって PC が保護されました」と表示された場合、「詳細情報」→「実行」を選択。
