#!/usr/bin/env node
const { spawnSync } = require('child_process');

function clearTerminal() {
    const command = process.platform === 'win32' ? 'cls' : 'clear';
    spawnSync(command, { stdio: 'inherit' });
}

clearTerminal();
