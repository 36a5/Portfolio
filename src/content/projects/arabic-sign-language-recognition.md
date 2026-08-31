---
title: "Arabic Sign Language Recognition"
summary: "Graduation project at King Saud University: a deep-learning pipeline that reads Arabic Sign Language from video, using MediaPipe Holistic landmarks and an LSTM classifier for temporal gestures."
status: completed
startDate: 2025-11-15
endDate: 2025-12-09
role: "Machine learning engineer — dataset pipeline, model training and evaluation"
team:
  - "Abdulrhman Salamah"
  - "Faris Ali Mukhrish"
  - "Abdulrahman Ael Wadani"
languages: ["Python"]
tools: ["TensorFlow", "MediaPipe", "OpenCV", "NumPy", "Jupyter"]
tags: ["Deep Learning", "Computer Vision", "Graduation Project"]
featured: true
links:
  - label: "Training repository"
    url: "https://github.com/36a5/Graduation_Project_Training_Ground"
---

## The problem

Arabic Sign Language has no reliable, openly available recognition system. Deaf signers in
Saudi Arabia have to rely on human interpreters for interactions that hearing people handle
alone. Our graduation project set out to close part of that gap with a model that reads signed
words from ordinary video.

## Approach

The pipeline has two halves. **MediaPipe Holistic** extracts pose, face and hand landmarks from
each video frame, which reduces a full RGB frame to a compact vector of coordinates. Those
per-frame vectors are stacked into fixed-length sequences, and an **LSTM network** classifies the
sequence as a whole — because a sign is a movement over time, not a single pose.

Working on landmarks rather than raw pixels made the model far cheaper to train and far less
sensitive to lighting, background and clothing than an end-to-end video CNN would have been.

## Dataset workflows

The training ground supports two paths, so experiments stay comparable:

- **Ready dataset** — an existing corpus with numeric word IDs mapped to Arabic words.
- **Custom dataset** — sequences we recorded ourselves, stored as `.npy` landmark arrays, covering
  everyday words such as *أنا*, *أريد*, *الآن*, *لا*, *ماذا*, *هذا* and *هنا*.

Each dataset trains its own model, saved separately, so results from a controlled corpus and from
our own recordings never get mixed up.

## What the repository contains

A single notebook drives the whole thing top to bottom: dependency setup, landmark extraction,
sequence generation, training, evaluation, and real-time inference from a webcam. It is written to
be re-run and modified rather than read once.

## Where it came from

This is the second version of the work. The first project targeted the Arabic alphabet —
single-hand static gestures — and its full report is kept in the repository for reference. Moving
from alphabet letters to whole signed words is what forced the shift to sequence models.
