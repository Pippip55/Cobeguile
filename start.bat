@echo off
cd /d "%~dp0"
if not exist node_modules\electron (
  echo Installing... first run only
  call npm install
)
call npm start
