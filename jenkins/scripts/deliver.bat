
echo The following "npm" command builds your Node.js/React application for
echo production in the local "build" directory (i.e. within the
echo "C:\ProgramData\Jenkins\.jenkins\workspace\simple-node-js-react-npm-app" directory),
echo correctly bundles React in production mode and optimizes the build for
echo the best performance.
echo on
npm run build
echo off

echo The following "npm" command runs your Node.js/React application in
echo development mode and makes the application available for web browsing.
echo The "npm start" command has a trailing ampersand so that the command runs
echo as a background process (i.e. asynchronously). Otherwise, this command
echo can pause running builds of CI/CD applications indefinitely. "npm start"
echo is followed by another command that retrieves the process ID (PID) value
echo of the previously run process (i.e. "npm start") and writes this value to
echo the file ".pidfile".
echo on
start /B npm start
timeout /T 5
for /f "tokens=2 delims=," %%i in ('tasklist /fi "imagename eq node.exe" /fo csv') do (
    echo %%i > .pidfile
    echo Captured PID: %%i
    goto end
)
:end
echo off

if not exist .pidfile (
    echo "Error: .pidfile not found."
    exit /b 1
)

echo Now...
echo Visit http://localhost:3000 to see your Node.js/React application in action.
echo (This is why you specified the "args ''-p 3000:3000''" parameter when you
echo created your initial Pipeline as a Jenkinsfile.)
