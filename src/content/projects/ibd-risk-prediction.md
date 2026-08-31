---
title: "IBD Risk Prediction"
summary: "An end-to-end tabular ML project on a 900-patient clinical dataset: seven classifiers compared, the best exported as a portable scikit-learn pipeline you can call from anywhere."
status: completed
startDate: 2026-05-02
role: "Sole author"
team:
  - "Abdulrhman Salamah"
languages: ["Python"]
tools: ["scikit-learn", "pandas", "Jupyter", "joblib"]
tags: ["Machine Learning", "Healthcare", "Tabular Data"]
links:
  - label: "Repository"
    url: "https://github.com/36a5/enaiathon"
---

## The task

An Excel sheet of 900 patients with demographic, lifestyle and clinical features and a binary
inflammatory-bowel-disease label. The goal: produce a sensible IBD-risk probability for a new
patient, and ship the trained artifact so it can be called from a script, a notebook or a small
web app without rebuilding anything.

## Dataset

900 rows, 12 columns, no missing values, and perfectly balanced classes (450 / 450). Features span
age, gender and BMI; family history, smoking, antibiotic use and fast-food frequency; dysbiosis;
and ordinal fibre intake, stress and physical-activity levels.

## Method

Seven algorithms, one notebook each so the comparison stays honest and side-by-side. The winner was
chosen on ROC-AUC, and the **full pipeline** — preprocessing plus classifier — was serialised to a
single `.joblib` file rather than just the fitted estimator, so the preprocessing can never drift
away from the model that was trained on it.

## Scope

This dataset is for research and education. It is not medical advice, and the model has not been
clinically validated.
