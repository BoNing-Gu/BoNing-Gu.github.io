---
title: "Financial Text Contradiction Detection (2nd Place - ¥30,000)"
date: 2024-08-20
type: "post"
draft: false
categories: ["Competition"]
tags: ["LLM", "Financial AI"]
author: "Gu Guoqin"
summary: "AFAC 2024 - Developed an advanced system to detect contradictions and errors in financial long texts using Large Language Models."
project_type: "Competition"
award: "2nd Place - ¥30,000"
tech_stack: ["AI Agent", "LoRA"]
project_url: "#"
competition_url: "https://tianchi.aliyun.com/competition/entrance/532209/information"
solution_url: "https://github.com/BoNing-Gu/TianChi-AFAC2024-Track4-2ndPrize"
image: "/images/competition/AFAC.jpg"
---

## Project Overview

This project was developed for the **Alibaba Tianchi Advanced Fintech AI Competition**, where I achieved **2nd place** among hundreds of participants, earning a prize of **¥30,000**.

## Challenge Description

The competition focused on detecting contradictions and errors in financial long texts using Large Language Models (LLMs). The task required:

- Analyzing complex financial documents
- Identifying logical inconsistencies and factual errors
- Developing robust evaluation metrics for financial text analysis
- Achieving high precision and recall in contradiction detection

## Technical Approach

### Data Augmentation Strategy
I developed a novel data augmentation strategy using **GPT-4** to generate diverse training examples:
- Created synthetic contradictory text pairs
- Enhanced dataset diversity with domain-specific financial scenarios
- Improved model generalization through strategic data expansion

### Model Architecture
The solution utilized **GLM4-9B** as the base model with several key innovations:
- **LoRA (Low-Rank Adaptation)** fine-tuning for efficient parameter updates
- Custom attention mechanisms for long document processing
- Multi-task learning framework for contradiction detection and classification

### Key Technical Features
- **Efficient Fine-tuning**: Implemented LoRA technique to reduce computational costs while maintaining performance
- **Robust Evaluation**: Created comprehensive metrics specifically designed for financial text analysis
- **Scalable Architecture**: Designed system to handle varying document lengths and complexity

## Results and Achievements

- **F1 Score**: 0.5018 (competition metric)
- **Ranking**: 2nd place out of hundreds of participants
- **Prize**: ¥30,000
- **Innovation**: Novel data augmentation approach recognized by judges

## Technical Stack

- **Large Language Models**: GPT-4, GLM4-9B
- **Fine-tuning**: LoRA (Low-Rank Adaptation)
- **Programming**: Python
- **Frameworks**: PyTorch, Transformers
- **Data Processing**: Pandas, NumPy

## Key Learnings

1. **Data Quality Matters**: The novel data augmentation strategy was crucial for achieving top performance
2. **Efficient Fine-tuning**: LoRA proved to be an excellent balance between performance and computational efficiency
3. **Domain Expertise**: Understanding financial terminology and context was essential for developing effective solutions
4. **Evaluation Design**: Creating appropriate metrics for financial text analysis required deep domain knowledge

## Impact and Applications

This project demonstrates practical applications in:
- **Financial Document Review**: Automated quality control for financial reports
- **Compliance Monitoring**: Detection of inconsistencies in regulatory filings
- **Risk Assessment**: Identification of contradictory information in financial statements
- **Due Diligence**: Enhanced accuracy in financial document analysis

## Future Enhancements

- Integration with real-time financial data streams
- Extension to multilingual financial documents
- Development of explainable AI features for regulatory compliance
- Scaling to handle enterprise-level document volumes

---

*This project showcased the power of combining advanced NLP techniques with domain-specific knowledge to solve real-world financial challenges.*