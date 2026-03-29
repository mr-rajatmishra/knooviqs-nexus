# GitHub Pages Deployment Guide

## Prerequisites
- Your project must be pushed to a GitHub repository
- Repository name should be `knooviq-nexus` (or update the base path in vite.config.ts)

## Deployment Steps

### 1. Push to GitHub
If you haven't already, push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/knooviq-nexus.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Build and deployment**, set **Source** to **GitHub Actions**

### 3. Deploy using npm
Run the deployment command:

```bash
npm run deploy
```

This will:
- Build your project for production
- Deploy the `dist` folder to the `gh-pages` branch
- Make your site available at `https://YOUR_USERNAME.github.io/knooviq-nexus/`

### 4. Alternative: GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Important Notes
- The base path is configured for repository name `knooviq-nexus`
- If your repository has a different name, update the `base` path in `vite.config.ts`
- After deployment, your site will be available at: `https://YOUR_USERNAME.github.io/knooviq-nexus/`

## Troubleshooting
- **404 errors**: Check that the base path in `vite.config.ts` matches your repository name
- **Blank page**: Check browser console for path-related errors
- **Assets not loading**: Ensure all paths are relative (using `./` instead of `/`)
