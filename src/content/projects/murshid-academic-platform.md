---
title: "Murshid — Academic Support Platform"
summary: "An Arabic academic-guidance platform for university students: a Laravel web app, an AI chatbot, and a wake-word voice assistant that answers hands-free in Arabic."
status: completed
startDate: 2025-04-26
role: "Developer"
team:
  - "Abdulrhman Salamah"
languages: ["PHP", "Python", "JavaScript"]
tools: ["Laravel", "Blade", "Streamlit", "Whisper", "Wav2Vec2", "Edge TTS"]
tags: ["Full Stack", "NLP", "Arabic"]
links:
  - label: "Repository"
    url: "https://github.com/36a5/murshed"
---

## What it is

مرشد (*Murshid*) is a comprehensive academic-guidance platform aimed at university students, built
first around King Saud University. The name is an acronym in Arabic: **م**ساعد **ر**قمي **ش**امل
**د**عم أكاديمي — a comprehensive digital academic-support assistant.

## Three parts, one platform

1. **Web application (Laravel).** User registration, login and password reset, a student dashboard,
   and access to academic guidance resources. The interface is responsive and supports Arabic RTL
   alongside English.
2. **Chatbot (Streamlit).** An interactive assistant for text-based academic questions.
3. **Voice assistant (Python).** Activated by the wake word *"مرشد"*, it answers hands-free using
   Arabic speech recognition (Wav2Vec2 and Whisper) and text-to-speech (Edge TTS).

## Why it was built this way

Students ask academic questions in the middle of doing something else — walking to class, sitting
in a lab. A voice path that needs no typing and answers in Arabic removes the friction that a
text-only portal leaves in place. The web app carries the account and the records; the chatbot and
the voice assistant are two doors into the same guidance.
