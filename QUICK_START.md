# 🚀 QUICK START: Get Your APK in 10 Minutes!

## 📋 What You Need
- ✅ GitHub account (free)
- ✅ Git installed on your computer
- ✅ This GIRL folder with all files

---

## ⚡ Super Fast Method (Recommended)

### Using the PowerShell Script

1. **Open PowerShell** in the GIRL folder:
   - Right-click GIRL folder → "Open in Terminal" or "Open PowerShell here"
   - Or: Open PowerShell and run: `cd C:\Users\DELL\OneDrive\Desktop\SHALO\GIRL`

2. **Run the setup script**:
   ```powershell
   .\push-to-github.ps1
   ```

3. **Follow the prompts**:
   - Create repository on GitHub first (it will guide you)
   - Enter your GitHub username
   - Enter your repository name (e.g., "hey-xaloe-app")
   - Enter commit message (or press Enter for default)
   - Enter GitHub credentials when prompted

4. **Done!** Go to your GitHub repo → Actions tab → Wait for build

---

## 🖱️ Manual Method (Step by Step)

### Step 1: Create GitHub Repository (3 minutes)

1. Go to https://github.com
2. Click **"+"** (top right) → **"New repository"**
3. Settings:
   - Name: `hey-xaloe-app`
   - Description: "Special app for Xaloe"
   - Visibility: **PRIVATE** ⚠️ (keep it secret!)
   - Do NOT check "Initialize with README"
4. Click **"Create repository"**

### Step 2: Push Code to GitHub (2 minutes)

Open PowerShell in GIRL folder and run these commands:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - HEY app for Xaloe 💙🇿🇼"

# Add GitHub as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example with real values**:
```powershell
git remote add origin https://github.com/johndoe/hey-xaloe-app.git
git branch -M main
git push -u origin main
```

### Step 3: Wait for Build (5-10 minutes)

1. Go to your repository on GitHub
2. Click **"Actions"** tab (top menu)
3. You'll see **"Build Android APK"** workflow running
4. Wait for green checkmark ✅

### Step 4: Download APK (1 minute)

1. Click the completed workflow run
2. Scroll to **"Artifacts"** section
3. Click **"HEY-app-debug"** to download ZIP
4. Unzip to get `app-debug.apk`

### Step 5: Install on Phone (2 minutes)

**Method A: USB Transfer**
1. Connect phone via USB
2. Copy APK to phone's Downloads folder
3. On phone: Open Files app → Downloads
4. Tap APK → Install

**Method B: Google Drive/Email**
1. Upload APK to Drive or email to yourself
2. Download on phone
3. Install

---

## 🔐 GitHub Authentication Help

If you get authentication errors when pushing:

### Option 1: HTTPS with Token (Recommended)

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Select scopes: ✓ **repo** (all sub-options)
4. Click **"Generate token"**
5. **Copy the token** (you won't see it again!)
6. When git asks for password, **paste the token** instead

### Option 2: SSH Key

```powershell
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
Get-Content ~/.ssh/id_ed25519.pub | clip

# Add to GitHub: Settings → SSH Keys → New SSH Key → Paste

# Use SSH URL instead:
git remote set-url origin git@github.com:YOUR_USERNAME/REPO_NAME.git
```

---

## 🔄 Making Updates Later

After you make changes to the code:

```powershell
# Stage changes
git add .

# Commit with description
git commit -m "Update: added new feature"

# Push to GitHub
git push

# GitHub Actions automatically builds new APK!
```

---

## 📦 What Happens in GitHub Actions?

The workflow automatically:
1. ✅ Sets up Node.js 18
2. ✅ Installs dependencies (`npm ci`)
3. ✅ Builds React app (`npm run build`)
4. ✅ Sets up Java 17 and Android SDK
5. ✅ Creates Android project with Capacitor
6. ✅ Builds APK with Gradle
7. ✅ Uploads APK as artifact (downloadable for 30 days)

**Total time**: 5-10 minutes per build

---

## ❓ Troubleshooting

### "Git is not recognized"
- Install Git: https://git-scm.com
- Restart PowerShell after installation

### "Remote already exists"
```powershell
# Remove old remote
git remote remove origin

# Add new one
git remote add origin https://github.com/USERNAME/REPO.git
```

### "Push rejected"
- Make sure repository exists on GitHub
- Check you have correct username/repo name
- Try: `git pull origin main --rebase` then `git push`

### "Build failed in GitHub Actions"
- Click the failed workflow
- Check the error logs
- Most common: Missing files (make sure you committed everything)

### "APK won't install on phone"
- Enable "Install from Unknown Sources"
- Settings → Security → Unknown Sources → Enable
- Or: Settings → Apps → Special Access → Install Unknown Apps

---

## 📁 Files Created for GitHub Actions

```
GIRL/
├── .github/
│   └── workflows/
│       └── build-apk.yml          # GitHub Actions workflow
├── .gitignore                      # Git ignore rules
├── push-to-github.ps1              # Helper script
├── GITHUB_ACTIONS_GUIDE.md         # Detailed guide
└── QUICK_START.md                  # This file
```

---

## 🎉 You're All Set!

✅ GitHub Actions workflow configured  
✅ Scripts ready to use  
✅ Documentation complete  
✅ App is production-ready  

**Just push to GitHub and get your APK!** 🚀

---

## 💡 Pro Tips

1. **Keep it Private**: Always use private repo for personal apps
2. **Commit Often**: Small commits are easier to track
3. **Descriptive Messages**: "Update reasons list" > "changes"
4. **Test Before Push**: Run `npm run dev` to test locally first
5. **Download APKs**: They expire after 30 days, download important ones

---

## 📞 Quick Command Reference

```powershell
# First time setup
.\push-to-github.ps1

# Or manually:
git init
git add .
git commit -m "Initial commit 💙"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# After changes:
git add .
git commit -m "Update: description"
git push

# Check status:
git status

# View history:
git log --oneline
```

---

## 🎯 Expected Timeline

- **Setup**: 5 minutes (create repo, push code)
- **First Build**: 8-10 minutes (GitHub Actions sets up everything)
- **Download**: 1 minute
- **Install**: 2 minutes

**Total from start to installed app**: ~15-20 minutes

---

## 💙 Final Words

Everything is ready! The app is fully functional with:
- ✨ All 10 features working
- 🇿🇼 Zimbabwean cultural elements
- 🙏 Faith-centered content
- 💙 Beautiful animations
- 📱 Professional APK build process

**May this effort touch her heart! Good luck! 💙🇿🇼✨**
