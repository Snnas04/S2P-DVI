const { app, BrowserWindow, ipcMain } = require('electron');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.setMenu(null);

    win.loadFile('index.html');

    win.webContents.openDevTools();

    ipcMain.on('openPageOne', () => {
        win.loadFile('app/windows/pageOne.html');
        console.log('openPageOne');
    });

    win.on('closed', () => {
        win = null; // Update the existing variable
    });
}

app.whenReady().then(() => {
    createWindow();
});
