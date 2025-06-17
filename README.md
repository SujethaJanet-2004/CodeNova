# 🚀 CodeNova

**Gamified Coding Learning Platform – React + Flask + SQL**

CodeNova is an interactive learning platform designed to help users grasp programming concepts through **quizzes**, **games**, and **challenges**. It combines the power of React, Flask, and SQL to provide a fun and engaging learning experience.

---

## 🧠 Key Features

- 🧩 **Quizzes** for Python fundamentals
- 📊 **Progress tracking UI**
- 🎮 **Game-style challenge dashboard**
- 🔐 **Authentication pages** (Login/Register)
- 🌐 Full-stack integration with **React (frontend)** and **Flask (backend)**

---

## 📁 Project Structure

codenova/
│
├── backend/ # Flask backend (API and DB handling)
│
├── frontend/ # React frontend
│ ├── public/ # Static files and icons
│ └── src/
│ ├── components/ # Login, Register, AuthLayout
│ ├── App.js # App routing
│ └── index.js # Entry point
│
├── README.md
├── .gitignore
└── package.json


---

## ⚙️ Tech Stack

| Frontend | Backend | Database | Tools |
|----------|---------|----------|-------|
| React    | Flask   | SQL      | Git, GitHub, VS Code |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

bash
git clone https://github.com/SujethaJanet-2004/CodeNova.git
cd CodeNova

Start Frontend (React)
cd frontend
npm install
npm start
App runs at: http://localhost:3000

Start Backend (Flask)
cd backend
pip install -r requirements.txt
python app.py
API runs at: http://localhost:5000

