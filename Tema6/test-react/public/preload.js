const { contextBridge, ipcRenderer } = require('electron');

// Send message to main process
contextBridge.exposeInMainWorld('appMessages', {
    // Send gesture result to main process
    consoleMessage: (message) => {
        ipcRenderer.send('consoleMessage', message);
    },
});

console.log("preload.js loaded");
