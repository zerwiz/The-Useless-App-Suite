# Planning & Roadmap

## Project Overview

The Useless App Suite is a collection of eleven interactive web applications that serve no practical purpose, designed for entertainment and digital experimentation.

## Current Status

**Version:** 2.0.1 Patch  
**Status:** Active Development

## System Components

### 1. Progress Simulator
- **Purpose:** Simulate a progress bar that never completes
- **Features:**
  - Animated progress bar that stalls at 99%
  - Excitement phase with fake breakthroughs
  - Pause/Resume functionality
  - Reset capability
- **Status:** ✅ Complete
- **Dependencies:** None (pure JavaScript)

### 2. Useless Cash Converter
- **Purpose:** Convert USD to absurd "currencies" (burritos, paperclips, etc.)
- **Features:**
  - Real-time conversion calculations
  - 10 different "currency" options
  - Animated result display
  - Fun facts for each currency
- **Status:** ✅ Complete
- **Dependencies:** None (pure JavaScript)

### 3. Hold On Game
- **Purpose:** Global leaderboard for button-holding competition
- **Features:**
  - Real-time timer (milliseconds)
  - Touch and mouse support
  - Firebase integration for leaderboard
  - Anonymous authentication
- **Status:** ✅ Complete
- **Dependencies:** Firebase (Firestore, Auth)

### 4. Nihilist Weather
- **Purpose:** Terminal-style weather app that confirms the existence of "outside"
- **Features:**
  - Minimalist terminal aesthetic with scanline effect
  - Location search (doesn't actually fetch weather)
  - Unit conversion (Celsius, Fahrenheit, Kelvin)
  - 5-day "forecast" showing existence probability
  - Satellite feed simulation
  - Status log with existential messages
- **Status:** ✅ Complete
- **Dependencies:** None (pure JavaScript)

### 5. Manual Clock
- **Purpose:** A clock that doesn't sync with system time - users must manually set it
- **Features:**
  - Draggable hour and minute hands
  - Touch and mouse support
  - Time display showing manually set time
  - Never updates automatically
  - Saves time state to localStorage
- **Status:** ✅ Complete
- **Dependencies:** None (pure JavaScript)

### 6. Digital Pet Rock
- **Purpose:** Advanced lithic simulator - feed, walk, and pet your digital rock
- **Features:**
  - Interactive rock with useless diagnostic logs
  - Feed, walk, and pet actions
  - Status tracking with Firebase (optional)
  - Simulate neglect feature
  - Geological state monitoring
- **Status:** ✅ Complete
- **Dependencies:** Firebase (optional, works without it)

### 7. Ego Inflator
- **Purpose:** A dismissive problem submission system that doesn't care
- **Features:**
  - Text input for problems/concerns
  - Dismissive response popup ("That sounds like a 'you' problem")
  - Submission counter in localStorage
  - Glassmorphism design with purple accents
  - Smooth animations and transitions
- **Status:** ✅ Complete
- **Dependencies:** None (pure JavaScript)

### 8. Virtual Bubble Wrap (Already Popped)
- **Purpose:** The world's most disappointing sensory experience - all bubbles are already popped
- **Features:**
  - Grid of 80 pre-popped bubbles
  - Procedural "thud" sound generation using Web Audio API
  - Visual feedback ("thud..." text)
  - Click counter in localStorage
  - Already popped appearance with inset shadows
  - Touch and mouse support
- **Status:** ✅ Complete
- **Dependencies:** None (pure JavaScript, Web Audio API)

### 9. Typing Speedster
- **Purpose:** A typing app where speed makes text invisible, and waiting 10 minutes reveals everything
- **Features:**
  - Real-time WPM (Words Per Minute) calculation
  - Font size decreases as typing speed increases (invisible at 100 WPM)
  - 10-minute cooldown timer that reveals text when untouched
  - Text persistence in localStorage
  - Cooldown state persistence across sessions
  - Status indicators and progress bar
- **Status:** ✅ Complete
- **Dependencies:** None (pure JavaScript)

### 10. Un-Calculator (Cyber Edition)
- **Purpose:** A calculator that always gives wrong answers with confidence
- **Features:**
  - Full calculator functionality (numbers, operators, decimals)
  - Always generates incorrect answers (8-18% error margin)
  - Cyber aesthetic with neon colors and animated grid background
  - CRT scanline effects
  - Glitch animations on results
  - History log of "lies"
  - State persistence in localStorage
- **Status:** ✅ Complete
- **Dependencies:** None (pure JavaScript)

### 11. Digital Dusting (Maximum Entropy)
- **Purpose:** Fight entropy by dusting a surface that never stays clean
- **Features:**
  - Two-layer dust system (grey base dust, purple toxic residue)
  - Dust continuously settles when idle
  - Purple residue requires repeated swiping to clear
  - 10-minute countdown timer that reverses when idle
  - Procedural white noise audio feedback
  - Draggable UI stats container that spawns purple dust
  - Hidden inspirational text revealed beneath dust
  - Completion sequence when timer reaches zero
- **Status:** ✅ Complete
- **Dependencies:** None (pure JavaScript, Web Audio API, Canvas API)

## Architecture

### Frontend
- **Technology:** Vanilla HTML/CSS/JavaScript
- **Styling:** Tailwind CSS (CDN)
- **Fonts:** Plus Jakarta Sans, Space Grotesk, Space Mono
- **Structure:** Single-page application with page routing via JavaScript

### Backend Services
- **Firebase:** Used for Hold On leaderboard
  - Firestore: Score storage
  - Authentication: Anonymous sign-in

## Roadmap

### Phase 1: Foundation ✅
- [x] Create project structure
- [x] Implement all eleven apps
- [x] Set up Firebase integration
- [x] Create documentation

### Phase 2: Enhancement (Future)
- [x] Add more "useless" apps (Nihilist Weather added)
- [ ] Add more "useless" apps
- [ ] Improve mobile responsiveness
- [ ] Add analytics (optional)
- [ ] Performance optimizations
- [ ] Progressive Web App (PWA) support

### Phase 3: Deployment (Future)
- [ ] Set up CI/CD pipeline
- [ ] Deploy to hosting platform
- [ ] Configure custom domain
- [ ] Set up monitoring

## Technical Debt

- Firebase configuration is currently inline (should be externalized)
- No build process (consider bundling for production)
- No testing framework (consider adding unit tests)

## Dependencies

### Runtime
- Tailwind CSS (via CDN)
- Firebase SDK v11.6.1 (via CDN)

### Development
- None currently (consider adding build tools)

## Configuration

Firebase configuration should be provided via environment variables or configuration files. See `boot/env-loader.sh` for details.
