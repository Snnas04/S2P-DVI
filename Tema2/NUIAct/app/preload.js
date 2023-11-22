const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openPageOne: () => ipcRenderer.send('openPageOne'),
    openPageTwo: () => ipcRenderer.send('openPageTwo'),
    openPageTree: () => ipcRenderer.send('openPageTree'),
});
