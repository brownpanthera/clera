#!/usr/bin/env node

const { spawnSync } = require('child_process');

function clearTerminal() {
    const command = process.platform === 'win32' ? 'cmd' : 'clear';
    const args = process.platform === 'win32' ? ['/c', 'cls'] : [];
    console.log(command)
    console.log(args)
    
    // spawnSync(command, args, { stdio: 'inherit' });
}

clearTerminal();