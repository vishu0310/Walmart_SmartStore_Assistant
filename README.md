# 🛒 Walmart SmartStore Assistant – Digital Store Experience

Welcome to the **Walmart SmartStore Assistant**, an innovative, AI-powered, AR-integrated digital shopping assistant designed to **enhance in-store customer experiences** through **voice commands, AR navigation, smart recommendations**, and **live support**.

> 🚀 Built for Hackathons | 🧠 AI + AR Integration | 🛍️ Customer Delight Focus
![Screenshot 2025-07-04 224305](https://github.com/user-attachments/assets/b2660e13-88c7-43c6-8159-5b7c3ae2fd37)


---

## 📌 Features

### 🗺️ AR Navigation
- Navigate through aisles using Augmented Reality markers and real-world overlays
- Find products faster using visual shelf maps and path guides
![Screenshot 2025-07-04 224347](https://github.com/user-attachments/assets/fab8abb0-dd51-4158-bd37-886fed209251)

### 🎙️ Voice-Powered AI Assistant
- Natural language support via ChatGPT/Dialogflow
- Voice queries like: _“Where is almond milk?”_, _“Show today’s offers”_
![Screenshot 2025-07-04 224317](https://github.com/user-attachments/assets/eb934436-a0b6-4254-98a7-85c8cccfcbd7)

### 🧠 Smart Product Recommendations
- ML-powered suggestion engine based on:
  - Purchase history
  - Cart items
  - Ongoing offers
![Screenshot 2025-07-04 224412](https://github.com/user-attachments/assets/7f5f479e-3fb4-4b1f-88cd-01e723a65ec0)

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


## 🚀 How to Run the Project Locally

### 🧩 Prerequisites
- Node.js & npm
- Firebase CLI (if using Firebase)
- Python (for ML component, optional)
- Git

---

### 🛠️ Steps to Run

```bash
# 1. Clone the repository
git clone https://github.com/vishu0310/Walmart_SmartStore_Assistant.git
cd Walmart_SmartStore_Assistant

# 2. Install frontend dependencies
cd client
npm install

# 3. Run the frontend
npm run dev


Visit http://localhost:3000 to explore the app!

⚙️ Configure your Firebase/ML keys in .env files for full functionality.

✍️ Author
Vishu Patle
GitHub | LinkedIn

🤝 Contributions
Contributions are welcome! 🎉
Please open an issue first to discuss your ideas, or submit a pull request.

📬 Suggestions?
Feel free to open an issue.

📃 License
Licensed under the MIT License.


