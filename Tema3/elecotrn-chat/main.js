const { app, BrowserWindow } = require('electron');
const servidor = require('./server');


function createWindow() {
    // Create the browser window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load the index.html file
    win.loadURL('http://localhost:3000');
    // win.loadFile('./public/index.html');

    // Open the DevTools
    // win.webContents.openDevTools();
}

// When the app is ready, create the window
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
