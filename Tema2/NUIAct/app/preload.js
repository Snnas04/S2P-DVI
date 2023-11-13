const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    cameraButton: () => ipcRenderer.send('cameraButton-status'),
});
