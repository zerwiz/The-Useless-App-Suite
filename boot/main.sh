#!/bin/bash

# The Useless App Suite - Bootstrap Script
# This script initializes and serves the application

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
FRONTEND_FILE="$PROJECT_ROOT/index.html"

echo "🚀 The Useless App Suite - Bootstrap"
echo "====================================="
echo ""

# Check if index.html exists
if [ ! -f "$FRONTEND_FILE" ]; then
    echo "❌ Error: index.html not found at $FRONTEND_FILE"
    exit 1
fi

# Load environment variables if available
if [ -f "$PROJECT_ROOT/boot/env-loader.sh" ]; then
    echo "📋 Loading environment configuration..."
    source "$PROJECT_ROOT/boot/env-loader.sh"
fi

# Check for Python (most common)
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo "🌐 Starting web server on http://localhost:8000"
    echo "📁 Serving from: $PROJECT_ROOT"
    echo ""
    echo "Press Ctrl+C to stop"
    echo ""
    cd "$PROJECT_ROOT"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python found"
    echo "🌐 Starting web server on http://localhost:8000"
    echo "📁 Serving from: $PROJECT_ROOT"
    echo ""
    echo "Press Ctrl+C to stop"
    echo ""
    cd "$PROJECT_ROOT"
    python -m http.server 8000
else
    echo "⚠️  No Python found. Please install Python 3 or use another web server."
    echo ""
    echo "Alternative options:"
    echo "  - Node.js: npx http-server -p 8000"
    echo "  - PHP: php -S localhost:8000"
    echo "  - Or open index.html directly in your browser"
    exit 1
fi
