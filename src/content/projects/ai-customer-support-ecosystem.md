---
title: "AI Customer Support Ecosystem"
summary: "An autonomous support system for a high-volume gaming e-commerce store: a RAG pipeline over the full product catalogue, plus tool-calling agents that query the live order and digital-key API and answer with real status."
status: completed
startDate: 2025-01-01
role: "Freelance AI engineer — sole designer and implementer"
languages: ["Python"]
tools: ["OpenAI GPT-4o", "LangChain", "Vector databases", "REST APIs"]
tags: ["Agentic AI", "RAG", "LLM", "Freelance"]
featured: false
---

## The brief

A high-volume e-commerce store selling games and gaming hardware, with a support queue full of
questions a generic chatbot cannot answer: whether a title runs on a given machine, why a digital
key has not arrived, which hardware fits a described setup.

## Architecture

**Conversation and intent.** OpenAI models form the backbone of the chat interface, handling intent
recognition and conversational flow.

**Grounding.** A full retrieval-augmented generation pipeline built with LangChain: the entire
product catalogue, the FAQs and the troubleshooting guides were vectorised into a vector database,
so answers are anchored to verified store content instead of the model's own recollection.

**Action.** Autonomous GPT-4o tool-calling agents decide for themselves when a question needs live
data — they call the internal order and digital-key tracking API, parse the payload, and return the
customer's actual status.

## Outcome

The system deflected a significant share of tier-1 tickets and gave customers 24/7 resolution on
digital delivery problems, while keeping the model strictly anchored to a verified database. The
hard part was not the chat interface — it was deciding when the assistant is allowed to act, and
making sure it never answers a delivery question from memory.
