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

  ipcMain.handle('getTop15QueryData', async (event) => {
    const data = await getTop15QueryData();
    return data;
  });
  
  ipcMain.handle('getTop5MostValuableQueryData', async (event) => {
    const data = await getTop5MostValuableQueryData();
    return data;
  });
  
  ipcMain.handle('getTop5LessValuableQueryData', async (event) => {
    const data = await getTop5LessValuableQueryData();
    return data;
  });

  ipcMain.handle('getQueryDataByYear', async (event, year) => {
    const data = await getQueryDataByYear(year);
    return data;
  });
})
