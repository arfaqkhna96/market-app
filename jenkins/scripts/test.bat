@echo off

echo The following "npm" command installs the "react-scripts" package into the local
echo "node_modules" directory and saves it as a dependency.
echo on
npm install react-scripts --save
echo off

echo Listing installed packages to verify "react-scripts" installation.
echo on
npm ls react-scripts
echo off

echo The following "npm" command tests that your simple Node.js/React
echo application renders satisfactorily. This command actually invokes the test
echo runner Jest (https://facebook.github.io/jest/).
echo on
npm test --passWithNoTests

REM Check the exit code of the npm test command
if %ERRORLEVEL% NEQ 0 (
    echo Tests failed.
    exit /b 1
) else (
    echo Tests passed.
    exit /b 0
)

echo off
