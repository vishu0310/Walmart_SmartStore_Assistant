# 🛒 Walmart SmartStore Assistant – Digital Store Experience

Welcome to the **Walmart SmartStore Assistant**, an innovative, AI-powered, AR-integrated digital shopping assistant designed to **enhance in-store customer experiences** through **voice commands, AR navigation, smart recommendations**, and **live support**.

> 🚀 Built for Hackathons | 🧠 AI + AR Integration | 🛍️ Customer Delight Focus

---

## 📌 Features

### 🗺️ AR Navigation
- Navigate through aisles using Augmented Reality markers and real-world overlays
- Find products faster using visual shelf maps and path guides

### 🎙️ Voice-Powered AI Assistant
- Natural language support via ChatGPT/Dialogflow
- Voice queries like: _“Where is almond milk?”_, _“Show today’s offers”_

### 🧠 Smart Product Recommendations
- ML-powered suggestion engine based on:
  - Purchase history
  - Cart items
  - Ongoing offers

### 🛒 Smart Cart Sync
- Add/remove items via voice or touch
- Real-time total cost updates
- Sync with billing or self-checkout kiosks

### 👶 Kids Mode & Gamification
- Fun AR mini-games while shopping
- Kid-friendly navigation mode

### 🔄 Live Inventory & Staff Assistance
- Live availability check via Firebase
- Chatbot escalation to human staff when needed

---

## 🏗️ Tech Stack

| Domain | Tools/Tech |
|--------|------------|
| **Frontend** | React.js, Tailwind CSS, Three.js, A-Frame (WebXR), HTML/CSS |
| **AR** | AR.js / WebXR / Unity (for advanced use) |
| **Backend** | Node.js, Express.js |
| **Database** | Firebase Firestore / MongoDB |
| **AI/ML** | Dialogflow, OpenAI (ChatGPT API), TensorFlow Lite |
| **Authentication** | Firebase Auth |
| **Hosting** | Vercel / Netlify (for frontend), Firebase Hosting / Heroku (for backend) |
| **Others** | Supabase (alternative backend), Web Speech API (voice commands) |

---

## 📂 Project Structure

```bash
Walmart_SmartStore_Assistant/
├── client/                # React frontend with AR & voice assistant
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
├── server/                # Node.js backend API
│   └── routes/
│   └── controllers/
├── ml/                    # ML models & scripts
├── firebase/              # Firebase setup & functions
├── README.md
└── package.json

---



