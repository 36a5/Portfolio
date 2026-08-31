---
title: "Product Success Prediction"
summary: "A machine-learning model in R that predicts whether a new product will succeed, trained on historical sales data."
status: completed
startDate: 2024-01-01
endDate: 2024-03-31
role: "Sole author"
languages: ["R"]
tools: ["R", "Regression", "Feature engineering"]
tags: ["Machine Learning", "Forecasting", "Tabular Data"]
---

An early modelling project built entirely in R: take historical sales data for products already on
the market, work out which attributes actually separate the ones that sold from the ones that did
not, and turn that into a prediction for a product that has no sales history yet.

The useful part was the feature work rather than the algorithm — most of the signal lived in how
the product attributes were encoded, not in which model was fitted on top of them.
