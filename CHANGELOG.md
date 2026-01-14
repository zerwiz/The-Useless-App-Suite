# Changelog

All notable changes to The Useless App Suite will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **20 more useless life hacks** - Added 20 additional useless life hack messages to the random modal system on `index.html`.
- **Bureaucracy Snake** - Snake game with bureaucratic paperwork. Every asset captured requires re-verification.
- **Minesweeper: Bureaucracy & Threat Protocol** - Minesweeper with bureaucratic delays. Every click requires paperwork approval with "Filing...", "Reviewing...", "Approving..." steps. Includes permit system and random audit interventions.
- **Minesweeper: Active Threat Protocol** - Regular Minesweeper without bureaucratic delays. Instant gameplay mode accessible from the bureaucratic version.
- **Solitaire Protocol** - Full Klondike Solitaire with drag-and-drop functionality. Operation Time-Waste theme.
- **Weeb Shop** - Useless web shop with first product "Dehydrated Water" ($19.99). Shopping cart functionality with useless checkout.
- **Existential Clock updates** - Added "Don't click the clock" warning text. Clicking clock labels now changes subtitle to "Resting in the 'not yet'."
- **Index page header layout** - New centered header layout with footer info and "Weeb Shop" button at the top.
- **Lyric-O-Fail 3000 footer** - Added footer with Natan Verkhovsky credit and "Don't click his name" warning.

### Changed
- **Manual Clock** - Fixed mobile centering issues. Made clock container responsive with proper aspect ratio and padding.
- **Hold On app** - Improved timer functionality and visual feedback. Fixed millisecond counting.
- **Back to Hub button** - Hidden on mobile devices (screens ≤768px) since users can use browser back button.
- **Index page** - Updated header layout to include "Weeb Shop" button alongside "About Us" button.

### Fixed
- **Bureaucracy Snake** - Fixed Asset Registry rendering issue. All assets now render properly in the sidebar with proper scrolling.
- **Manual Clock** - Fixed mobile centering and responsive sizing issues.
- **Hold On** - Fixed button counting milliseconds correctly with improved timer logic.

## [2.4.0] - 2026-01-XX

### Added
- **Lyric-O-Fail 3000** - World's worst lyric writer app with genre-based paper colors, burn modal with multiple useless options, and rotating subtitle.
- **Bureaucracy Snake** - Snake game with bureaucratic paperwork theme.
- **Random modals on index** - Random useless life hack modals appearing at intervals.
- **Floating background life hacks** - More useless life hacks appearing randomly in the background of index page.
- **Random subtitle rotation** - Index page subtitle now rotates through 30 different useless descriptions.
- **Random title effects** - Main title "The Useless App Suite" now has random interactive effects on hover, click, and automatically.
- **Random app count** - About Us modal shows random number of apps (13-47) instead of fixed count.
- **Version badge link** - Version 2.4.0 now links to YouTube video with warning text above it.

### Changed
- **App card layout** - Changed to 3 cards per row with rows below.
- **App ordering** - Multiple apps reordered based on user requests.
- **About Us modal** - Updated with more useless content and random app count.

## [2.3.0] - 2026-01-XX

### Added
- **Terms of Service Game** - Scroll 400 pages of legal text with whiplash detection.
- **Captcha Trainer** - Train to prove your humanity by selecting squares forever.
- **Useless background** - Animated useless numbers and symbols floating in the background of index page.
- **Developer contact info** - Added email to bottom of index page.
- **About Us button** - Added to top and bottom of index page.

### Changed
- **Footer text** - Changed "Archive" to "UnArchive".

## [2.2.0] - 2026-01-XX

### Added
- **Digital Dusting** - Fight entropy with dust that never stops settling. Includes "Begin" button to gate interaction.
- **Undo-Only Text Editor** - Text editor where you can only undo. No typing allowed. Includes useless dropdown menus.
- **Virtual Waiting Room** - Waiting room with 2014 magazines and infinite wait time.
- **Existential Clock** - Clock that asks philosophical questions instead of telling time. Clickable labels with random modals.
- **Useless Food Generator** - 40 culinary catastrophes with sound effects.
- **Back to Hub modal** - All apps now show useless life hack modal when clicking "Back to Hub" with random sounds.

### Changed
- **Back to Hub button** - Now shows modal with useless life hacks and "Loading System Optimization" message.
- **Digital Dusting** - Requires clicking "Begin" button before swiping is possible.

## [2.1.0] - 2026-01-XX

### Added
- **Ego Inflator** - Tell us your problems. We definitely care.
- **Virtual Bubble Wrap** - Already popped. The world's most disappointing experience. Includes easter egg.
- **Typing Speedster** - Type fast for invisibility, or wait 10 minutes for clarity.
- **Un-Calculator** - Cyber edition. Always gives wrong answers with confidence. Includes sound effects.
- **Digital Pet Rock** - Advanced lithic simulator that requires no actual interaction. Includes sound effects.

### Changed
- **App ordering** - Multiple apps reordered in index page.

## [2.0.0] - 2026-01-XX

### Added
- **Multi-page architecture** - Refactored from single HTML file to main hub (`index.html`) with separate HTML files for each app.
- **Shared resources** - Created `frontend/shared.css` and `frontend/shared.js` for consistent styling and utilities.
- **Back to Hub navigation** - All app pages include navigation back to main hub.
- **Local storage utility** - Custom Storage utility for persisting user preferences and app state.
- **Netlify deployment** - Configured for continuous deployment with proper redirects and headers.

### Changed
- **Project structure** - Apps moved to `frontend/` directory, one file per app.
- **Navigation** - Changed from JavaScript routing to standard HTML links.

## [1.0.0] - 2026-01-XX

### Added
- Initial release of The Useless App Suite
- **Progress Sim** - Master patience with infinite 99% loops and fake breakthroughs.
- **Manual Clock** - A clock that doesn't sync with time. Drag the hands yourself.
- **Nihilist Weather** - Quantifying the void with terminal-style existential forecasts.
- **Hold On** - Compete globally for the record of holding a blue button.
- **Random Currency** - Modern financial tracking for weirdos.
- **Ego Inflator** - Tell us your problems. We definitely care.

---

## Notes

- All dates are approximate as this is a living document.
- Version numbers follow semantic versioning but may not strictly adhere to it for this useless project.
- Changes are documented as they are made, not necessarily in chronological order of implementation.
