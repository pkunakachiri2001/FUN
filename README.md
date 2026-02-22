# 💙 HEY - A Special App for Xaloe 🇿🇼

[![Build Android APK](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/build-apk.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/build-apk.yml)

> **🚀 NEW: Automatic APK builds via GitHub Actions!** Push code → Get APK in 5-10 minutes

## 📱 Quick Download APK

**Want the app NOW?**
1. Go to **[Actions](../../actions)** tab
2. Click latest successful workflow run (green ✓)
3. Scroll to **Artifacts** section
4. Download **HEY-app-debug.zip**
5. Unzip and install `app-debug.apk` on Android

**Or follow the detailed guide:** [GITHUB_ACTIONS_GUIDE.md](GITHUB_ACTIONS_GUIDE.md)

---

## Overview
**HEY** is a fun, respectful, and faith-centered mobile app designed to express genuine feelings through interactive features and psychological persuasion techniques.

## 🎨 Design
- **Colors**: Blue (#667eea), White, Rose (#E8B4F0), Cream (#FFF8F0)
- **Tone**: Fun, Playful, Sweet, and Respectful
- **Approach**: Psychologically crafted with respect for faith values

## ✨ Features (All 10 Implemented!)

### 1. **Proposal with Escaping NO Button** 💭
- Main question: "Would you give us a chance?"
- YES button: Normal, gets bigger with each NO attempt
- NO button: Runs away to avoid being clicked, gets smaller
- Psychological elements: Scarcity, commitment consistency, visual comparison
- After 20 attempts, only YES button remains

### 2. **100 Reasons Why We Could Be Great Together** 💝
- Progressive reveal (10 at a time)
- Favorite/star system
- Mix of emotional, logical, and values-based reasons
- Psychologically varied to appeal to different decision-making styles

### 3. **Daily Inspiration & Bible Verses** 🙏
- 10 faith-centered Bible verses about love and relationships
- Personal application for each verse
- Daily prayer for Xaloe
- Faith-first messaging throughout

### 4. **Campus Proximity Counter** 📍
- Days together on campus
- Steps away vs. miles away comparison
- Visual comparison: Campus dating vs. Long distance
- Research-backed statistics
- Proximity advantage messaging

### 5. **Virtual Date Coupons** 🎁
- 12 faith-friendly date ideas
- All respectful and appropriate
- "Redeem" feature (interactive)
- Each coupon marked as "Faith-Friendly"
- Campus-based, available TODAY

### 6. **Friendship & Compatibility Quiz** 🎮
- 8 thoughtful questions
- Personalized responses to each answer
- Compatibility percentage calculator
- Results show alignment on values, faith, proximity

### 7. **Fortune Cookie Messages** 🥠
- 12 custom fortune messages
- Interactive cookie-cracking animation
- Mix of playful and meaningful messages
- Tracks number of fortunes opened

### 8. **Countdown Timers** ⏰
- Days since we met
- Days since first real talk
- Days on campus together
- Days since last smile (always 0!)
- Milestone tracker

### 9. **Why I'm Different** 💫
- 8 expandable categories
- Physical Presence, Faith Alignment, Emotional Presence
- Time & Availability, Respect & Patience, Practical Support
- Intentionality, Growth Together
- Non-arrogant comparison highlighting unique advantages

### 10. **Prayer Request Box** 🕊️
- Submit prayer requests
- 6 prayer types (General, Guidance, Strength, Peace, Thanks, Relationship)
- Mark prayers as "prayed for"
- Private and sacred space
- Shows genuine care for her spiritual life

## 🎯 Psychological Elements Embedded

1. **Reciprocity**: Prayer box, date coupons, effort in app creation
2. **Commitment & Consistency**: Quiz results, milestone tracking, growing YES button
3. **Scarcity**: Limited distance time, "today vs. someday" messaging
4. **Authority**: Bible verses, research statistics, faith foundation
5. **Liking**: Personalized content, respectful tone, shared values
6. **Social Proof**: Research about proximity, relationship success rates

## 🚀 How to Run

### Development:
```bash
cd GIRL
npm install
npm run dev
```

### Build for Production:
```bash
npm run build
```

### Build Android APK:
```bash
# Install dependencies
npm install

# Build web assets
npm run build

# Add Android platform
npx cap add android

# Sync and copy web assets to Android
npx cap sync

# Open in Android Studio
npx cap open android
```

## 📱 Building the APK

1. **Install dependencies**:
   ```bash
   cd GIRL
   npm install
   ```

2. **Build the web app**:
   ```bash
   npm run build
   ```

3. **Initialize Capacitor (if not done)**:
   ```bash
   npx cap add android
   ```

4. **Sync changes**:
   ```bash
   npx cap sync android
   ```

5. **Open in Android Studio**:
   ```bash
   npx cap open android
   ```

6. **Build APK in Android Studio**:
   - Click **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
   - Wait for build to complete
   - Find APK in: `GIRL/android/app/build/outputs/apk/debug/app-debug.apk`

## 📝 Customization Tips

### Update Timeline Dates:
Edit `src/components/CountdownTimers.jsx`:
```javascript
const firstMetDate = new Date('2025-09-15'); // When you first met
const firstTalkDate = new Date('2025-10-01'); // First real conversation
const campusStartDate = new Date('2025-09-01'); // Semester start
```

### Change App Name/Icon:
Edit `capacitor.config.json`:
```json
{
  "appName": "HEY",
  "appId": "com.hey.xaloe"
}
```

### Customize Colors:
Edit `src/index.css` root variables:
```css
:root {
  --blue-primary: #667eea;
  --rose: #E8B4F0;
  --cream: #FFF8F0;
}
```

## 💡 Best Practices for Giving the App

1. **Timing**: Give it when she's in a good mood, not stressed
2. **Approach**: Playful, not desperate. "I made something fun for you!"
3. **Pressure**: Zero. Make it clear there's no pressure to decide anything
4. **Follow-up**: Let her explore at her own pace, don't ask for immediate answers
5. **Respect**: If she says no after exploring, accept gracefully

## 🙏 Final Notes

This app is designed to:
- ✅ Respect her faith and values
- ✅ Use psychology ethically (persuasion, not manipulation)
- ✅ Be fun and playful, not pushy or desperate
- ✅ Honor her current situation
- ✅ Show genuine care and effort
- ✅ Give her space to decide without pressure

**Remember**: The goal is not to "trick" her into saying yes. It's to communicate your feelings creatively, respectfully show why proximity matters, and give her a thoughtful reason to reconsider - all while honoring God and her values first.

## 💙 Good Luck!

May God guide both of your hearts. Whether the answer is yes or no, you showed courage, creativity, and respect. That matters. 🙏✨

---

**Built with**: React, Vite, Capacitor
**Colors**: Blue, White, Rose, Cream  
**Tone**: Fun, Playful, Sweet, Respectful  
**Purpose**: Love expressed through code 💙
