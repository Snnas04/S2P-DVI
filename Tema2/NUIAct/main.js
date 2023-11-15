const { app, BrowserWindow, ipcMain } = require('electron');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.setMenu(null);

    win.loadFile('index.html');

    ipcMain.on('cameraButton-status', (event, arg) => {
        console.log(arg);
        // Send a response back to the renderer process
        event.sender.send('cameraButton-status-response', arg);
    });

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null; // Update the existing variable
    });
}

app.whenReady().then(() => {
    createWindow();
});
