@echo off
cd /d D:\MEET

git add .
git commit -m "Auto update"
git push origin main

echo.
echo ==========================
echo GitHub Push Completed!
echo ==========================
pause
