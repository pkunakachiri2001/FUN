# 🚀 GitHub Actions APK Build Guide

## Overview
This guide will help you automatically build your HEY Android APK using GitHub Actions - no need for Android Studio on your computer!

---

## 📋 Prerequisites

1. **GitHub Account** - Free account at github.com
2. **Git Installed** - Download from git-scm.com
3. **This Project** - The GIRL folder with all files

---

## 🎯 Step-by-Step Setup

### Step 1: Initialize Git Repository

Open PowerShell in the GIRL folder and run:

```powershell
# Navigate to GIRL folder
cd C:\Users\DELL\OneDrive\Desktop\SHALO\GIRL

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - HEY app for Xaloe"
```

---

### Step 2: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Click the + icon** (top right) → "New repository"
3. **Repository settings**:
   - Name: `hey-xaloe-app` (or any name you prefer)
   - Description: "Special app for Xaloe"
   - Visibility: **PRIVATE** (keep it secret!)
   - Do NOT initialize with README (we already have files)
4. **Click "Create repository"**

---

### Step 3: Push Code to GitHub

After creating the repository, GitHub shows commands. Copy your repository URL and run:

```powershell
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/hey-xaloe-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example**:
```powershell
git remote add origin https://github.com/johndoe/hey-xaloe-app.git
git branch -M main
git push -u origin main
```

---

### Step 4: Wait for GitHub Actions to Build

1. **Go to your repository** on GitHub
2. **Click "Actions" tab** (top menu)
3. **You'll see**: "Build Android APK" workflow running
4. **Wait 5-10 minutes** for the build to complete
5. **Green checkmark** = Success! ✅

---

### Step 5: Download Your APK

1. **On the Actions tab**, click the latest successful workflow run
2. **Scroll down** to "Artifacts" section
3. **Click "HEY-app-debug"** to download the APK
4. **Unzip the downloaded file** to get `app-debug.apk`
5. **Transfer to your Android phone** (USB, email, Google Drive, etc.)

---

## 📱 Installing APK on Android Phone

### Method 1: USB Transfer (Recommended)

1. **Connect phone to computer** via USB
2. **Copy `app-debug.apk`** to phone's Downloads folder
3. **On phone**: Open "Files" or "My Files" app
4. **Navigate to Downloads**
5. **Tap the APK file**
6. **If prompted**: Allow installation from unknown sources
7. **Install and open** the HEY app!

### Method 2: Google Drive

1. **Upload APK** to Google Drive from computer
2. **Open Google Drive** on phone
3. **Download the APK**
4. **Install** as described above

### Method 3: Email

1. **Email APK** to yourself
2. **Download attachment** on phone
3. **Install** as described above

---

## 🔄 Updating the App

When you make changes:

```powershell
# In GIRL folder
cd C:\Users\DELL\OneDrive\Desktop\SHALO\GIRL

# Stage changes
git add .

# Commit changes
git commit -m "Update: describe what you changed"

# Push to GitHub
git push

# GitHub Actions will automatically build a new APK!
```

---

## ⚙️ GitHub Actions Workflow Explanation

The workflow file (`.github/workflows/build-apk.yml`) does this automatically:

1. ✅ Checks out your code
2. ✅ Installs Node.js 18
3. ✅ Installs npm dependencies
4. ✅ Builds the React web app (`npm run build`)
5. ✅ Sets up Java 17 (needed for Android)
6. ✅ Sets up Android SDK
7. ✅ Installs Capacitor CLI
8. ✅ Adds Android platform
9. ✅ Syncs Capacitor
10. ✅ Builds Android APK using Gradle
11. ✅ Uploads APK as artifact (available for 30 days)

---

## 🎉 Advanced: Release Build (Optional)

For a release-ready APK (for distribution):

1. **Create a tag** in your repository:
   ```powershell
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **GitHub Actions will build both**:
   - Debug APK (for testing)
   - Release APK (for distribution - needs signing)

**Note**: Release APKs need to be signed with a keystore for Google Play Store. The workflow creates an unsigned release APK.

---

## 🐛 Troubleshooting

### Build Failed? Check These:

1. **Actions tab** → Click failed workflow → Check logs
2. **Common issues**:
   - Missing `android/` folder: Make sure you committed all files
   - Node version mismatch: Workflow uses Node 18 (should work)
   - Gradle build error: Check Android configuration files

### APK Won't Install?

1. **Enable "Unknown Sources"**:
   - Android Settings → Security → Unknown Sources → Enable
   - Or: Settings → Apps → Special Access → Install Unknown Apps → Allow for your file manager

2. **Phone blocked installation**:
   - Google Play Protect might warn you (it's safe, you built it!)
   - Click "Install anyway"

---

## 📝 What Gets Built

- **App Name**: HEY
- **Package**: com.hey.xaloe
- **Version**: 1.0.0
- **APK Size**: ~5-10 MB
- **Android Support**: Android 5.0+ (API 21+)
- **Architecture**: Universal (works on all phones)

---

## 🎨 Customizing Before Building

### Change App Icon (Optional)

1. Create icon images (512x512 PNG)
2. Use: https://icon.kitchen to generate Android icons
3. Replace files in `android/app/src/main/res/` folders

### Change App Name (Optional)

Edit `capacitor.config.json`:
```json
{
  "appName": "HEY",  // Change this
  "appId": "com.hey.xaloe"  // Keep unique
}
```

### Change Version (Optional)

Edit `package.json`:
```json
{
  "version": "1.0.0"  // Change to 1.0.1, 1.1.0, etc.
}
```

---

## ✨ Benefits of GitHub Actions

✅ **No Android Studio needed** - Builds in the cloud  
✅ **Automatic builds** - Push code, get APK  
✅ **Free for public/private repos** - 2,000 minutes/month free  
✅ **Consistent builds** - Same environment every time  
✅ **Build history** - Download old APKs anytime (30 days)  
✅ **Easy sharing** - Send GitHub link to collaborators  

---

## 🔐 Security Notes

- ⚠️ **Keep repository PRIVATE** - Don't share your love messages publicly!
- ⚠️ **Don't commit sensitive data** - No passwords or API keys
- ✅ **APK is safe** - You built it, you control it
- ✅ **No tracking** - Your app, your code

---

## 📞 Quick Commands Reference

```powershell
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main

# Update app
git add .
git commit -m "Update: description"
git push

# Create release
git tag v1.0.0
git push origin v1.0.0

# Check status
git status

# View commit history
git log --oneline
```

---

## 🎉 You're Ready!

1. ✅ Code is ready
2. ✅ GitHub Actions workflow configured
3. ✅ .gitignore set up
4. ✅ Scripts in package.json

**Just push to GitHub and watch the magic happen!** 🚀

The APK will be built automatically and available for download in the Actions tab.

---

## 💙 Final Notes

- **First build**: Takes 8-10 minutes (setting up environment)
- **Subsequent builds**: 5-7 minutes (cached dependencies)
- **APK expires**: After 30 days (but you can rebuild anytime!)
- **Storage**: GitHub gives you free artifact storage

**Good luck with Xaloe! May this app work its magic! 💙🇿🇼✨**
