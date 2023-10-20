const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openModal: () => {
    ipcRenderer.send('open-modal');
  }
});
