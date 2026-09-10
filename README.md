# CISpir

CISpir — turns audio, video, and text into comprehensible-input language-learning material.

**Download the latest version:** <https://github.com/smith0814666/CISpirDesktop/releases/latest>

**Languages:** [English](README.md) · [中文](README.zh.md) · [日本語](README.ja.md)

**User Manual:** [English](MANUAL.md) · [中文](MANUAL.zh.md) · [日本語](MANUAL.ja.md)

---

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
- "Chip: Apple M1/M2/M3/M4" → download arm64;
- "Processor: Intel …" → download x64.

**Windows:** Settings → System → About:
- "x64-based processor" → download x64;
- "ARM-based processor" → download arm64.

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
