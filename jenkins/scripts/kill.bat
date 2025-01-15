@echo off

echo The following command terminates the "npm start" process using its PID
echo (written to ".pidfile"), all of which were conducted when "deliver.bat"
echo was executed.
echo on

REM Verify the .pidfile exists
if not exist .pidfile (
    echo "Error: .pidfile not found."
    exit /b 1
)

REM Terminate the process using the PID from ".pidfile"
for /f "tokens=* usebackq" %%x in (".pidfile") do taskkill /PID %%x /F

echo off
