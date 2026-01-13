# Architecture Overview

## System Architecture

The Useless App Suite is a client-side single-page application with optional Firebase backend integration.

```
┌─────────────────────────────────────────┐
│         Browser (Client)                 │
│  ┌───────────────────────────────────┐  │
│  │   Single HTML Application         │  │
│  │  ┌──────────┐  ┌──────────────┐  │  │
│  │  │ Progress │  │ Useless Cash │  │  │
│  │  │   Sim    │  │  Converter   │  │  │
│  │  └──────────┘  └──────────────┘  │  │
│  │  ┌──────────────────────────────┐ │  │
│  │  │      Hold On Game            │ │  │
│  │  │  (Firebase Integration)      │ │  │
│  │  └──────────────────────────────┘ │  │
│  └───────────────────────────────────┘  │
└─────────────────┬───────────────────────┘
                  │
                  │ (Optional)
                  ▼
         ┌─────────────────┐
         │   Firebase       │
         │  ┌─────────────┐ │
         │  │  Firestore  │ │
         │  │  (Scores)   │ │
         │  └─────────────┘ │
         │  ┌─────────────┐ │
         │  │    Auth     │ │
         │  │  (Anonymous)│ │
         │  └─────────────┘ │
         └─────────────────┘
```

## Component Structure

### Page Routing
- **Method:** Multi-page application with separate HTML files
- **Navigation:** Standard HTML links (`<a>` tags)
- **Structure:** 
  - `index.html` - Main hub/home page
  - `frontend/progress.html` - Progress Simulator
  - `frontend/currency.html` - Currency Converter
  - `frontend/hold.html` - Hold On Game
  - `frontend/weather.html` - Nihilist Weather
- **State Management:** Page-specific state variables + browser localStorage for persistence

### Applications

#### 1. Progress Simulator
- **State:** `progressValue`, `isProgPausedGlobal`, `progWaiting`, `inExcitementPhase`
- **Logic:** Recursive timeout-based progression
- **UI Updates:** Direct DOM manipulation
- **Persistence:** LocalStorage (saves progress state, restores within 1 hour)

#### 2. Useless Cash Converter
- **State:** Input value, selected currency
- **Logic:** Real-time calculation on input/change events
- **Data:** Static rates object with currency definitions
- **Persistence:** LocalStorage (remembers last amount and currency)

#### 3. Hold On Game
- **State:** `isHolding`, `holdStartTime`, `holdFrame`
- **Logic:** `requestAnimationFrame` for smooth timer updates
- **Backend:** Firebase Firestore for leaderboard persistence
- **Persistence:** LocalStorage (tracks personal best score)

#### 4. Nihilist Weather
- **State:** Unit preference, last location, display state
- **Logic:** Client-side state management with existential messages
- **Persistence:** LocalStorage (saves unit preference and last location)

#### 5. Manual Clock
- **State:** Hour angle, minute angle
- **Logic:** Drag-to-set clock hands with angle calculations
- **UI:** Interactive clock face with draggable hands
- **Persistence:** LocalStorage (saves manually set time)

## Data Flow

### Hold On Leaderboard
```
User Action → Timer Update → Score Calculation → Firebase Write
                                                      ↓
                                              Firestore Collection
                                                      ↓
                                              Real-time Snapshot
                                                      ↓
                                              Leaderboard Update
```

### Local Storage Persistence
```
User Interaction → State Change → Storage.set()
                                          ↓
                                    localStorage
                                          ↓
                                    Page Load → Storage.get() → Restore State
```

## Styling Architecture

- **Framework:** Tailwind CSS (utility-first)
- **Custom Styles:** Inline `<style>` block for:
  - Page-specific layouts
  - Animations and transitions
  - Glass morphism effects
  - Custom scrollbars

## Security Considerations

- Firebase uses anonymous authentication (no PII)
- No sensitive data stored
- Client-side only (no server-side processing)
- Firebase security rules should be configured appropriately

## Performance

- **Initial Load:** ~50KB (HTML + inline styles)
- **External Dependencies:** Tailwind CDN, Firebase SDK
- **Runtime:** Minimal memory footprint
- **Animations:** CSS transitions and `requestAnimationFrame`

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile support (touch events)
- Requires ES6+ JavaScript support
