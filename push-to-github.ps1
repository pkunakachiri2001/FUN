# Push to GitHub and Build APK
# Run this script to push your code to GitHub and trigger APK build

Write-Host "🚀 HEY App - GitHub Setup Script" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "📥 Download from: https://git-scm.com" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Git is installed" -ForegroundColor Green

# Check if already initialized
if (-not (Test-Path .git)) {
    Write-Host ""
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already initialized" -ForegroundColor Green
}

# Get GitHub username and repo name
Write-Host ""
Write-Host "📝 GitHub Repository Setup" -ForegroundColor Cyan
Write-Host "===========================" -ForegroundColor Cyan
Write-Host ""
Write-Host "First, create a repository on GitHub:" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com" -ForegroundColor White
Write-Host "2. Click '+' (top right) → 'New repository'" -ForegroundColor White
Write-Host "3. Name it (e.g., 'hey-xaloe-app')" -ForegroundColor White
Write-Host "4. Make it PRIVATE" -ForegroundColor White
Write-Host "5. Do NOT initialize with README" -ForegroundColor White
Write-Host "6. Click 'Create repository'" -ForegroundColor White
Write-Host ""

$username = Read-Host "Enter your GitHub username"
$reponame = Read-Host "Enter your repository name (e.g., hey-xaloe-app)"

if ([string]::IsNullOrWhiteSpace($username) -or [string]::IsNullOrWhiteSpace($reponame)) {
    Write-Host "❌ Username and repository name are required!" -ForegroundColor Red
    exit 1
}

$remoteUrl = "https://github.com/$username/$reponame.git"

# Check if remote already exists
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host ""
    Write-Host "⚠️  Remote 'origin' already exists: $existingRemote" -ForegroundColor Yellow
    $updateRemote = Read-Host "Update to $remoteUrl? (y/n)"
    if ($updateRemote -eq 'y') {
        git remote set-url origin $remoteUrl
        Write-Host "✅ Remote updated" -ForegroundColor Green
    }
} else {
    Write-Host ""
    Write-Host "🔗 Adding remote: $remoteUrl" -ForegroundColor Yellow
    git remote add origin $remoteUrl
    Write-Host "✅ Remote added" -ForegroundColor Green
}

# Stage all files
Write-Host ""
Write-Host "📦 Staging files..." -ForegroundColor Yellow
git add .
Write-Host "✅ Files staged" -ForegroundColor Green

# Commit
Write-Host ""
Write-Host "💾 Creating commit..." -ForegroundColor Yellow
$commitMsg = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "Initial commit - HEY app for Xaloe 💙🇿🇼"
}

git commit -m $commitMsg
Write-Host "✅ Commit created" -ForegroundColor Green

# Set main branch
Write-Host ""
Write-Host "🌿 Setting main branch..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ Branch set to main" -ForegroundColor Green

# Push to GitHub
Write-Host ""
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "⚠️  You may need to enter your GitHub credentials" -ForegroundColor Yellow
Write-Host ""

$pushResult = git push -u origin main 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 NEXT STEPS:" -ForegroundColor Cyan
    Write-Host "==============" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Go to: https://github.com/$username/$reponame" -ForegroundColor White
    Write-Host "2. Click 'Actions' tab" -ForegroundColor White
    Write-Host "3. Watch your APK being built (5-10 minutes)" -ForegroundColor White
    Write-Host "4. Download APK from 'Artifacts' section" -ForegroundColor White
    Write-Host ""
    Write-Host "📱 The APK will be named: HEY-app-debug.zip" -ForegroundColor Yellow
    Write-Host "📦 Unzip it to get app-debug.apk" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "💙 Good luck with Xaloe! 🇿🇼✨" -ForegroundColor Magenta
} else {
    Write-Host ""
    Write-Host "❌ Push failed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common issues:" -ForegroundColor Yellow
    Write-Host "- Make sure you created the repository on GitHub first" -ForegroundColor White
    Write-Host "- Check your GitHub credentials" -ForegroundColor White
    Write-Host "- Repository must exist at: https://github.com/$username/$reponame" -ForegroundColor White
    Write-Host ""
    Write-Host "Error details:" -ForegroundColor Red
    Write-Host $pushResult -ForegroundColor Red
    Write-Host ""
    Write-Host "🔑 GitHub Authentication:" -ForegroundColor Yellow
    Write-Host "If you get authentication errors, you may need a Personal Access Token:" -ForegroundColor White
    Write-Host "1. Go to: https://github.com/settings/tokens" -ForegroundColor White
    Write-Host "2. Generate new token (classic)" -ForegroundColor White
    Write-Host "3. Select 'repo' scope" -ForegroundColor White
    Write-Host "4. Use token as password when pushing" -ForegroundColor White
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
