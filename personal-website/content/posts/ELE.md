---
title: "AI-Powered Smart Ordering (2nd Place - ¥30,000)"
date: 2025-06-17
type: "post"
draft: false
categories: ["Competition"]
tags: ["LLM", "ASR", "RecSys"]
author: "Gu Guoqin"
summary: "ELE.me AI Competition 2025 - Accepts voice input from elderly and dialect users, providing voice recognition, intent classification, and dish recommendation services."
project_type: "Competition"
award: "2nd Place - ¥30,000"
tech_stack: ["SenseVoice ASR", "EfficientNet", "LLM for Rec"]
project_url: "#"
competition_url: "https://tianchi.aliyun.com/competition/entrance/532322/information"
solution_url: "https://github.com/BoNing-Gu/TianChi-ELE2025-Track1-2nd"
image: "/images/competition/ELE.jpeg"
---

## Project Overview

This project was developed for the **Alibaba Tianchi ELE.me AI Algorithm Competition**, where I achieved **2nd place** among hundreds of participants, earning a prize of **¥30,000**. The solution addresses the growing need for accessible food ordering systems as global life expectancy reaches 73.2 years and more elderly users embrace digital food delivery services.

## Challenge Description

The competition focused on creating an intelligent ordering system specifically designed for elderly users, addressing three core challenges:

1. **Automatic Speech Recognition (ASR)**: Convert elderly users' voice input into accurate text, handling various dialects and speech patterns
2. **Intent Classification (DOM)**: Determine whether the speech contains food ordering intent and proceed accordingly
3. **Dish Recommendation (QUE)**: Extract food preferences from speech and recommend optimal dishes considering seasonal factors, dietary preferences, and health requirements

The system needed to achieve high accuracy while maintaining inference time under 1 second for real-time user experience.

## Technical Approach

![](/images/competition/ELE-Workflow-V2-api.png)  
*Workflow-Api*

![](/images/competition/ELE-Workflow-V2-deploy.png)  
*Workflow-Deploy*


### 1. Automatic Speech Recognition (ASR)
- **Model**: Fine-tuned SenseVoice-small using FunASR framework
- **Enhancement**: Implemented 5-fold cross-validation with model ensemble (model soup) technique
- **Optimization**: Removed emoticons and punctuation from inference output
- **Performance**: Achieved 0.4827/0.5 score on test set

### 2. Intent Classification (DOM)
- **Preprocessing**: Converted audio to (256×256) Mel-spectrogram with center cropping
- **Model**: EfficientNet-B0 for spectrogram classification
- **Inference**: 5-fold cross-validation voting with audio length-weighted voting for long audio segments
- **Performance**: Achieved perfect score of 0.2998/0.3

### 3. Dish Recommendation (QUE)
- **Core Innovation**: Four-path recall system combining statistical and semantic approaches
- **Architecture**: LLM Solver → Food Searcher → LLM Scorer → LLM Reranker
- **Multi-path Strategy**: Each path focuses on different aspects (elderly-specific, general, target-optimized)
- **Performance**: Achieved 0.1820/0.2 recieve score judged by EGPT

## Key Innovations

### 1. Multi-Path Recall System
- **Statistical Layer**: Clustering based on common substrings and weighted features
- **Semantic Layer**: TF-IDF, BM25 sparse vectors, and BGE dense embeddings
- **Result**: Generated 2,318-3,027 food categories for comprehensive coverage

### 2. Model Fusion Techniques
- **ASR Model Soup**: Combined 5-fold cross-validation models without speed loss
- **Spectrogram Classification**: Innovative use of EfficientNet for audio intent recognition
- **LLM Integration**: Multiple specialized prompts for different scenarios

## Social Impact

### Bridging the Digital Divide
- **Dignified Aging**: Natural voice interaction preserves elderly users' autonomy
- **Accessibility**: Simplified ordering process reduces technology barriers
- **Personalization**: Tailored recommendations considering health and dietary needs

### Technical Benefits
- **Low Latency**: Edge deployment reduces response time and user anxiety
- **Privacy First**: Sensitive data stays local, only anonymized data transmitted
- **Green AI**: Utilizes edge computing resources, reducing cloud energy consumption
- **Scalability**: Establishes paradigm for multimodal edge intelligence applications

## Results and Recognition

- **Final Score**: 0.9647 weighted accuracy (α×ASR + β×DOM + γ×QUE)
- **Ranking**: 2nd place among hundreds of teams
- **Prize**: ¥30,000
- **Innovation**: First to combine statistical methods with LLM-based multi-path recall and reranking

---

*This project demonstrates the potential of AI to create inclusive technology solutions that serve vulnerable populations while advancing the state-of-the-art in multimodal AI systems.*