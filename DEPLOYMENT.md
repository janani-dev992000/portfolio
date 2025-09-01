# Deployment Guide

This guide covers different ways to deploy your portfolio website.

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy (zero configuration needed!)

## Other Deployment Options

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder (if using static export)
   - Or connect your GitHub repository

### AWS Amplify

1. **Connect Repository**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Connect your GitHub repository
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm install
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

### Railway

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway will auto-detect Next.js and deploy

### Static Export (for GitHub Pages, etc.)

1. **Update next.config.js**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **Build and Export**
   ```bash
   npm run build
   npm run export
   ```

3. **Deploy the `out` folder** to any static hosting service

## Environment Variables

If you add environment variables later (for CMS integration), create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_CMS_TOKEN=your_cms_token
```

## Custom Domain

1. **Vercel**: Go to Project Settings → Domains
2. **Netlify**: Go to Site Settings → Domain Management
3. **AWS Amplify**: Go to Domain Management

## Performance Optimization

- Images are automatically optimized with Next.js Image component
- Fonts are optimized with Next.js Font optimization
- CSS is automatically purged with Tailwind CSS
- Static assets are cached and compressed

## Monitoring

Consider adding:
- **Vercel Analytics**: Built-in analytics
- **Google Analytics**: For detailed visitor tracking
- **Sentry**: For error monitoring

## SSL/HTTPS

All major hosting platforms provide free SSL certificates automatically.
