const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    getTop10Data: () => ipcRenderer.invoke('get-top10'),
    getNumberOfUnitsSoldData: () => ipcRenderer.invoke('get-number-of-units-sold')
});

console.log('preload.js loaded');
