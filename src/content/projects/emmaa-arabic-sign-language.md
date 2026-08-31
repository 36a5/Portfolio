---
title: "Emma'a (إيماء) — Arabic Sign Language Recognition"
summary: "Graduation project at King Saud University, first place in the college competition: two computer-vision models — one for Arabic Sign Language letters, one for whole words — integrated into a single translation and learning application."
status: completed
startDate: 2025-01-28
endDate: 2025-12-09
role: "Machine learning engineer — dataset pipeline, model training, evaluation and integration"
team:
  - "Abdulrhman Salamah"
  - "Faris Ali Mukhrish"
  - "Abdulrahman Ael Wadani"
languages: ["Python"]
tools: ["TensorFlow", "MediaPipe", "OpenCV", "NumPy", "Jupyter"]
tags: ["Deep Learning", "Computer Vision", "Graduation Project", "Arabic"]
featured: true
links:
  - label: "Model training repository"
    url: "https://github.com/36a5/Graduation_Project_Training_Ground"
  - label: "Application repository"
    url: "https://github.com/36a5/Sign-language-translator-app"
---

## The problem

Arabic Sign Language has no reliable, openly available recognition system. Deaf signers in Saudi
Arabia rely on human interpreters for interactions that hearing people handle alone. Emma'a — from
*إيماء*, "gesture" — set out to close part of that gap.

**It placed first in the Applied Computer Science graduation projects competition at King Saud
University.**

## Two models, one product

The project trains two computer-vision models and integrates them into a single application:

1. **Letters.** Static single-hand gestures for the Arabic alphabet — the first version of the
   work, and the foundation for everything after it.
2. **Words.** Whole signed words, which are movements rather than poses, and therefore need a model
   that reads a sequence rather than a frame.

## Approach

**MediaPipe Holistic** extracts pose, face and hand landmarks from every video frame, reducing a
full RGB frame to a compact coordinate vector. Those per-frame vectors are stacked into
fixed-length sequences, and an **LSTM network** classifies the sequence as a whole.

Working on landmarks rather than raw pixels made training far cheaper and left the model far less
sensitive to lighting, background and clothing than an end-to-end video CNN would have been.

## Datasets

Two workflows are supported, kept separate so results stay comparable:

- **Ready dataset** — an existing corpus with numeric word IDs mapped to Arabic words.
- **Custom dataset** — sequences we recorded ourselves, stored as `.npy` landmark arrays, covering
  everyday words such as *أنا*, *أريد*, *الآن*, *لا*, *ماذا*, *هذا* and *هنا*.

Each dataset trains its own model, saved separately, so a controlled corpus and our own recordings
never get mixed up.

## What the repository contains

A single notebook drives the whole pipeline top to bottom: dependency setup, landmark extraction,
sequence generation, training, evaluation, and real-time inference from a webcam. It is written to
be re-run and modified rather than read once.
