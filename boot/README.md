# Boot Directory

This directory contains entry point scripts and configuration files for bootstrapping The Useless App Suite.

## Files

### `main.sh`
Primary bootstrap script that:
- Checks for required dependencies
- Loads environment configuration
- Starts the local web server

**Usage:**
```bash
./boot/main.sh
```

### `env-loader.sh`
Environment configuration loader that:
- Loads variables from config files
- Sets up Firebase configuration
- Exports environment-specific settings

**Usage:**
```bash
source boot/env-loader.sh [dev|staging|prod]
```

### `services.yaml`
Configuration file defining which services to spin up:
- Frontend application
- Future services (commented out)

## Environment Setup

1. Copy `configs/dev.env` and fill in your Firebase credentials
2. Run `./boot/main.sh` to start the application
3. Open `http://localhost:8000` in your browser

## Dependencies

- Python 3 (for local web server)
- Bash shell
- Firebase project (for Hold On leaderboard)
