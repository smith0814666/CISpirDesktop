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
7. [History, backup & settings](#7-history-backup--settings)
8. [Updates](#8-updates)
9. [Troubleshooting](#9-troubleshooting)

## 1. Getting started

- **Choose your target language** on first launch (Japanese or English). This decides the speech content language, the media recognition language, and which Japanese-specific tools are shown.
- **Interface language** (Simplified Chinese / English / 日本語) is independent of the target language — you can use a Chinese interface while learning Japanese.
- **Groq API key** is only needed for AI transcription (speech → text). Get a `gsk_…` key from Groq and paste it in Settings. It is stored encrypted in the system keychain, never in history or project files.

## 2. Text to speech (TTS)

1. Enter Japanese or English text.
2. Choose a voice style (natural, calm, gentle, energetic, slow learning).
3. Click **Generate**. Long text is split into sentences automatically and merged into one MP3 with per-sentence timestamps.

- Click any sentence to play it; loop, speed control, and shadowing are available.
- **Dialogue mode**: add multiple character lines, each with its own name and voice style, then merge them into one MP3.
- **Furigana / pronunciation** (Japanese only): specify the correct reading for names or rare words; the rule applies to the whole text.
- Export the MP3 and a timestamp file.

## 3. Transcription (audio / video → text)

1. Go to **Import media** and choose a source: a YouTube link, a Bilibili link (with part selection), a local audio/video file, or a podcast.
2. If the source has official subtitles, CISpir uses them first (no API cost).
3. Otherwise, after your confirmation, it downloads the media if needed and transcribes it with Groq Whisper.

- Supported local audio: MP3, WAV, M4A, FLAC, OGG, WebM. Video: MP4, WebM, MKV, MOV. Max 2 GB per file, 4 hours per media.
- Interrupted transcriptions are saved as drafts; click **Continue processing** to restart from scratch.
- Edit the transcript (title, sentence text, start/end time) and re-transcribe with a preview before replacing the current subtitles.

## 4. Subtitle workbench & Anki

- The subtitle workbench lets you edit each sentence's text and timing.
- Save a sentence, word, or phrase to Anki. Install and enable the **AnkiConnect** add-on (default port `8765`) and keep Anki running. Cards are saved to the `TextVoice` deck.
- Each card includes the full sentence's audio (0.5 s before, 1 s after the sentence).

## 5. Practice & learning tools

- **Voice practice**: speak into the microphone and get your speech transcribed.
- **Japanese tools** (Japanese target only): verb/adjective conjugation practice, quizzes, and furigana annotation.
- **AI conversation practice**: practice dialogue with AI.
- **NHK Easy News** (Japanese only): paste an article link to import the text with furigana.

## 6. Relax & focus

- Ambient sound scenes, white / pink / brown noise, binaural beats, and a Pomodoro timer.

## 7. History, backup & settings

- History keeps up to 100 sessions (saved text, audio, and transcripts). Deleting a session also deletes its audio.
- Full backup export/import is available.

## 8. Updates

- **More → Check for updates** checks the public GitHub Releases. The Windows installer auto-installs after confirmation; macOS and Windows portable open the download link.

## 9. Troubleshooting

- **Transcription fails**: the bundled ffmpeg / yt-dlp may be missing — reinstall the app to restore them. The app never falls back to the system PATH.
- **Groq key**: AI transcription requires a valid `gsk_…` key.
- **Anki save fails**: make sure AnkiConnect is installed and Anki is running.
- **macOS "unidentified developer"**: see the download guide (README).
- **TTS needs internet**: speech is generated online with Microsoft Edge TTS.
