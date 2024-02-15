const {
  app,
  BrowserWindow,
  ipcMain,
  shell,
  Menu
} = require('electron')
const fs = require('fs')
const {
  getTop15QueryData,
  getTop5MostValuableQueryData,
  getTop5LessValuableQueryData,
  getTop15QueryDataYear,
  getTop5MostValuableQueryDataYear,
  getTop5LessValuableQueryDataYear
} = require('./db.js')

const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
        width: 100,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true
        }
    })

    win.loadFile('index.html')

    const menu = Menu.buildFromTemplate([
          {
            label: 'File',
            submenu: [
                {
                    label: 'Export to PDF',
                    click: async () => {
                        const mainWindow = BrowserWindow.getFocusedWindow();
                        mainWindow.webContents.printToPDF({
                            pageSize: 'A4'
                        }).then(data => {
                            fs.writeFileSync('print.pdf', data);
                            shell.openPath('print.pdf');
                        }).catch(error => {
                            console.log(error);
                        });
                    }
                }
            ]
        },
        {
            label: 'Pages',
            submenu: [
                {
                  label: 'Home',
                  click: async () => {
                      win.loadFile('index.html');
                  }
                },
                {
                    label: 'Sales Reporting',
                    click: async () => {
                        win.loadFile('reports.html');
                    }
                },
            ]
        }
    ]);

    Menu.setApplicationMenu(menu);
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

  ipcMain.handle('getTop15QueryDataYear', async (event, year) => {
    const data = await getTop15QueryDataYear(year);
    return data;
  });

  ipcMain.handle('getTop5MostValuableQueryDataYear', async (event, year) => {
    const data = await getTop5MostValuableQueryDataYear(year);
    return data;
  });

  ipcMain.handle('getTop5LessValuableQueryDataYear', async (event, year) => {
    const data = await getTop5LessValuableQueryDataYear(year);
    return data;
  });

  ipcMain.handle('exportToPdf', async (event) => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    mainWindow.webContents.printToPDF({
        pageSize: 'A4'
    }).then(data => {
        fs.writeFileSync('print.pdf', data);
        shell.openPath('print.pdf');
    }).catch(error => {
        console.log(error);
    });
  });
})
