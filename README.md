# 🩺 FuzzyCare – Patient Risk Assessment Using Fuzzy Inference System

## Overview

FuzzyCare is a web-based Patient Risk Assessment System developed using a **Fuzzy Inference System (FIS)**. The application evaluates a patient's health condition based on five vital signs:

* Heart Rate
* Blood Pressure
* Oxygen Saturation (SpO₂)
* Body Temperature
* Respiratory Rate

Using fuzzy membership functions and a predefined rule base, the system generates:

* Risk Score
* Risk Category (Low, Medium, High)
* Clinical Reasons
* Health Recommendations

The objective of this project is to demonstrate how fuzzy logic can support medical decision-making by handling uncertainty in patient data.

---

# 🎯 Problem Statement

Assessing a patient's health condition using multiple vital signs can be challenging because medical parameters often do not have sharp boundaries between normal and abnormal values.

Traditional threshold-based systems may overlook borderline conditions. This project uses a **Fuzzy Inference System** to evaluate patient vital signs and provide a more flexible and interpretable risk assessment.

---

# ✨ Features

* Patient vital sign assessment
* Fuzzy Logic–based risk evaluation
* Risk Score (0–100)
* Risk Category
* Explainable assessment with reasons
* Personalized health recommendations
* Responsive user interface
* Clear patient assessment form

---

# ⚙️ System Workflow

```text
Patient Vital Signs
        │
        ▼
 Membership Functions
        │
        ▼
  Rule Evaluation
        │
        ▼
 Aggregation
        │
        ▼
 Defuzzification
        │
        ▼
 Risk Score
        │
        ▼
Risk Category & Recommendations
```

---

# 📐 Methodology

The system follows the standard Fuzzy Inference System workflow:

### 1. Fuzzification

Patient input values are converted into fuzzy values using **Triangular** and **Trapezoidal Membership Functions**.

### 2. Rule Evaluation

The system evaluates predefined IF–THEN rules based on the fuzzified inputs.

### 3. Aggregation

Outputs from all active rules are combined into a single fuzzy output.

### 4. Defuzzification

The aggregated fuzzy output is converted into a crisp risk score using the **Centroid Method**.

### 5. Risk Classification

The generated score is classified into:

* Low Risk
* Medium Risk
* High Risk

---

# 📊 Vital Parameters

| Parameter        | Unit        |
| ---------------- | ----------- |
| Heart Rate       | BPM         |
| Blood Pressure   | mmHg        |
| SpO₂             | %           |
| Temperature      | °C          |
| Respiratory Rate | breaths/min |

---

# 🖼️ Screenshots

> Add your screenshots here.

* Landing Page
![Landing Page](assets/landing-page.png)

* Patient Assessment Page
![Assessment Form](assets/assessment-form.png)

* Low Risk Result
![Low Risk](assets/low-risk-para.png)

![Low Risk](assetslow-risk.png)

* Medium Risk Result
![Medium Risk](assets/medium-risk.png)

* High Risk Result
![High Risk](assets/high-risk.png)
---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS

## Backend

* FastAPI
* Python

## Core Concepts

* Fuzzy Inference System
* Triangular Membership Function
* Trapezoidal Membership Function
* Rule-Based Decision Making
* Centroid Defuzzification

---

# 📂 Project Structure

```text
fuzzy-care/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── fuzzy/
│   │   ├── routes/
│   │   └── main.py
│   └── requirements.txt
│
└── README.md
```

---

# 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/fuzzy-care.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

# 📡 API Documentation

After starting the backend:

```text
http://127.0.0.1:8000/docs
```

---

# Future Scope

* Patient history
* Authentication
* Doctor dashboard
* Database integration
* PDF report generation
* Cloud deployment

---






