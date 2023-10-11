const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1290,
        height: 920
    })

    win.loadFile('index.html')
    }

app.whenReady().then(() => {
    createWindow()
})