# Changelog

All notable changes to The Useless App Suite will be documented in this file.

## [2.0.3] - 2026-01-XX

### Added
- **Manual Clock** app - A clock that doesn't sync with system time
  - Draggable hour and minute hands
  - Touch and mouse support for manual time setting
  - Time display showing manually set time
  - Never updates automatically (truly useless!)
  - Saves time state to localStorage
- Updated home page grid to accommodate five apps (responsive 1-5 columns)

## [2.0.4] - 2026-01-XX

### Added
- **Digital Pet Rock** app - Advanced lithic simulator
  - Interactive rock with floating animation
  - Feed, walk, and pet actions with useless diagnostic logs
  - Status tracking with Firebase Firestore (optional)
  - Simulate neglect feature (1 week of neglect)
  - Geological state monitoring
  - Works in local-only mode if Firebase not configured
- Updated home page grid to accommodate six apps (3 cards per row)
- Added Monday-Sunday day buttons to Nihilist Weather app
- Centered all content on all app pages

## [2.0.5] - 2026-01-XX

### Added
- **Ego Inflator** app - Dismissive problem submission system
  - Text input for problems/concerns
  - Dismissive response popup ("That sounds like a 'you' problem")
  - Submission counter in localStorage
  - Glassmorphism design with purple accents
  - Smooth animations and transitions
- Fixed Hold On leaderboard to work in offline mode with localStorage fallback
- Updated home page grid to accommodate seven apps (3 cards per row, 3 rows)

## [2.0.6] - 2026-01-XX

### Added
- **Virtual Bubble Wrap (Already Popped)** app - The world's most disappointing sensory experience
  - Grid of 80 pre-popped bubbles with inset shadow styling
  - Procedural "thud" sound generation using Web Audio API
  - Visual feedback with floating "thud..." text indicators
  - Click counter in localStorage
  - Touch and mouse support
  - Already popped appearance that never changes
- Updated home page grid to accommodate eight apps (3 cards per row, 3 rows)

## [2.0.7] - 2026-01-XX

### Added
- **Typing Speedster** app - Type fast for invisibility, or wait 10 minutes for clarity
  - Real-time WPM (Words Per Minute) calculation
  - Font size decreases as typing speed increases (becomes invisible at 100 WPM)
  - 10-minute cooldown timer that reveals text when untouched
  - Text persistence in localStorage
  - Cooldown state persistence across sessions
  - Status indicators and progress bar
  - Dark terminal-style interface
- Updated home page grid to accommodate nine apps (3 cards per row, 3 rows)

## [2.0.8] - 2026-01-XX

### Added
- **Un-Calculator (Cyber Edition)** app - Always gives wrong answers with confidence
  - Full calculator functionality (numbers, operators, decimals)
  - Always generates incorrect answers with 8-18% error margin
  - Cyber aesthetic with neon colors (blue, pink, purple)
  - Animated grid background with perspective effect
  - CRT scanline effects on display
  - Glitch animations on results
  - History log showing calculation "lies"
  - State persistence in localStorage
  - Shake animation on calculation
- Updated home page grid to accommodate ten apps (3 cards per row, 4 rows)

## [2.4.0] - 2026-01-XX

### Added
- **The Useless Food Idea Generator** app - 40 culinary catastrophes that should never leave the kitchen
  - Grid layout displaying all 40 useless food ideas
  - Each idea card with title and description
  - "Cook Up a New Batch" button to randomize/shuffle the order
  - "View Recipe" button on each card that shows a refusal modal
  - 50+ different refusal messages explaining why recipes won't be provided
  - Modal popup with creative excuses (legal, moral, scientific, etc.)
  - Examples: "Deconstructed Water", "Chocolate-Covered Pickles", "Hot Dog Smoothie", "Invisible Pizza", "Beef-Flavored Lollipop", "Infinite Burrito"
  - Gradient text styling for header
  - Hover effects on cards with amber accent colors
  - Responsive grid layout (1-4 columns based on screen size)

## [2.3.0] - 2026-01-XX

### Added
- **Existential Clock** app - A clock that asks philosophical questions instead of telling time
  - Circular clock face with existential labels instead of numbers
  - Labels: "Eventually", "Not Yet", "Too Late", "Again", "Soon", "Now", "Maybe", "Someday", "Never", "Always", "Almost", "Inevitably"
  - Real-time clock with smooth second hand animation
  - Dynamic status messages based on time of day
  - Rotating philosophical thoughts below the clock
  - Subtle background color shifts based on hour
  - Digital time display in monospace font
  - Minimalist dark aesthetic with glowing effects

## [2.2.0] - 2026-01-XX

