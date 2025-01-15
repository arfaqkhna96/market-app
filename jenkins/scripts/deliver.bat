@echo off

echo Building the application...
npm run build
if %ERRORLEVEL% NEQ 0 (
    echo "Build failed. Exiting script."
    exit /b 1
)

echo Starting the application...
start /B npm start
timeout /T 5

echo Now...
echo Visit http://localhost:3000 to see your Node.js/React application in action.
echo (This is why you specified the "args ''-p 3000:3000''" parameter when you
echo created your initial Pipeline as a Jenkinsfile.)
