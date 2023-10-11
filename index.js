#!/usr/bin/env node
const os = require('os');
const { execSync } = require('child_process');

function clearTerminal() {
    const isWindows = os.platform() === 'win32';
    const command = isWindows ? 'cls' : 'clear';
    execSync(command, { stdio: 'inherit' });
}

clearTerminal();