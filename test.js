const { spawn } = require('child_process')

try {


let CONFIG = {app: {}}
CONFIG.app.running = new Promise((resolve, reject) => {
    const cmd = spawn("ls", [], {cwd: '~', stdio: 'inherit'})

    cmd.on('error', (err) => {
        console.error(`PROXY user app server error: ${err}`);
        reject(err)
    })

    cmd.on('exit', (code) => {
        console.error(`PROXY user app server exited with code: ${code}`);
        resolve({code})
    })
})
}
catch (err) {
    return next(err)
}
