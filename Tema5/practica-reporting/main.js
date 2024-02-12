const { app, BrowserWindow, ipcMain } = require('electron')
const { getTop15QueryData, getTop5MostValuableQueryData, getTop5LessValuableQueryData } = require('./db.js')

const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})
