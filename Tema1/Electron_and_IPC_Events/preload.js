const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openModal: () => {
    ipcRenderer.send('open-modal');
  },

  sendFormData: (formData) => {
    ipcRenderer.send('form-data', formData);
  },
});

console.log('Preload script loaded successfully');