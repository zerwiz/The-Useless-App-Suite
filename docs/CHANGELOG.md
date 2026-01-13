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
