# 🚀 Quick Start Guide

Get your portfolio running in under 5 minutes!

## ⚡ Super Quick Setup

1. **Extract the files** (if you have a zip):
   ```bash
   unzip PersonalPortfolio.zip
   cd PersonalPortfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to: `http://localhost:5000`

That's it! Your portfolio is now running! 🎉

## 🎯 What You'll See

- **Homepage**: Terminal-style interface with your name and title
- **Hover Feature**: Hover over "Hover to get the code" to see CV download and portfolio site buttons
- **Navigation**: Click on sidebar items (Home, About, Experience, Projects, Contact, Blog)
- **Experience Page**: Expandable cards showing work experience details
- **VS Code Theme**: Dark theme that looks like VS Code editor

## 🔧 Quick Customization

### Change Your Name and Title
Edit `client/src/pages/home.tsx`:
```typescript
<h1 className="text-4xl font-bold text-tWhiteSec mb-2">Your Name Here</h1>
<p className="text-xl text-tBlue">Your Title Here</p>
```

### Update Contact Info
Edit `client/src/pages/contact.tsx` with your email, phone, and social links.

### Add Your Experience
Edit `client/src/pages/experience.tsx` to add your work experience.

## 🌐 Deploy Online

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically!

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Your site is live!

## 📱 Mobile Responsive

The portfolio automatically adapts to mobile devices. Test it by resizing your browser window!

## 🎨 Color Scheme

The portfolio uses VS Code's dark theme colors:
- Background: `#0a0d12` (dark blue-black)
- Text: `#e5e9f0` (light gray)
- Accent: `#53b0fd` (blue)

## 🆘 Need Help?

- Check the full `README.md` for detailed instructions
- Make sure Node.js is installed (version 18+)
- Try `npm cache clean --force` if installation fails

**Enjoy your new portfolio! 🚀**

