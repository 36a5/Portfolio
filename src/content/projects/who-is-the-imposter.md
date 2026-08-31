---
title: "Who Is The Imposter?"
summary: "A real-time multiplayer drawing and social-deduction game: everyone draws the same secret word except one player, who has a different one and does not know they are the imposter."
status: completed
startDate: 2026-04-16
role: "Developer"
team:
  - "Abdulrhman Salamah"
languages: ["JavaScript"]
tools: ["Node.js", "WebSockets", "Vite", "HTML Canvas", "Vercel"]
tags: ["Web", "Real-Time", "Game"]
links:
  - label: "Play it"
    url: "https://d7oom-imposter.vercel.app"
  - label: "Repository"
    url: "https://github.com/36a5/imposter-game-V2"
---

## The game

Three to twelve players join a lobby with a six-character code. Everyone privately sees a secret
word for five seconds — except the imposter, who gets a similar but different word (say *Lion*
instead of *Cat*) and is never told they are the imposter. Players then take turns drawing on a
shared canvas, a few seconds each, while everyone else watches live. Afterwards, everyone votes on
who seemed off.

## What is interesting technically

The whole game is state shared across a room in real time: turn order, the canvas stream, the
countdown, the private word reveal, and the vote. Each client must see exactly the slice of state
it is allowed to see — the imposter's word must never reach another player, and the drawing has to
arrive fast enough that the timed turns stay fair.

A Node server owns the room state and the clients are a Vite front end talking to it over a
socket connection.
