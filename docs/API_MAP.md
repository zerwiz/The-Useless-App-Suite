# API Map

## Overview

The Useless App Suite is primarily a client-side application with optional Firebase backend integration.

## External APIs

### Firebase Services

#### Authentication
- **Service:** Firebase Authentication
- **Method:** Anonymous Sign-in
- **Endpoint:** Firebase Auth API
- **Usage:** Automatic anonymous authentication for Hold On leaderboard
- **Configuration:** Via Firebase config object

#### Firestore Database
- **Service:** Cloud Firestore
- **Collection Path:** `artifacts/{appId}/public/data/scores`
- **Operations:**
  - **Write:** `addDoc()` - Save hold time scores
  - **Read:** `onSnapshot()` - Real-time leaderboard updates
- **Data Structure:**
  ```javascript
  {
    userId: string,      // Firebase Auth UID
    score: number,       // Hold time in milliseconds
    timestamp: number    // Unix timestamp
  }
  ```

## Internal APIs

### Local Storage

The application uses browser `localStorage` to persist user preferences and app state. All storage keys are prefixed with `useless-suite-` for namespacing.

#### Storage Utility
- `Storage.get(key, defaultValue)` - Retrieve stored value
- `Storage.set(key, value)` - Store value
- `Storage.remove(key)` - Remove stored value
- `Storage.clear()` - Clear all app storage

#### Stored Data
- `progress` - Progress Simulator state (value, phase, timestamp)
- `currency` - Currency Converter preferences (amount, currency)
- `holdPersonalBest` - Hold On game personal best score
- `weatherUnit` - Nihilist Weather unit preference
- `weatherLocation` - Nihilist Weather last searched location

### JavaScript Functions

#### Navigation
- `showPage(id)` - Navigate between app pages
  - Parameters: `id` (string) - Page identifier ('home', 'progress', 'currency', 'hold', 'weather')
  - Returns: void

#### Progress Simulator
- `toggleProgPause()` - Pause/resume progress simulation
- `resetProgSim()` - Reset progress to 0%

#### Currency Converter
- `updateConversion()` - Recalculate conversion (called automatically on input/change)

#### Hold On Game
- `startHold(e)` - Begin hold timer
- `stopHold()` - End hold timer and save score
- `updateHoldLoop()` - Animation frame callback for timer
- `saveHoldScore(score)` - Persist score to Firestore
- `setupLeaderboard()` - Initialize real-time leaderboard listener

## Data Flow

### Hold On Score Submission
```
User releases button
  → stopHold()
  → saveHoldScore(totalTime)
  → Firebase Firestore addDoc()
  → Real-time snapshot update
  → Leaderboard UI refresh
```

## Configuration

### Firebase Config Injection
The application expects Firebase configuration via global variables:
- `__firebase_config` - JSON string of Firebase config object
- `__initial_auth_token` - Optional custom auth token
- `__app_id` - Application identifier (defaults to 'hold-on-global-suite-v2')

## Security

- Anonymous authentication only (no PII)
- Firestore security rules should restrict writes to authenticated users
- No sensitive data transmitted
- Client-side validation for score thresholds (minimum 100ms)

## Future API Considerations

If additional services are added:
- REST API endpoints for extended functionality
- WebSocket connections for real-time features
- Server-side validation and rate limiting
