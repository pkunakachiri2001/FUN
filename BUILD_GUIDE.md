# 🚀 Quick Build Guide - HEY APK

## Step-by-Step APK Creation

### Prerequisites
- Node.js installed
- Android Studio installed (or use online tools)

---

## Method 1: Using Android Studio (Recommended)

### Step 1: Install Dependencies
```powershell
cd "C:\Users\DELL\OneDrive\Desktop\SHALO\GIRL"
npm install
```

### Step 2: Build Web App
```powershell
npm run build
```

### Step 3: Add Android Platform
```powershell
npx cap add android
```

### Step 4: Sync Changes
```powershell
npx cap sync android
```

### Step 5: Open in Android Studio
```powershell
npx cap open android
```

### Step 6: Build APK in Android Studio
1. Wait for Gradle sync to complete
2. Click **Build** menu
3. Select **Build Bundle(s) / APK(s)**
4. Click **Build APK(s)**
5. Wait for build to complete
6. Click **locate** when build finishes

**APK Location**: `GIRL\android\app\build\outputs\apk\debug\app-debug.apk`

---

## Method 2: Using Command Line (If you have Android SDK)

### Build Debug APK:
```powershell
cd "C:\Users\DELL\OneDrive\Desktop\SHALO\GIRL\android"
.\gradlew assembleDebug
```

**Output**: `android\app\build\outputs\apk\debug\app-debug.apk`

### Build Release APK (Signed):
```powershell
.\gradlew assembleRelease
```

---

## Method 3: Online Build (No Android Studio Needed)

### Using AppGyver or Similar:
1. Build the web app: `npm run build`
2. Upload the `dist` folder to an online builder
3. Configure app details
4. Download APK

---

## 📱 Transfer APK to Phone

### Option 1: USB Cable
1. Connect phone to PC via USB
2. Enable File Transfer mode
3. Copy `app-debug.apk` to phone's Download folder
4. On phone, use File Manager to install APK

### Option 2: Google Drive / Cloud
1. Upload `app-debug.apk` to Google Drive
2. Open Drive on phone
3. Download and install APK

### Option 3: Direct Share
1. Use WhatsApp/Telegram to send APK to yourself
2. Download and install on phone

---

## ⚙️ Phone Settings for Installation

### Enable "Install from Unknown Sources":
1. Go to **Settings** → **Security** or **Apps**
2. Enable **Install Unknown Apps**
3. Select your File Manager or Browser
4. Allow installation from this source

---

## 🎨 Customize Before Building

### 1. Update App Icon (Optional)
Place your icon in `android/app/src/main/res/`:
- `mipmap-hdpi/ic_launcher.png` (72x72)
- `mipmap-mdpi/ic_launcher.png` (48x48)
- `mipmap-xhdpi/ic_launcher.png` (96x96)
- `mipmap-xxhdpi/ic_launcher.png` (144x144)
- `mipmap-xxxhdpi/ic_launcher.png` (192x192)

### 2. Change App Name
Edit `android/app/src/main/res/values/strings.xml`:
```xml
<resources>
    <string name="app_name">HEY</string>
</resources>
```

### 3. Update Timeline Dates
Edit `src/components/CountdownTimers.jsx`:
```javascript
const firstMetDate = new Date('2025-09-15'); // Your actual date
```

---

## 🐛 Troubleshooting

### Build Fails?
```powershell
# Clean and rebuild
cd android
.\gradlew clean
.\gradlew assembleDebug
```

### Gradle Issues?
- Check Java version: `java -version` (should be Java 11 or 17)
- Update Gradle wrapper if needed

### Capacitor Issues?
```powershell
# Remove and re-add Android
npx cap remove android
npx cap add android
npx cap sync android
```

---

## ✅ Verification Checklist

Before building:
- [ ] All timeline dates updated
- [ ] App name confirmed
- [ ] Colors checked (blue, rose, cream, white)
- [ ] All 10 features tested in browser (`npm run dev`)
- [ ] No console errors
- [ ] Escaping NO button works
- [ ] Navigation works smoothly

---

## 📋 Quick Command Reference

```powershell
# Navigate to project
cd "C:\Users\DELL\OneDrive\Desktop\SHALO\GIRL"

# Install
npm install

# Test locally
npm run dev

# Build web app
npm run build

# Add Android (first time only)
npx cap add android

# Sync changes
npx cap sync android

# Open in Android Studio
npx cap open android

# Build APK (in android folder)
cd android
.\gradlew assembleDebug
```

---

## 💡 Pro Tips

1. **Test in Browser First**: Run `npm run dev` and test all features
2. **Check Mobile View**: Use browser DevTools mobile emulator
3. **Build Debug First**: Easier and faster than release build
4. **Keep Original**: Save a copy of the APK after building
5. **Take Screenshots**: Capture key features before sending

---

## 🎁 Final Steps Before Giving

1. Install APK on your own phone first
2. Test all 10 features thoroughly
3. Make sure timeline dates are correct
4. Verify no bugs or broken links
5. Take a deep breath - you got this! 💙

---

**Need Help?** Check the main README.md for detailed instructions.

**Good Luck!** 🙏💙✨
