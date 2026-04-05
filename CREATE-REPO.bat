@echo off
echo ========================================
echo CREATING GITHUB REPOSITORY
echo ========================================
echo.
echo STEP 1: Create repository on GitHub
echo.
echo 1. Open your browser and go to: https://github.com/new
echo 2. Repository name: lacamille-theme
echo 3. Description: Luxury Egyptian lingerie Shopify theme
echo 4. Select PUBLIC
echo 5. DO NOT check any of the boxes (README, gitignore, license)
echo 6. Click "Create repository"
echo.
echo PRESS ANY KEY when you've created the repository...
pause > nul
echo.
echo STEP 2: Pushing code to GitHub...
echo.
cd /d C:\Users\Aslaan\la-camille-theme
git remote add origin https://github.com/Aslaanovv/lacamille-theme.git
git branch -M main
git push -u origin main
echo.
echo ========================================
echo SUCCESS! Your repository is live at:
echo https://github.com/Aslaanovv/lacamille-theme
echo ========================================
echo.
pause
