# The Useless App Suite

> A curated collection of digital artifacts designed to do absolutely nothing useful.

[![Version](https://img.shields.io/badge/version-2.4.0-blue.svg)](https://github.com/zerwiz/The-Useless-App-Suite)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com)

**Live Demo:** [theuselessappsuite.netlify.app](https://theuselessappsuite.netlify.app/) | **Repository:** [GitHub](https://github.com/zerwiz/The-Useless-App-Suite)

## 🎯 Overview

The Useless App Suite is a web-based multi-page application featuring a random number of interactive experiences that serve absolutely no practical purpose.

This project exists because someone had too much time and not enough sense. It's a collection of digital artifacts that do nothing useful, solve no problems, and contribute zero value to humanity. Perfect for when you want to waste time but don't want to feel productive about it.

**Why does this exist?** We don't know. **What problem does it solve?** None. **Should you use it?** Probably not. **Will it make your life better?** Absolutely not. **Is it worth your time?** Definitely not. But here we are.

## 📱 Apps

### Core Apps

1. **Un-Calculator** 🔢 - Cyber edition. Always gives wrong answers with confidence.
2. **Digital Dusting** 🧹 - Fight entropy. Dust that never stops settling. Maximum futility.
3. **Random Currency** 🌯 - Modern financial tracking for weirdos. Convert savings into digital burritos.
4. **Digital Pet Rock** 🪨 - Advanced lithic simulator that requires no actual interaction.
5. **Food Generator** 🍽️ - 40 culinary catastrophes. We provide the concept; you provide the indigestion.
6. **Existential Clock** ⏰ - A clock that asks philosophical questions instead of telling time.
7. **Virtual Waiting Room** 🪑 - A waiting room with 2014 magazines and infinite wait time.
8. **Undo-Only Editor** 📝 - A text editor where you can only undo. No typing allowed.
9. **Progress Sim** ⌛ - Master patience with infinite 99% loops and fake breakthroughs.
10. **Hold On** 🔘 - Compete globally for the record of holding a blue button.
11. **Nihilist Weather** 🌫️ - Quantify the void with terminal-style existential forecasts.
12. **Manual Clock** 🕐 - A clock that doesn't sync with time. Drag the hands yourself.
13. **Ego Inflator** 💭 - Tell us your problems. We definitely care.
14. **Bubble Wrap** 💨 - Already popped. The world's most disappointing experience.
15. **Typing Speedster** ⌨️ - Type fast for invisibility, or wait 10 minutes for clarity.
16. **Terms of Service** 📜 - Scroll 400 pages of legal text. Too fast? Legal whiplash resets everything.
17. **Captcha Trainer** ✅ - Train to prove your humanity. Select all squares. Repeat forever.

## 🚀 Quick Start

### Local Development

The suite is a multi-page application. The main hub is `index.html`, and each app has its own page in the `frontend/` folder.

#### Option 1: Direct Browser

```bash
# Simply open index.html in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

#### Option 2: Local Server

```bash
# Using Python
python -m http.server 8000
# Then visit http://localhost:8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using the bootstrap script
./boot/main.sh
```

### Code Quality Checks

The project includes automated checks for accessibility, compatibility, security, and code quality.

#### Prerequisites

- Node.js 16+ and npm 8+

#### Setup

```bash
npm install
```

#### Run checks

```bash
# Run all checks
npm run check

# Individual checks
npm run lint          # HTML and JavaScript linting
npm run accessibility # Accessibility audit (WCAG 2AA)
npm run security      # Security vulnerability scan
npm run compatibility # Browser compatibility check
```

## ✨ Features

- **17 Useless Apps** - Each with unique interactions and sound effects

- **Multi-Page Architecture** - Standalone HTML files for each app

- **Shared Resources** - Common CSS and JavaScript utilities

- **Web Audio API** - Procedural sound effects throughout

- **Local Storage** - State persistence across sessions

- **Firebase Integration** - Global leaderboard for Hold On app (optional)

- **Responsive Design** - Works on desktop and mobile

- **Accessibility** - WCAG 2AA compliant

- **No Build Step** - Pure HTML, CSS, and JavaScript

### Deployment

The project is configured for **Netlify** deployment. See [Deployment Guide](docs/DEPLOYMENT.md) for details.

**Quick Deploy:**

1. Push to GitHub/GitLab/Bitbucket

2. Connect repository to Netlify

3. Netlify will auto-detect the `netlify.toml` configuration

4. Deploy!

**Firebase Setup (Optional):**

For the Hold On app's global leaderboard, configure your Firebase credentials:

- Add Firebase config to `frontend/hold.html` or use environment variables

- Enable Anonymous Authentication in Firebase Console

- Create a Firestore collection for leaderboard data

**Note:** The app works without Firebase - it falls back to local storage.

## Project Structure

```text
/
├── index.html         # Main hub/home page
├── frontend/          # Individual app pages
│   ├── progress.html # Progress Simulator
│   ├── currency.html # Useless Cash Converter
│   ├── hold.html     # Hold On Game
│   ├── weather.html  # Nihilist Weather
│   ├── clock.html    # Manual Clock
│   ├── pet-rock.html # Digital Pet Rock
│   ├── ego-inflator.html # Ego Inflator
│   ├── bubble-wrap.html # Virtual Bubble Wrap
│   ├── typing-speedster.html # Typing Speedster
│   ├── un-calculator.html # Un-Calculator
│   ├── dusting.html # Digital Dusting
│   ├── undo-editor.html # The Undo-Only Text Editor
│   ├── waiting-room.html # The Virtual Waiting Room
│   ├── existential-clock.html # Existential Clock
│   ├── food-generator.html # The Useless Food Idea Generator
│   ├── terms-game.html # Terms of Service Game
│   ├── captcha-trainer.html # Captcha Trainer
│   ├── shared.css    # Shared styles
│   └── shared.js     # Shared utilities
├── _redirects         # Netlify routing
├── netlify.toml       # Netlify configuration
├── boot/              # Entry point folder (boot loaders & configs)
├── systems/           # System documentation
│   └── frontend/      # Frontend documentation
├── docs/              # Documentation
├── scripts/           # DevOps & automation scripts
├── configs/           # Environment configs
└── tests/             # Centralized test suites
```

## 📦 Version

Current Version: 2.4.0

See [CHANGELOG.md](docs/CHANGELOG.md) for version history and updates.

## 📚 Documentation

- [Planning & Roadmap](docs/PLANNING.md) - Project roadmap and future plans

- [Architecture Overview](docs/ARCHITECTURE.md) - System architecture and design decisions

- [Style Guide](docs/STYLE_GUIDE.md) - Code style and conventions

- [Deployment Guide](docs/DEPLOYMENT.md) - Deployment instructions

- [Development Guide](docs/DEVELOPMENT.md) - Development setup and workflow

- [Changelog](docs/CHANGELOG.md) - Version history and changes

## 🛠️ Tech Stack

- **HTML5** - Semantic markup

- **CSS3** - Tailwind CSS utility classes + custom styles

- **JavaScript (ES6+)** - Vanilla JS, no frameworks

- **Web Audio API** - Procedural sound generation

- **Firebase** (Optional) - Firestore for leaderboard

- **Local Storage API** - State persistence

- **Canvas API** - Used in Digital Dusting app

- **SVG** - Vector graphics for apps

## 🎨 Design Philosophy

Each app in the suite follows these principles:

- **Useless by Design** - No practical purpose intended

- **Interactive** - User engagement through clicks, swipes, typing, etc.

- **Audio Feedback** - Procedural sound effects using Web Audio API

- **Visual Polish** - Glassmorphism, animations, and modern UI

- **Self-Contained** - Each app is a standalone HTML file

- **Accessible** - WCAG 2AA compliance where possible

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs

- Suggest new useless apps

- Improve existing apps

- Enhance documentation

Please read the [Development Guide](docs/DEVELOPMENT.md) before contributing.

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

Built for the bored • 2026 Archive

Inspired by the absurd, the pointless, and the beautifully useless.

---

**Repository:** [https://github.com/zerwiz/The-Useless-App-Suite](https://github.com/zerwiz/The-Useless-App-Suite)

⭐ If you find this project amusingly useless, consider giving it a star!
