---
title: "SDAIA Assistant — Routed Multi-Source RAG"
summary: "A LangGraph agent that routes each question to the right knowledge base, answers only from what it retrieves, grades its own answer, retries when the answer is weak, and escalates to a human when it cannot ground one."
status: completed
startDate: 2026-07-09
role: "Sole author — capstone submission"
team:
  - "Abdulrhman Salamah"
languages: ["Python"]
tools: ["LangGraph", "LangChain", "Vector stores", "Jupyter"]
tags: ["Agentic AI", "RAG", "LLM"]
featured: true
links:
  - label: "Repository"
    url: "https://github.com/36a5/abdulrhman-salamah-sdaia-workshop-ai-agents"
---

## What it does

Capstone project for *Building Agentic AI Systems*, Track C. The assistant answers questions about
SDAIA across three separate knowledge sources, and it does five things with every question:

1. **Routes** it to one of three sources — platform support, HR policy, or the National Strategy
   for Data and AI — and marks it *unclear* when the question is too vague to route.
2. **Answers** it through that source's specialist agent, which searches its own vector store and
   answers only from what it found.
3. **Grades its own answer.** If the answer is weak, it rewrites the search query and tries again,
   up to twice.
4. **Escalates to a person** when the question cannot be routed, or when it still cannot ground an
   answer after retrying.
5. **Writes a small fact to long-term memory**, so a later session remembers the user.

## Why the design matters

A single vector store over three unrelated corpora blurs the boundaries between them: an HR
question retrieves strategy text and the answer drifts. Routing first keeps each specialist agent
inside its own material, and self-grading plus a bounded retry stops the system from confidently
returning a weak answer. The human-in-the-loop path is the honest ending for questions it should
not attempt.

The whole thing runs on the **LangGraph Functional API**.
