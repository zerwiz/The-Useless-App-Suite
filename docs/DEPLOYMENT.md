# Deployment Guide

## Netlify Deployment

The Useless App Suite is configured for easy deployment on Netlify.

### Prerequisites

1. A Netlify account (free tier works)
2. A Git repository: [https://github.com/zerwiz/The-Useless-App-Suite](https://github.com/zerwiz/The-Useless-App-Suite)
3. Firebase project (for Hold On leaderboard functionality)

### Deployment Steps

#### Option 1: Deploy via Netlify Dashboard

1. **Connect Repository**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select the repository

2. **Configure Build Settings**
   - **Base directory:** Leave empty (or set to root)
   - **Publish directory:** `.` (root directory)
   - **Build command:** Leave empty (no build step required)
   - Netlify will auto-detect `netlify.toml` if present

3. **Environment Variables** (Optional - for Firebase)
   - Go to Site settings → Environment variables
   - Add Firebase configuration if needed:
     - `FIREBASE_API_KEY`
     - `FIREBASE_PROJECT_ID`
     - `FIREBASE_MESSAGING_SENDER_ID`
     - `FIREBASE_APP_ID`

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically deploy on every push to your main branch

#### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site (first time only)
netlify init

# Deploy
netlify deploy --prod
```

### Configuration Files

- **`netlify.toml`** - Main Netlify configuration
  - Sets publish directory to `systems/frontend`
  - Configures SPA redirects
  - Sets security headers
  - Configures caching

- **`systems/frontend/_redirects`** - SPA routing support
  - Ensures all routes serve `index.html` for client-side routing

### Custom Domain

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow Netlify's DNS configuration instructions

### Firebase Configuration

If you want the Hold On leaderboard to work:

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Firestore Database
3. Enable Anonymous Authentication
4. Configure Firestore security rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /artifacts/{appId}/public/data/scores/{document=**} {
         allow read: if true;
         allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
       }
     }
   }
   ```
5. Get your Firebase config from Project Settings
6. Inject Firebase config into the HTML (see below)

### Injecting Firebase Config

Since the app uses inline JavaScript, you have a few options:

1. **Build-time injection** (recommended for production):
   - Add a build script that replaces placeholders in HTML
   - Use Netlify build environment variables

2. **Runtime injection**:
   - Modify the HTML to read from `window.__FIREBASE_CONFIG__`
   - Set this via Netlify's `_headers` or a small inline script

3. **Manual edit**:
   - Edit `systems/frontend/index.html` directly with your Firebase config
   - Not recommended for public repositories

### Continuous Deployment

Netlify automatically deploys when you push to your connected branch:

- **Production:** Deploys from `main` or `master` branch
- **Preview:** Creates preview deployments for pull requests

### Build Settings Summary

```
Base directory: (root)
Publish directory: . (root)
Build command: (empty - no build step)
```

### Troubleshooting

**Issue: Routes return 404**
- Ensure `_redirects` file exists in `systems/frontend/`
- Check that `netlify.toml` has the redirect rule

**Issue: Firebase not working**
- Verify Firebase config is properly injected
- Check browser console for errors
- Ensure Firestore security rules allow anonymous reads

**Issue: Styles not loading**
- Tailwind CSS loads from CDN, should work automatically
- Check network tab for CDN requests

### Performance

- No build process = instant deploys
- CDN caching via Netlify's global CDN
- Static assets served efficiently
- SPA routing handled by redirects

### Monitoring

- Netlify provides built-in analytics (paid feature)
- Check deploy logs in Netlify dashboard
- Use browser DevTools for client-side debugging
