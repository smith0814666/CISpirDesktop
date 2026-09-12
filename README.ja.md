# CISpir

CISpir — 音声・動画・テキストを、理解可能なインプットの語学学習教材に変えます。

**最新版のダウンロード：** <https://github.com/smith0814666/CISpirDesktop/releases/latest>

**言語 / Languages:** [English](README.md) · [中文](README.zh.md) · [日本語](README.ja.md)

**マニュアル / User Manual:** [English](MANUAL.md) · [中文](MANUAL.zh.md) · [日本語](MANUAL.ja.md)

---

## 1. どのファイルをダウンロードすればいい？

| お使いの端末 | チップ | ダウンロード |
|---|---|---|
| Mac（Apple M1 / M2 / M3 / M4） | Apple Silicon（arm64） | [CISpir-1.4.3-arm64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.3/CISpir-1.4.3-arm64.dmg) |
| Mac（Intel） | Intel（x64） | [CISpir-1.4.3-x64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.3/CISpir-1.4.3-x64.dmg) |
| Mac（チップが分からない） | ユニバーサル | [CISpir-1.4.3-universal.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.3/CISpir-1.4.3-universal.dmg) |
| Windows（Intel / AMD） | x64 | [CISpir-Setup-1.4.3-x64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.3/CISpir-Setup-1.4.3-x64.exe) |
| Windows（ARM：Snapdragon / Copilot+ PC） | arm64 | [CISpir-Setup-1.4.3-arm64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.3/CISpir-Setup-1.4.3-arm64.exe) |

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
