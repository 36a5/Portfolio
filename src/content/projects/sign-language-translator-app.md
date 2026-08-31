---
title: "Sign Language Translator App"
summary: "The application layer around the sign-language models: capture from a camera, run recognition, and turn the prediction into readable Arabic text."
status: completed
startDate: 2025-01-28
endDate: 2025-02-21
role: "Developer"
team:
  - "Abdulrhman Salamah"
languages: ["Python"]
tools: ["OpenCV", "MediaPipe"]
tags: ["Computer Vision", "Application"]
links:
  - label: "Repository"
    url: "https://github.com/36a5/Sign-language-translator-app"
---

## Overview

This is the application side of the sign-language work: the part a user actually touches. It takes
a live camera feed, runs the recognition pipeline over it, and surfaces the predicted sign as text.

It preceded the graduation project's training ground, and the lessons from it — mainly around
frame rate, buffering frames into sequences, and what happens when the signer moves out of frame —
shaped how the later model was trained.

> **Note:** this page is a summary written from the repository. Details on the interface, the
> supported vocabulary and the model version it ships with still need to be filled in.
