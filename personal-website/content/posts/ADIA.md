---
title: "Causal Structure Discovery in DAG (3rd Place - $10,000)"
date: 2024-11-21
type: "post"
draft: false
categories: ["Competition"]
tags: ["Causal", "Machine Learning"]
author: "Gu Guoqin"
summary: "ADIA 2024 - Focused on one of the core problems in modern data science: discovering causal relationships from data."
project_type: "Competition"
award: "3rd Place - $10,000"
tech_stack: ["XGBoost", "Feature Engineering", "Causal Discovery"]
project_url: "#"
competition_url: "https://hub.crunchdao.com/competitions/causality-discovery"
solution_url: "https://stream-physician-14c.notion.site/ADIA-Lab-Causal-Discovery-Challenge-Rank3-Solution-1397f010c9428099aa82e4503cad1c20?pvs=143"
image: "/images/competition/ADIA.png"
---

## Project Overview

This project was developed for the **ADIA-LAB 2024 Causal Discovery Challenge**, where I achieved **3rd place** among hundreds of participants worldwide, earning a prize of **$10,000**. The challenge focused on one of the most fundamental problems in modern data science: discovering causal relationships from observational data.

## Challenge Description

The primary objective of this competition was **causal discovery**: participants were tasked with identifying the underlying causal graph (Directed Acyclic Graph - DAG) for each given dataset. The competition provided extensive training data consisting of datasets paired with their corresponding ground-truth causal DAGs, enabling participants to either calibrate unsupervised discovery methods or develop supervised prediction models.

Each causal graph in the competition followed a specific structural pattern:
- **Treatment Variable (X)**: The primary intervention variable
- **Outcome Variable (Y)**: The target variable influenced by X
- **Additional Variables**: Other nodes that could serve various causal roles including:
  - **Confounders**: Variables affecting both X and Y
  - **Mediators**: Variables in the causal pathway from X to Y
  - **Colliders**: Variables influenced by both X and Y
  - **Instrumental Variables**: Variables affecting X but not directly affecting Y

The evaluation metric focused on accurately identifying each variable's causal role in relation to the X→Y relationship, making this a challenging multi-class classification problem in the causal inference domain.

## Technical Approach

![](/images/competition/ADIA-Solution.png)
*Our Framework*

### 1. Innovative Data Augmentation Strategy

Our key breakthrough came from recognizing that causal graphs contain multiple causal relationships beyond the primary X→Y connection. We developed a novel data augmentation technique by systematically redefining treatment and outcome variables:

**Core Insight**: Since causal graphs follow consistent generation rules, any pair of causally connected variables can serve as new X and Y variables for training purposes.

**Implementation**:
- Identified all causal relationships within each graph
- Created new training instances by designating different variable pairs as X and Y
- Maintained the original graph structure while remapping variable roles
- Generated approximately **11.21x more training data** per original graph

**Impact**: This augmentation strategy improved model performance by **~5%**, providing crucial additional training signal for the machine learning model.

### 2. Comprehensive Feature Engineering Framework

We developed a robust feature engineering pipeline consisting of six distinct categories:

- **Correlation Features**
- **Information-Theoretic Features**
- **Discretization-Based Features**
- **Regression Coefficients Features**
- **Causal Discovery Features**
- **Other Statistical Features**

## Results and Achievements

- **Final Accuracy**: 0.7406 (official competition metric)
- **Final Ranking**: **3rd place** out of hundreds of international participants
- **Prize Award**: **$10,000**

---

*This project demonstrated the successful integration of causal inference theory with practical machine learning techniques, showcasing how innovative data augmentation and comprehensive feature engineering can achieve state-of-the-art performance in challenging causal discovery tasks.*