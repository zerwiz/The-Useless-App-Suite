# Development Guide

## Prerequisites

- **Node.js** 16.0.0 or higher
- **npm** 8.0.0 or higher

Check your versions:
```bash
node --version
npm --version
```

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Verify installation:**
   ```bash
   npm run check
   ```

## Code Quality Tools

The project includes automated tools for maintaining code quality:

### HTML Linting (HTMLHint)

Validates HTML structure, accessibility attributes, and best practices.

```bash
npm run lint:html
```

**Checks:**
- Tag and attribute lowercase
- Proper doctype
- Required attributes (alt, title, etc.)
- Unique IDs
- Valid HTML5 structure

### JavaScript Linting (ESLint)

Analyzes JavaScript code for errors, warnings, and best practices.

```bash
npm run lint:js
```

**Checks:**
- Syntax errors
- Unused variables
- Code style consistency
- HTML-specific rules (via @html-eslint)

### Accessibility Audit (Pa11y)

Tests accessibility compliance with WCAG 2AA standards.

```bash
npm run accessibility
```

**Checks:**
- ARIA attributes
- Color contrast
- Keyboard navigation
- Screen reader compatibility
- Semantic HTML

### Security Audit (npm audit)

Scans dependencies for known security vulnerabilities.

```bash
npm run security
```

**Checks:**
- Known vulnerabilities in dependencies
- Outdated packages with security issues
- Moderate and high severity issues

### Browser Compatibility (Browserslist)

Checks which browsers are supported based on configuration.

```bash
npm run compatibility
```

**Configuration:** See `package.json` browserslist field

## Running All Checks

Run all quality checks at once:

```bash
npm run check
```

Or use the shell script:

```bash
./scripts/check.sh
```

## Continuous Integration

These checks can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Run quality checks
  run: |
    npm install
    npm run check
```

## Configuration Files

- **`.eslintrc.json`** - ESLint configuration
- **`.htmlhintrc`** - HTMLHint configuration
- **`.pa11yrc.json`** - Pa11y accessibility configuration
- **`package.json`** - Dependencies and scripts
- **`browserslist`** - Browser compatibility targets

## Troubleshooting

### Node.js not found
Install Node.js from [nodejs.org](https://nodejs.org/) or use a version manager like `nvm`.

### npm install fails
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then reinstall

### Pa11y fails
Pa11y requires Chrome/Chromium. Ensure Chrome is installed or use Docker.

### ESLint HTML parsing errors
The project uses `@html-eslint` for HTML parsing. Ensure it's properly installed.

## Best Practices

1. **Run checks before committing:**
   ```bash
   npm run check
   ```

2. **Fix linting errors:**
   - Most tools provide auto-fix: `npm run lint:js -- --fix`

3. **Address accessibility issues:**
   - Use semantic HTML
   - Add proper ARIA labels
   - Ensure keyboard navigation works
   - Test with screen readers

4. **Keep dependencies updated:**
   ```bash
   npm audit fix
   npm update
   ```

## IDE Integration

### VS Code

Install extensions:
- ESLint
- HTMLHint
- Accessibility Insights

These will show issues directly in your editor.

### Other IDEs

Most modern IDEs support ESLint and HTMLHint through plugins.
