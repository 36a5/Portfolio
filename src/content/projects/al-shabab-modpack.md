---
title: "al Shabab — Minecraft Modpack and Delivery Pipeline"
summary: "A curated Minecraft modpack with a fully automated delivery pipeline: one packwiz source of truth, CI validation, self-updating servers, and one-click updates for players."
status: completed
startDate: 2026-07-09
endDate: 2026-07-22
role: "Maintainer"
team:
  - "Abdulrhman Salamah"
languages: ["Shell", "GLSL"]
tools: ["packwiz", "GitHub Actions", "GitHub Pages", "Forge"]
tags: ["DevOps", "CI/CD", "Side Project"]
links:
  - label: "Repository"
    url: "https://github.com/36a5/Modpacks"
---

## What it is

An RPG sandbox modpack for a private Minecraft server (1.20.1 / Forge), built on three pillars:
RLCraft's systems without its frustration, Better MC's world, and a full Create plus
physics-vehicles tech stack.

## Why it belongs in a portfolio

The interesting part is not the mod list — it is the distribution. Every mod is a pinned
`.pw.toml` file under a single **packwiz** root, which is the only source of truth. From that one
published URL:

- the dedicated server self-updates on every restart,
- players sync with a single `update` script on any launcher,
- and a tagged release automatically produces both a CurseForge zip and a Modrinth `.mrpack`.

CI validates the pack and regenerates the index on every push, so a hand-edited index can never
ship. It is a small, complete example of treating a content bundle as a versioned, continuously
delivered artifact.
