@echo off
title Electronic Course - Localhost Server

:: Change directory to script folder
cd /d "%~dp0"

set PORT=8000

echo ======================================================
echo    Electronic Web Page - Localhost Server
echo ======================================================
echo.
echo [*] Directory: %CD%
echo [*] URL: http://localhost:%PORT%
echo [*] Opening browser at http://localhost:%PORT% ...
echo [*] Press Ctrl+C in this window to stop the server.
echo ======================================================
echo.

:: Open default browser after 1 second delay
start "" cmd /c "timeout /t 1 /nobreak >nul & start http://localhost:%PORT%"

:: Check for Python
where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Starting Python HTTP Server on port %PORT%...
    python -m http.server %PORT%
    goto END
)

:: Check for py launcher
where py >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Starting Python (py launcher) on port %PORT%...
    py -m http.server %PORT%
    goto END
)

:: Check for PHP
where php >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Starting PHP Built-in Server on port %PORT%...
    php -S localhost:%PORT%
    goto END
)

:: Check for Node.js
where npx >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Starting Node.js (npx serve) on port %PORT%...
    npx serve -l %PORT%
    goto END
)

echo [ERROR] No Python, PHP, or Node.js runtime found!
echo Please install Python from https://www.python.org/
pause

:END
