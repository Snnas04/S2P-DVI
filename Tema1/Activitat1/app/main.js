const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1440,
        height: 1080
    })

    win.loadFile('index.html')
    }

app.whenReady().then(() => {
    createWindow()
})