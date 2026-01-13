# The Useless App Suite

A curated collection of digital artifacts designed to do absolutely nothing useful.

**Repository:** [https://github.com/zerwiz/The-Useless-App-Suite](https://github.com/zerwiz/The-Useless-App-Suite)

## Overview

The Useless App Suite is a web-based application featuring five interactive experiences:

1. **Progress Sim** - Master patience with infinite 99% loops and fake breakthroughs
2. **Useless Cash** - Convert savings into digital burritos and rubber ducks
3. **Hold On** - Compete globally for the record of holding a blue button
4. **Nihilist Weather** - Quantify the void with terminal-style existential forecasts
5. **Manual Clock** - A clock that doesn't sync with system time. Drag the hands yourself.

## Quick Start

### Local Development

The suite is a multi-page application. The main hub is `index.html`, and each app has its own page in the `frontend/` folder. Simply open `index.html` in a browser or serve it through a web server.

```bash
# Using the bootstrap script
./boot/main.sh

# Or directly with Python
python -m http.server 8000
```

### Code Quality Checks

The project includes automated checks for accessibility, compatibility, security, and code quality.

**Prerequisites:**
- Node.js 16+ and npm 8+

**Setup:**
```bash
npm install
```

**Run checks:**
```bash
# Run all checks
npm run check

# Individual checks
npm run lint          # HTML and JavaScript linting
npm run accessibility # Accessibility audit (WCAG 2AA)
npm run security      # Security vulnerability scan
npm run compatibility # Browser compatibility check
```

### Deployment

The project is configured for Netlify deployment. See [Deployment Guide](docs/DEPLOYMENT.md) for details.

**Quick Deploy:**
1. Push to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Netlify will auto-detect the `netlify.toml` configuration
4. Deploy!

For Firebase integration (Hold On leaderboard), configure your Firebase credentials in the boot scripts or Netlify environment variables.

## Project Structure

```
/
├── index.html         # Main hub/home page
├── frontend/          # Individual app pages
│   ├── progress.html # Progress Simulator
│   ├── currency.html # Useless Cash Converter
│   ├── hold.html     # Hold On Game
│   ├── weather.html  # Nihilist Weather
│   ├── clock.html    # Manual Clock
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

## Version

**Version 2.0.3**

## Documentation

- [Planning & Roadmap](docs/PLANNING.md)
- [Architecture Overview](docs/ARCHITECTURE.md)
- [API Map](docs/API_MAP.md) (if applicable)
- [Style Guide](docs/STYLE_GUIDE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Development Guide](docs/DEVELOPMENT.md)

## Repository

The source code for this project is available on GitHub:
- **GitHub:** [https://github.com/zerwiz/The-Useless-App-Suite](https://github.com/zerwiz/The-Useless-App-Suite)

## License

Built for the bored • 2026 Archive