### Added
- **The Virtual Waiting Room** app - A waiting room with 2014 magazines and infinite wait time
  - Office-style beige aesthetic with subtle flicker animation
  - 100-page magazine from November 2014 with real news articles
  - Click-through magazine pages (previous/next navigation)
  - Wait timer that counts up from check-in time
  - Analog clock showing elapsed wait time
  - Procedural white noise ambient audio
  - Simulated intercom announcements with status lights
  - Check-in screen before accessing the magazine
  - Content includes: Oscar Selfie, Rosetta Mission, Scotland Referendum, U2 album, Sony hack, Robin Williams, Taylor Swift, Ice Bucket Challenge, Bitcoin, Guardians of the Galaxy, Ebola, iPhone 6 Plus, World Cup
  - Drug ads (Clarifen 2014) mixed with articles and product ads

## [2.1.0] - 2026-01-XX

### Added
- **The Undo-Only Text Editor** app - A text editor where you can only undo, no typing allowed
  - Windows 95-style UI with classic gray aesthetic
  - Massive 5,000-page "Saline Chronicles Manifesto" about salt
  - Only navigation keys and Ctrl+Z (Undo) are allowed
  - Typing is blocked with toast notifications
  - Undo removes words in chunks of 15
  - Visual feedback when undoing (red highlight fade)
  - Word counter shows remaining words
  - Scroll through the massive document

## [2.0.9] - 2026-01-XX

### Added
- **Digital Dusting (Maximum Entropy)** app - Fight entropy by dusting a surface that never stays clean
  - Two-layer dust system (grey base dust, purple toxic residue)
  - Dust continuously settles when idle (entropy simulation)
  - Purple residue requires repeated swiping to clear (harder to remove)
  - 10-minute countdown timer that reverses when idle
  - Procedural white noise audio feedback based on movement speed
  - Draggable UI stats container that spawns purple dust when brushed
  - Hidden inspirational text revealed beneath dust layers
  - Completion sequence when timer reaches zero
  - Full-screen canvas interface with touch and mouse support
- Fixed copyright year in Bubble Wrap app (2024 → 2026)
- Updated home page grid to accommodate eleven apps (3 cards per row, 4 rows)

### Changed
- **Refactored to multi-page architecture**
  - Split single-file SPA into separate HTML pages
  - `index.html` is now the main hub/home page
  - Each app has its own file: `frontend/progress.html`, `frontend/currency.html`, `frontend/hold.html`, `frontend/weather.html`
  - Created shared CSS (`frontend/shared.css`) and JS (`frontend/shared.js`) files
  - Navigation changed from JavaScript routing to standard HTML links
  - Improved code organization and maintainability

## [2.0.2] - 2026-01-XX

### Added
- **Node.js and npm setup for code quality**
  - ESLint for JavaScript analysis
  - HTMLHint for HTML validation
  - Pa11y for accessibility auditing (WCAG 2AA)
  - npm audit for security scanning
  - Browserslist for compatibility checking
  - Automated check scripts and CI/CD support
  - Development documentation
- **Nihilist Weather** app - Terminal-style weather interface that confirms "outside exists"
  - Minimalist terminal aesthetic with scanline animation
  - Location search functionality (existential validation)
  - Unit conversion (Celsius, Fahrenheit, Kelvin)
  - 5-day "Probability of Existence" forecast
  - Satellite feed simulation
  - Status log with philosophical messages
- Space Mono font for terminal aesthetic
- Updated home page grid to accommodate four apps (2x2 on medium screens, 4 columns on large)
- **Netlify deployment configuration**
  - `netlify.toml` with proper build settings and SPA redirects
  - `_redirects` file for client-side routing support
  - Security headers and caching configuration
  - Deployment documentation
- **Browser Local Storage Integration**
  - Progress Simulator: Saves progress state (resumes within 1 hour)
  - Currency Converter: Remembers last amount and selected currency
  - Hold On: Tracks personal best score locally
  - Nihilist Weather: Saves unit preference and last searched location
  - Centralized Storage utility with error handling

### Changed
- Home page grid layout from 3 columns to responsive 2-4 column layout
- Updated navigation to include weather page
- Progress Simulator now restores state on page load (if recent)
- Updated README with deployment instructions

## [2.0.1] - 2026-01-XX

### Added
- Initial project structure following repo organization rules
- Complete documentation (PLANNING.md, ARCHITECTURE.md, STYLE_GUIDE.md, API_MAP.md)
- Bootstrap scripts for local development
- Environment configuration system
- README files for all major directories

### Changed
- Organized codebase into proper directory structure
- Moved HTML file to `systems/frontend/` directory

### Fixed
- N/A (initial release)

## [2.0.0] - Previous

### Features
- Progress Simulator with infinite 99% loops
- Useless Cash currency converter
- Hold On game with Firebase leaderboard
- Single-page application architecture
- Mobile-responsive design
- Glass morphism UI design
