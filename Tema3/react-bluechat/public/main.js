const { app, BrowserWindow, ipcMain } = require('electron');
const os = require('os');

let win;

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadFile('index.js');

    win.webContents.on('did-finish-load', () => {
        const networkInterfaces = os.networkInterfaces();
        const ipAddresses = [];

        Object.keys(networkInterfaces).forEach((key) => {
            networkInterfaces[key].forEach((iface) => {
                if (iface.family === 'IPv4' && !iface.internal) {
                    ipAddresses.push(iface.address);
                }
            });
        });

        const lastIPAddress = ipAddresses[ipAddresses.length - 1];

        // Enviar la dirección IP al proceso de renderizado
        win.webContents.send('send-ip-address', lastIPAddress);
    });

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

// Agregar manejo para la comunicación entre procesos
ipcMain.on('get-ip-address', (event) => {
    const networkInterfaces = os.networkInterfaces();
    const ipAddresses = [];

    Object.keys(networkInterfaces).forEach((key) => {
        networkInterfaces[key].forEach((iface) => {
            if (iface.family === 'IPv4' && !iface.internal) {
                ipAddresses.push(iface.address);
            }
        });
    });

    const lastIPAddress = ipAddresses[ipAddresses.length - 1];

    // Enviar la dirección IP al proceso de renderizado
    event.reply('send-ip-address', lastIPAddress);
});
