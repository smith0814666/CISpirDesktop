# CISpir

CISpir — 把音视频和文字，变成可理解输入的语言学习材料。

**下载最新版：** <https://github.com/smith0814666/CISpirDesktop/releases/latest>

**语言 / Languages:** [English](README.md) · [中文](README.zh.md) · [日本語](README.ja.md)

**操作手册 / User Manual:** [English](MANUAL.md) · [中文](MANUAL.zh.md) · [日本語](MANUAL.ja.md)

---

## 一、我该下载哪一个？

| 我的设备 | 芯片 | 下载文件 |
|---|---|---|
| Mac（Apple M1 / M2 / M3 / M4） | Apple Silicon（arm64） | [CISpir-1.4.1-arm64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.1/CISpir-1.4.1-arm64.dmg) |
| Mac（Intel） | Intel（x64） | [CISpir-1.4.1-x64.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.1/CISpir-1.4.1-x64.dmg) |
| Mac（不确定芯片） | 通用 | [CISpir-1.4.1-universal.dmg](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.1/CISpir-1.4.1-universal.dmg) |
| Windows（Intel / AMD） | x64 | [CISpir-Setup-1.4.1-x64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.1/CISpir-Setup-1.4.1-x64.exe) |
| Windows（ARM：骁龙 / Copilot+ PC） | arm64 | [CISpir-Setup-1.4.1-arm64.exe](https://github.com/smith0814666/CISpirDesktop/releases/download/v1.4.1/CISpir-Setup-1.4.1-arm64.exe) |

> - `.dmg` 用于安装；`.zip` 仅用于自动更新或脚本化部署，普通用户无需下载。
> - `Setup` 是安装版（创建快捷方式、支持自动更新）；不带 `Setup` 的 `.exe` 是便携版（免安装、双击即用，但不支持自动更新）。推荐安装版。

## 二、如何查看我的芯片？

**macOS：** 点击左上角  → 「关于本机 / About This Mac」：
- 显示「芯片 Chip：Apple M1/M2/M3/M4」→ 下载 arm64；
- 显示「处理器 Processor：Intel …」→ 下载 x64。

**Windows：** 设置 → 系统 → 关于 / 系统信息：
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
