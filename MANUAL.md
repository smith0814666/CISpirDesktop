# CISpir User Manual

**Languages:** [English](MANUAL.md) · [中文](MANUAL.zh.md) · [日本語](MANUAL.ja.md)

CISpir turns audio, video, and text into comprehensible-input material for language learning, with text-to-speech, transcription, subtitle editing, Anki export, and practice tools. It is built for learning Japanese and English.

## Table of contents

1. [Getting started](#1-getting-started)
2. [Text to speech (TTS)](#2-text-to-speech-tts)
3. [Transcription (audio / video → text)](#3-transcription-audio--video--text)
4. [Subtitle workbench & Anki](#4-subtitle-workbench--anki)
5. [Practice & learning tools](#5-practice--learning-tools)
6. [Relax & focus](#6-relax--focus)
7. [Settings](#7-settings)
8. [History & backup](#8-history--backup)
9. [Updates](#9-updates)
10. [Troubleshooting](#10-troubleshooting)

## 1. Getting started

- **Choose your target language** on first launch (Japanese or English). This decides the speech content language, the media recognition language, and which Japanese-specific tools are shown.
- **Interface language** (Simplified Chinese / English / 日本語) is independent of the target language — you can use a Chinese interface while learning Japanese.
- **Groq API key** is only needed for AI transcription (speech → text). Get a `gsk_…` key from Groq and paste it in Settings. It is stored encrypted in the system keychain, never in history or project files.

## 2. Text to speech (TTS)

**What it's for:** turn any Japanese or English text into natural speech so you can listen, shadow, and study it sentence by sentence. This is the "text → comprehensible input" core of the app.

**How to use:**

1. Enter text. Two modes are available:
   - **Article** — a single block of text.
   - **Dialogue** — multiple character lines, each with its own name and voice style, merged into one MP3.
2. (Japanese only) Optionally set **Pronunciation fix**: give names, places, or rare words their correct furigana reading. The rule applies to the whole text and is saved on this device.
3. Choose a **voice style** — natural, calm, gentle, energetic, or slow learning.
4. Click **Generate**. Long text is automatically split into sentences and merged into one MP3 with per-sentence timestamps.
5. **Study the result:**
   - Click any sentence to play it.
   - Loop a single sentence, change the playback speed, or use **shadowing** (repeat after the audio).
   - Every sentence is tied to its own timestamp, so you can jump anywhere.
6. **Export** the MP3 and a timestamp file.

## 3. Transcription (audio / video → text)

**What it's for:** turn audio or video you want to study into a sentence-by-sentence transcript with subtitles — the "audio/video → comprehensible input" half of the app.

**How to use:**

1. Open **Import media**.
2. Choose a source:
   - **YouTube** — paste a link.
   - **Bilibili** — paste a link (you can pick a specific part/分P).
   - **Local file** — audio (MP3, WAV, M4A, FLAC, OGG, WebM) or video (MP4, WebM, MKV, MOV), up to 2 GB and 4 hours.
   - **Podcast** — search a show name, paste a public RSS/Atom or Apple Podcasts link.
3. If the source has **official subtitles**, CISpir uses them automatically — this costs nothing and needs no API key.
4. If there are no subtitles, CISpir asks for your confirmation, then downloads the audio (if needed) and transcribes it with **Groq Whisper** (requires a Groq key — see Settings).
5. **Study the result:** a sentence-by-sentence transcript. Click any line to play/loop it.
6. **Edit:** change the title, each sentence's text, and its start/end time. To re-transcribe, a preview is generated first and only replaces the current subtitles after you confirm.

- An interrupted transcription is saved as a **draft**; click **Continue processing** to restart from scratch.

## 4. Subtitle workbench & Anki

**What it's for:** turn a transcript into study material — edit it, analyze each sentence with AI, and export sentences/words to Anki flashcards (with audio) for spaced repetition.

**How to use:**

1. From a media session, open the **subtitle workbench**.
2. Click any sentence to play it, loop it, or edit its text and timing.
3. **AI analysis** (needs the AI configured in Settings): select a sentence and click **Analyze** to get a translation, grammar parsing, and extracted vocabulary; generate a **full overview** (summary, topics, difficulty, key vocabulary) for the whole text.
4. **Save to Anki:** save a sentence, word, or phrase. Install and enable the **AnkiConnect** add-on (default port `8765`) and keep Anki running. Cards are saved to the `CISpir` deck (configurable in Settings → Anki).
5. Each card includes the full sentence's audio (0.5 s before, 1 s after the sentence).

## 5. Practice & learning tools

**What it's for:** active practice — speaking, grammar, and conversation — to reinforce the material you've imported.

- **Voice practice:** speak into the microphone and get your speech transcribed (grant microphone permission when asked).
- **Japanese conjugation & quiz** (Japanese target only): practice verb/adjective conjugations and take quizzes.
- **AI conversation practice:** hold a conversation with AI to practice the language.
- **NHK Easy News** (Japanese only): paste an article link to import the text with furigana for reading practice.

## 6. Relax & focus

**What it's for:** a quiet space to rest, or a focus timer for study sessions.

- **Ambient sound scenes**, white / pink / brown **noise**, and **binaural beats** for background ambience.
- **Pomodoro timer** starts automatically in the study workspace and prompts you to rest after each focus session (configure durations in Settings → Pomodoro).

## 7. Settings

Open **Settings** from the top bar. Settings are grouped into tabs.

### Appearance

- **Theme**: System (follow the OS), Light, or Dark.
- **Text size**: Comfortable or Large.

### AI (subtitle AI)

Configures the AI used in the subtitle / learning workspace to translate, parse grammar, and extract vocabulary from each sentence, and to generate full-text overviews.

- **Provider**: Groq, or a custom OpenAI-compatible endpoint.
- **API address**: the base URL (only needed for a custom provider).
- **API key**: your key. It is encrypted by the operating system and never written to history or project files.
- **Model**: the model name.
- **Explanation language**: the language AI explanations are written in; can follow the interface language.
- **Response style**: Precise or Balanced.
- **Timeout**: request timeout.
- Use **Test connection** to verify, and **Save** to store. **Delete key** removes the saved key.

### Groq (transcription)

- **Groq API key**: required for AI transcription (speech → text). Enter a `gsk_…` key. It is stored encrypted in the system keychain.

### Pomodoro

- **Start automatically in the study workspace**: when enabled, the timer starts when you enter the study workspace and pauses when you leave.
- **Focus / Short break / Long break**: minutes. Ranges — focus 5–90, short break 1–30, long break 5–60.
- Every **4 focus sessions** lead to a long break. New durations apply from the next session.

### Anki

- **Anki deck name**: the deck cards are saved to (default `CISpir`).

### Other settings

- **Interface language**: Simplified Chinese / English / 日本語. Switch anytime; independent of the target language.
- **Target learning language**: Japanese or English (set on first launch; changeable from the top bar). It controls the TTS content language and which learning tools are shown.
- **Pronunciation fix** (Japanese only): assign correct furigana readings to names, places, or rare words; the rules are saved on this device and applied to the whole text.

## 8. History & backup

- History keeps your saved sessions (text, audio, and transcripts) with no fixed count limit. Deleting a session also deletes its audio.
- Full backup export/import is available (data export / import from backup).

## 9. Updates

- **More → Check for updates** checks the public GitHub Releases. The Windows installer auto-installs after confirmation; macOS and Windows portable open the download link.

## 10. Troubleshooting

- **Transcription fails**: the bundled ffmpeg / yt-dlp may be missing — reinstall the app to restore them. The app never falls back to the system PATH.
- **Groq key**: AI transcription requires a valid `gsk_…` key.
- **Anki save fails**: make sure AnkiConnect is installed and Anki is running.
- **macOS "unidentified developer"**: see the download guide (README).
- **TTS needs internet**: speech is generated online with Microsoft Edge TTS.
