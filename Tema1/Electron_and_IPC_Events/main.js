const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let modalWindow = null;

function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      width: 800,
      height: 600,
      nodeIntegration: true,
    }
  });

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
  });

  mainWindow.loadFile('index.html');

  ipcMain.on('form-submit', (event, formData) => {
    console.log(formData)

    event.sender.send('form-data', formData)
  })

  ipcMain.on('open-modal', () => {
    if (!modalWindow) {
      modalWindow = new BrowserWindow({
        parent: mainWindow,
        width: 800,
        height: 685,
        modal: true,
        show: false,
        webPreferences: {
          nodeIntegration: true,
        }
      });

      modalWindow.loadFile('modal.html');

      modalWindow.once('ready-to-show', () => {
        modalWindow.show();
        console.log('Form opened');
      });
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
