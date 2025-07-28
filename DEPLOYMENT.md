# Deployment Guide

This project can be deployed to multiple platforms. Here are the instructions for each:

## 🚀 Vercel Deployment (Recommended)

Vercel is the easiest platform for Next.js projects since it's created by the same team.

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub Integration

1. **Connect your GitHub repository**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository

2. **Configure the project**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Install Command: `npm install`

3. **Deploy**:
   - Vercel will automatically deploy on every push to main branch
   - You'll get a unique URL like: `https://your-project.vercel.app`

### Option 3: Deploy via Vercel Dashboard

1. **Upload your project**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Upload your project folder

2. **Configure settings**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`

## 🌐 GitHub Pages Deployment

The project is also configured for GitHub Pages deployment.

### Setup GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

2. **Deploy automatically**:
   - Push to main branch triggers automatic deployment
   - Your site will be available at: `https://[username].github.io/[repo-name]/`

## 🔧 Configuration Files

### Vercel Configuration (`vercel.json`)
- Specifies build commands and output directory
- Configures Node.js runtime
- Optimizes for Next.js static export

### Next.js Configuration (`next.config.ts`)
- Enables static export (`output: 'export'`)
- Configures image optimization
- Sets trailing slashes for better compatibility

## 📝 Environment Variables

If you need to add environment variables:

### For Vercel:
- Go to your project dashboard
- Navigate to Settings → Environment Variables
- Add your variables there

### For GitHub Pages:
- Add them in the GitHub Actions workflow file
- Or use GitHub repository secrets

## 🚀 Benefits of Each Platform

### Vercel:
- ✅ Zero configuration for Next.js
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ Custom domains
- ✅ Preview deployments
- ✅ Analytics included

### GitHub Pages:
- ✅ Free hosting
- ✅ Direct GitHub integration
- ✅ Custom domains
- ✅ Good for static sites

## 🔄 Switching Between Platforms

To switch from GitHub Pages to Vercel:

1. **Remove GitHub Pages workflow** (optional):
   ```bash
   rm -rf .github/workflows/
   ```

2. **Deploy to Vercel** using any of the methods above

3. **Update your domain** if you have a custom domain configured

## 📊 Monitoring

### Vercel:
- Built-in analytics
- Performance monitoring
- Error tracking
- Real-time logs

### GitHub Pages:
- Basic analytics via GitHub
- Manual monitoring required

---

**Recommendation**: Use Vercel for the best Next.js experience and automatic deployments! 