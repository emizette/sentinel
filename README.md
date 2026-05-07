# Sentinel — AI Scam Detection Chatbot

Sentinel is a MERN-stack web application that helps users determine whether they are being victimized by a **pig butchering scam** or **romance scam**. Instead of asking users to research red flags on their own, Sentinel walks them through a guided 10-question conversation powered by Google Gemini AI and delivers a personalized risk assessment at the end.

---

## Features

- **AI-guided questionnaire** : Gemini asks one targeted question at a time, adapting to the user's answers
- **10-question session limit** : keeps the experience focused and manageable
- **Animated risk meter** : a gradient bar (green → red) reveals the assessed risk level: Low, Moderate, High, or Very High
- **Specific red flag breakdown** : the AI lists exactly which warning signs it detected and explains what they mean
- **Next steps & resources** : links to FTC and FBI IC3 reporting portals
- **Fully stateless** : no database, no user accounts, nothing stored; every session is private
- **About & FAQs modals** : accessible from the navbar

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Bootstrap 5, React-Bootstrap |
| Backend | Node.js, Express 5 |
| AI | Google Gemini (`gemini-flash-latest`) via `@google/generative-ai` |
| Styling | Custom CSS (no UI framework lock-in) |

---

## Project Structure

```
IT332/
├── backend/
│   ├── server.js          
│   ├── .env               
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js       
│   │   │   ├── ChatBot.js      
│   │   │   └── RiskMeter.js    
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A free [Google Gemini API key](https://aistudio.google.com/app/apikey)

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd IT332
```

### 2. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configure environment variables

Create/edit `backend/.env`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-flash-latest
PORT=5000
```

> Get a free API key at https://aistudio.google.com/app/apikey

### 4. Run the app

Open **two terminals**:

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
```
You should see: `Sentinel server running on port 5000`

**Terminal 2 — Frontend:**
```bash
cd frontend
npm start
```
The app opens at `http://localhost:3000`

---

## How It Works

1. The user is greeted by Sentinel and asked to describe their situation
2. Gemini asks up to 10 guided questions covering key scam indicators:
   - Where/how they met the person
   - Speed of emotional attachment
   - Whether they've met in person or on live video
   - Cryptocurrency or investment mentions
   - Requests for money or urgency pressure
   - Requests for secrecy from friends/family
3. After the 10th answer, Gemini generates a full risk assessment
4. The frontend parses the `RISK_LEVEL:` marker from the response and renders the animated risk meter
5. The session ends with a green completion bar and a link to start a new assessment

## Important Notes

- Sentinel is an educational tool and does not constitute legal or financial advice.
- If you believe you have been scammed, report to the [FTC](https://reportfraud.ftc.gov) and [FBI IC3](https://ic3.gov) immediately.

---

## Course

IT332 — NJIT
