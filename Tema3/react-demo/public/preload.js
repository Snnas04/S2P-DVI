const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('appMessage', {
    sendOpenLink: (link) => ipcRenderer.send('openLink', link)
});