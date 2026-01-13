# Planning & Roadmap

## Project Overview

The Useless App Suite is a collection of five interactive web applications that serve no practical purpose, designed for entertainment and digital experimentation.

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
- [x] Implement all five apps
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
