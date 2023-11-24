const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
var win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './app/preload.js'),
        }
    });


    // Set the background and save it in a variable
    win.setBackgroundColor('#F5F5F5');
    var theme = win.getBackgroundColor();

    // Hide the menu bar
    win.setMenu(null);

    win.loadFile('index.html');

    // win.webContents.openDevTools();

    /****************************************
    * Receive message from renderer process *
    ****************************************/
    // load the main window
    ipcMain.on('goBack', () => {
        win.loadFile('index.html');
    });

    // One action for each gesture
    ipcMain.on('sendGestureResult', (event, gestureType) => {
        switch (gestureType) {
            case 'one':
                win.loadFile('./app/windows/pageExtra.html');
                break;
            case 'two':
                changeTheme();
                break;
            case 'tree':
                win.close();
                break;
            case 'hand':
                changeDevTools();
                break;
        }
    });

    const changeTheme = () => {
        if (theme == '#F5F5F5'){
            win.setBackgroundColor('#121416');
            theme = '#121416';
        }
        else if (theme == '#121416'){
            win.setBackgroundColor('#F5F5F5');
            theme = '#F5F5F5';
        }
    }

    const changeDevTools = () => {
        if (win.webContents.isDevToolsOpened()){
            win.webContents.closeDevTools();
        }
        else {
            win.webContents.openDevTools();
        }
    }

    win.on('closed', () => {
        win = null; // Update the existing variable
    });
}

app.whenReady().then(() => {
    createWindow();
});
