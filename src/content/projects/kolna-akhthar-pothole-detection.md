---
title: "Kolna Akhthar — Pothole Detection"
summary: "A YOLO11 computer-vision system that detects potholes from road imagery, records each location and pins it to a map, in support of Saudi Arabia's greening initiative."
status: completed
startDate: 2025-01-29
endDate: 2025-02-28
role: "Machine learning engineer"
team:
  - "Abdullrahman Alajlan"
  - "Abdulrhman Salamah"
  - "Abdulrahman Wadani"
languages: ["Python"]
tools: ["YOLO11", "OpenCV", "Ultralytics"]
tags: ["Computer Vision", "Object Detection", "Team Project"]
links:
  - label: "Repository"
    url: "https://github.com/36a5/Kolna_Akhthar"
---

## The idea

*كلنا أخضر* — "we are all greener" — is the motto this project takes its name from. Road surface
damage is a maintenance problem with an environmental cost, and surveying it by hand does not
scale across a city.

## How it works

We trained a **YOLO11** detector on images of roads and potholes, and run it over road footage with
OpenCV. Every detection is logged with its location and a saved image, and the results are placed
on a map — so the output is not just "there is a pothole in this frame" but a survey a maintenance
team can act on.

## Team and context

Built by three Data Science and Machine Learning students at King Saud University. Waste detection
and a greenery-percentage measure were the next features planned on top of the same detection
pipeline.
