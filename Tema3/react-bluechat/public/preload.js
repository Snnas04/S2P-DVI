const { contextBridge, ipcRenderer } = require('electron');

ipcRenderer.on('send-ip-address', (event, ip) => {
    console.log("sentIp");
})

// Send message to main process
contextBridge.exposeInMainWorld('appMessages', {
    // Send gesture result to main process
    consoleMessage: (message) => {
        ipcRenderer.send('consoleMessage', message);
    },

    ipcRenderer: ipcRenderer
});

console.log("preload.js loaded");
