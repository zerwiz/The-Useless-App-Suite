#!/bin/bash

# Code Quality Check Script
# Runs all linting and analysis tools

set -e

echo "🔍 Running code quality checks..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ to run checks."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm 8+ to run checks."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Run checks
echo "🔎 Running HTML linting..."
npm run lint:html || true

echo ""
echo "🔎 Running JavaScript linting..."
npm run lint:js || true

echo ""
echo "♿ Running accessibility checks..."
npm run accessibility || true

echo ""
echo "🔒 Running security audit..."
npm run security || true

echo ""
echo "✅ All checks completed!"
echo ""
echo "💡 Tip: Run 'npm run check' to run all checks at once."
