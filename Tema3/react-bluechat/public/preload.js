const { contextBridge, ipcRenderer } = require('electron');

// Send message to main process
contextBridge.exposeInMainWorld('appMessages', {
    ipcRenderer: ipcRenderer
});

console.log("preload.js loaded");
