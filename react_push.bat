@echo off
cd /d "%~dp0"

echo ==============================
echo   GitHub Auto Push
echo ==============================

git add .
git commit -m "Auto update"
git push

echo.
echo ==============================
echo   Done!
echo ==============================
pause
