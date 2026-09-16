# 🏛️ GURVIK | Project Management - FZCO

> **Mastering Complexity. Delivering Structural Certainty across the United Arab Emirates.**  
> Corporate commercial fit-out management & luxury private villa care supervision under Dubai Integrated Economic Zones Authority (DIEZA).

---

## 📋 Table of Contents
1. [Overview](#-overview)
2. [Key Features](#-key-features)
3. [Technology Stack](#-technology-stack)
4. [Prerequisites](#-prerequisites)
5. [Getting Started (Step-by-Step)](#-getting-started-step-by-step)
6. [Available Scripts](#-available-scripts)
7. [Project Structure](#-project-structure)
8. [Deployment Guide](#-deployment-guide)
9. [Contact & Support](#-contact--support)

---

## 🌟 Overview

**GURVIK Project Management - FZCO** is a modern, high-performance web platform designed with an editorial, ultra-luxury aesthetic tailored for the UAE market (Dubai, Abu Dhabi, Sharjah, and Northern Emirates).

It features:
- Commercial fit-out governance for Grade-A corporate towers and hospitality venues.
- Private residence oversight and bespoke maintenance supervision for luxury villas.
- Integrated video brand presentation, direct sound control, and interactive consultation booking.

---

## ✨ Key Features

- **Direct Brand Film & Interactive Sound Controller**: Seamless background brand video with dynamic sound toggle button (`Muted` / `Sound On`).
- **Responsive Luxury Aesthetics**: Built with custom CSS featuring bespoke typography (Cormorant Garamond, Playfair Display, Plus Jakarta Sans), champagne gold gradients, and dark midnight slate accents.
- **Consultation Intake Engine**: Interactive booking form with instant client-side validation and feedback notifications.
- **UAE Authority & Jurisdiction Notice**: Prominently displays DIEZA accreditation and quick contacts for executive verification.
- **Direct WhatsApp & Phone Integration**: Instant 1-click WhatsApp messaging and direct phone dialers configured for UAE country code (+971).
- **Mobile Drawer Navigation**: Fluid, responsive mobile menu with touch-friendly navigation and backdrop blur.

---

## 🛠️ Technology Stack

- **Core**: HTML5 Semantic Markup
- **Styling**: Vanilla CSS3 (Custom Design Tokens, Flexbox, Grid, Glassmorphism, Micro-animations)
- **Logic**: Vanilla Modern JavaScript (ES Modules)
- **Build Tool / Dev Server**: [Vite](https://vitejs.dev/) v6+
- **Typography**: Google Fonts (`Playfair Display`, `Cormorant Garamond`, `Plus Jakarta Sans`)

---

## 📦 Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Version **18.x** or higher recommended)
- [Git](https://git-scm.com/)
- A modern web browser (Chrome, Edge, Safari, Firefox)

---

## 🚀 Getting Started (Step-by-Step)

Follow these simple steps to run the project locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/Nagu0005/gurvik_project.git
cd gurvik_project
```

### 2. Install Project Dependencies
Install the required packages using npm:
```bash
npm install
```

### 3. Start the Development Server
Launch the Vite local development server with hot-module replacement (HMR):
```bash
npm run dev
```

After running the command, your terminal will show a local URL:
```text
  VITE v6.x.x  ready in 150 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open `http://localhost:5173/` in your browser to view the live website.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `http://localhost:5173` |
| `npm run build` | Bundles and minifies the website for production into the `dist/` folder |
| `npm run preview` | Locally serves the production `dist/` build to preview before deploying |

---

## 📁 Project Structure

```text
gurvik_project/
├── public/
│   └── assets/
│       ├── gurvik-film.mp4        # Direct hero autoplay brand film
│       └── gurvik-logo.jpeg       # High-resolution falcon crest brand logo
├── src/
│   ├── styles/
│   │   └── luxury.css             # Main stylesheet & custom luxury design system
│   └── main.js                    # Core JS controller (sound toggle, drawer, form handling)
├── index.html                     # Primary HTML landing page
├── package.json                   # Project metadata, dependencies, and build scripts
├── package-lock.json              # Exact dependency lockfile
├── .gitignore                     # Git ignore rules for node_modules and builds
└── README.md                      # Project documentation and setup guide
```

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and connect your GitHub account.
3. Import the `gurvik_project` repository.
4. Framework Preset will automatically detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Set Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### Static Server / Apache / Nginx
Run `npm run build` and copy the generated contents of the `dist/` folder to your web server's root directory.

---

## 📞 Contact & Support

**GURVIK Project Management - FZCO**  
- **Registration**: Registered under Dubai Integrated Economic Zones Authority (DIEZA)  
- **Phone**: [+971 58 533 0177](tel:+971585330177)  
- **WhatsApp**: [+971 58 533 0177](https://wa.me/971585330177)  
- **Email**: [contact@gurvik.com](mailto:contact@gurvik.com)  
- **Jurisdiction**: UAE Nationwide (Dubai, Abu Dhabi, Sharjah, Northern Emirates)

---

*Developed with precision and structural certainty.*
