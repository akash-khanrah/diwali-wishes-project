# 🎇 Diwali Sky Shot Surprise 2026 🎇

A highly interactive, festive web application featuring a sleek glassmorphism login screen that unlocks a massive, infinite Diwali celebration. Built with a **FastAPI** backend and a **Vanilla HTML/CSS/JS** frontend. 

When a user logs in with the correct password, the screen goes pitch black, a rocket launches into the sky, and an explosive flashbang reveals infinite canvas fireworks, background firecracker sounds, their customized name burning in fire, and a massive glowing Prodip (Diya)!

---

## ✨ Features

- **Responsive Design**: Looks stunning on both massive desktop monitors and small mobile phone screens.
- **Glassmorphism UI**: Sleek, modern login portal with glowing neon gradients.
- **Interactive Authentication**:
  - **Success**: Triggers a suspenseful 1.5-second blackout before a massive visual & audio explosion.
  - **Failure**: Triggers a red "error blink" and shake animation on the password field.
- **HTML5 Canvas Fireworks**: A custom physics-based particle engine generating infinite, randomized sky shot explosions.
- **Immersive Audio**: Integrated real sound effects (rocket whistle, massive boom, and continuous background firecrackers).
- **Dynamic User Greeting**: The backend receives the user's name and returns it to be displayed in a fierce, glowing fire font.

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3 (Animations, Media Queries, Glowing Effects)
- JavaScript (Fetch API, HTML5 Canvas Rendering, Audio Control)

**Backend:**
- Python 3.x
- FastAPI
- Uvicorn (ASGI server)

---

## 📂 Project Structure

```text
📁 diwali_web_2026/
│
├── 📁 frontend/
│   ├── 📄 index.html         # Main frontend layout
│   ├── 📄 style.css          # Styling, responsive design, and CSS animations
│   └── 📄 script.js          # Canvas engine, audio logic, and API calls
│
├── 📁 backend/
│   ├── 📄 main.py            # FastAPI backend logic
│   └── 📄 requirements.txt   # Python dependencies (for deployment)
│
└── 📄 README.md              # Project documentation