const { app, BrowserWindow, ipcMain } = require('electron');
const { getTop10QueryData, getNumberOfUnitsSoldQueryData } = require('./db');

const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    ipcMain.handle('get-top10', async () => {
        try {
            const data = await getTop10QueryData();
            return data;
        } catch (err) {
            console.error(err);
        }
    });

    ipcMain.handle('get-number-of-units-sold', async () => {
        try {
            const data = await getNumberOfUnitsSoldQueryData();
            return data;
        } catch (err) {
            console.error(err);
        }
    });
});
