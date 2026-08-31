---
title: "Predictive Maintenance for Digital Substations"
summary: "Gradient-boosting models that forecast the status of Digital Substation assets a week ahead, trained on legacy logs that were roughly 57% incomplete — plus the platform that put the predictions in front of reliability engineers."
status: completed
startDate: 2025-09-01
endDate: 2025-12-31
role: "Data Scientist, Power Systems Engineering Department, Saudi Aramco"
team:
  - "Power Systems Engineering Department, Saudi Aramco"
languages: ["Python", "R", "SQL", "JavaScript"]
tools: ["Gradient Boosting", "pandas", "SQL Server", "Node.js", "Power BI", "DAX"]
tags: ["Machine Learning", "Time Series", "Industry", "Full Stack"]
featured: true
links:
  - label: "Recommendation letter (PDF)"
    url: "/letters/saudi-aramco-recommendation-letter.pdf"
---

## Context

A cooperative training placement in Saudi Aramco's Power Systems Engineering Department, working on
Digital Substation analytics and the department's Integrated Data Platform.

## The data problem first

The usable signal was buried in legacy system logs with around **57% of values missing**. Before
any model could be trained, the raw logs had to become clean, structured datasets — the part of the
work that decided whether anything downstream would be trustworthy. That transformation was done in
Python and R, with careful attention to what a missing value actually meant in each column rather
than a blanket imputation.

## Modelling

Predictive maintenance models were built with **gradient boosting**, using a
**one-model-per-target** strategy across `Qmean`, `Qmax` and repetition rates rather than a single
multi-output model. Each target gets a model tuned to its own behaviour, and a weak target can be
diagnosed and retrained without disturbing the others. The models forecast asset status for the
coming week.

## Getting predictions to the engineers

A model nobody sees changes nothing. The predictions were delivered through an integrated data
platform built alongside them:

- a **Node.js** backend exposing REST APIs over a **SQL Server** database, handling ingestion from
  grid assets;
- an interactive dashboard showing asset health, maintenance schedules and AI risk alerts;
- automated **Python** reporting scripts replacing manual report preparation;
- **Power BI** dashboards in DAX tracking KPIs for management.

## Recognition

Two certificates of appreciation, one from the Senior Vice President of Power Systems, and a
recommendation letter from the supervisor of the Power Systems Engineering Department — linked
alongside this page.

*No code or data from this work is public.*
