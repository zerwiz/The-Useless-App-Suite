# Style Guide

## Code Style

### HTML
- Use semantic HTML5 elements
- Indentation: 2 spaces
- Self-closing tags: Use trailing slash (optional in HTML5)

### CSS
- Use Tailwind utility classes where possible
- Custom styles in `<style>` block
- Use CSS custom properties for theme values
- BEM-like naming for custom classes (e.g., `glass-card-home`)

### JavaScript
- ES6+ syntax
- Use `const`/`let` (avoid `var`)
- Arrow functions for callbacks
- Module imports for Firebase SDK
- Global functions prefixed with app name (e.g., `showPage`, `toggleProgPause`)

## Naming Conventions

### Variables
- camelCase for variables and functions
- Descriptive names (e.g., `progressValue`, `holdStartTime`)

### CSS Classes
- kebab-case for custom classes
- Tailwind utilities as-is
- Semantic names (e.g., `glass-card-currency`, `progress-fill`)

### IDs
- kebab-case
- Descriptive (e.g., `progress-page`, `usd-input`)

## Design Principles

### Color Palette
- Background: `#020617` (dark slate)
- Accent: Blue (`#3b82f6`), Indigo (`#6366f1`), Rose (`#f472b6`)
- Text: White with opacity variations
- Glass effects: `rgba(30, 41, 59, 0.4-0.7)`

### Typography
- Primary: Plus Jakarta Sans
- Headings: Space Grotesk
- Monospace: System font stack (for timers)

### Spacing
- Consistent use of Tailwind spacing scale
- Large padding for cards (2.5rem+)
- Generous margins between sections

### Animations
- Smooth transitions: `cubic-bezier(0.4, 0, 0.2, 1)`
- Fade-in for page transitions
- Hover effects with transform and shadow
- Pulse animations for interactive elements

## Component Patterns

### Glass Cards
```css
background: rgba(30, 41, 59, 0.4);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Buttons
- Rounded corners: `rounded-xl` or `rounded-2xl`
- Hover states with background and transform changes
- Active states with scale reduction

### Progress Indicators
- Gradient fills
- Smooth width transitions
- Shine animations for visual interest

## File Organization

- Single HTML file for simplicity
- Inline styles in `<style>` block
- Inline scripts in `<script type="module">`
- External dependencies via CDN

## Comments

- Use comments to separate major sections
- Explain complex logic
- Mark TODO items if needed
