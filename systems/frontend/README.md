# Frontend Application

## Overview

The frontend contains five interactive "useless" apps, each in its own HTML file:

1. **Progress Sim** - A fake progress bar simulator
2. **Useless Cash** - A currency converter for absurd items
3. **Hold On** - A button-holding game with global leaderboard
4. **Nihilist Weather** - A terminal-style weather app that confirms "outside exists"
5. **Manual Clock** - A clock that doesn't sync with system time - drag the hands yourself

## Technology Stack

- **HTML5** - Structure
- **CSS3** - Styling (with Tailwind CSS utility framework)
- **JavaScript (ES6+)** - Application logic
- **Firebase SDK v11.6.1** - Backend services (Firestore, Auth)

## Dependencies

### External (CDN)
- Tailwind CSS: `https://cdn.tailwindcss.com`
- Google Fonts: Plus Jakarta Sans, Space Grotesk, Space Mono
- Firebase SDK: `https://www.gstatic.com/firebasejs/11.6.1/`

### Internal
- None (self-contained single file)

## Setup

### Local Development

1. Open `index.html` directly in a browser, or
2. Serve via a local web server:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

### Firebase Configuration

For the Hold On leaderboard to work, Firebase must be configured:

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Firestore Database
3. Enable Anonymous Authentication
4. Configure Firestore security rules (see below)
5. Add Firebase config to the application (via environment variables or config injection)

#### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /artifacts/{appId}/public/data/scores/{document=**} {
      allow read: if true;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
    }
  }
}
```

## File Structure

**Note:** The main `index.html` file is located in the project root and serves as the hub/home page. Individual app pages are in the `/frontend/` directory.

```
/
├── index.html         # Main hub/home page
└── frontend/          # Individual app pages
    ├── progress.html  # Progress Simulator
    ├── currency.html  # Useless Cash Converter
    ├── hold.html      # Hold On Game
    ├── weather.html   # Nihilist Weather
    ├── clock.html     # Manual Clock
    ├── shared.css     # Shared styles
    └── shared.js      # Shared utilities
```

## Application Architecture

### Page Routing
- CSS-based visibility toggling
- JavaScript `showPage()` function for navigation
- No external routing library needed

### State Management
- Global variables for app-specific state
- Browser localStorage for persistence (user preferences, app state)
- No external state management library

### Firebase Integration
- Anonymous authentication
- Firestore collection: `artifacts/{appId}/public/data/scores`
- Real-time leaderboard updates via `onSnapshot`

## Ports & APIs

- **Local Development:** Port 8000 (configurable)
- **Firebase:** Uses default Firebase endpoints
- **No custom API endpoints**

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires ES6+ JavaScript support
- Touch event support for Hold On game

## Performance

- Initial load: ~50KB (HTML + inline styles)
- Runtime: Minimal memory footprint
- Animations: CSS transitions + `requestAnimationFrame`
- No build process required

## Development Notes

- All code is in a single HTML file for simplicity
- Inline styles and scripts (no external files)
- CDN dependencies loaded at runtime
- Firebase config can be injected via global variables

## Future Enhancements

- Split into separate files (HTML, CSS, JS)
- Add build process (bundling, minification)
- Implement service worker for PWA
- Add unit tests
- Externalize configuration
