# Configuration Directory

This directory contains environment-specific configuration files.

## Files

### `dev.env`
Development environment configuration template. Copy and fill in:
- Firebase API credentials
- Application settings

### `staging.env`
Staging environment configuration.

### `prod.env`
Production environment configuration.

## Security

⚠️ **Important:** Never commit actual credentials to version control.

- `.env` files are gitignored
- Use environment variables or secure secret management in production
- Keep templates with placeholder values only

## Usage

Configuration files are loaded by `boot/env-loader.sh`:

```bash
source boot/env-loader.sh dev    # Loads configs/dev.env
source boot/env-loader.sh staging # Loads configs/staging.env
source boot/env-loader.sh prod    # Loads configs/prod.env
```

## Firebase Setup

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Firestore Database
3. Enable Anonymous Authentication
4. Get your Firebase config from Project Settings
5. Add credentials to the appropriate `.env` file
