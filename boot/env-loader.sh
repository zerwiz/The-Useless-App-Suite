#!/bin/bash

# Environment Configuration Loader
# Loads environment variables from config files

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIGS_DIR="$PROJECT_ROOT/configs"

# Determine environment (default to dev)
ENV="${1:-dev}"

# Load config file if it exists
CONFIG_FILE="$CONFIGS_DIR/${ENV}.env"

if [ -f "$CONFIG_FILE" ]; then
    echo "📋 Loading configuration from $CONFIG_FILE"
    set -a
    source "$CONFIG_FILE"
    set +a
else
    echo "⚠️  Config file not found: $CONFIG_FILE"
    echo "   Using default values or environment variables"
fi

# Export Firebase config if available
# These can be used to inject into the HTML at runtime
if [ -n "$FIREBASE_API_KEY" ] && [ -n "$FIREBASE_PROJECT_ID" ]; then
    export __firebase_config="{\"apiKey\":\"$FIREBASE_API_KEY\",\"authDomain\":\"$FIREBASE_PROJECT_ID.firebaseapp.com\",\"projectId\":\"$FIREBASE_PROJECT_ID\",\"storageBucket\":\"$FIREBASE_PROJECT_ID.appspot.com\",\"messagingSenderId\":\"$FIREBASE_MESSAGING_SENDER_ID\",\"appId\":\"$FIREBASE_APP_ID\"}"
fi
