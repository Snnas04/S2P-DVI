const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openModal: () => {
    ipcRenderer.send('open-modal');
  },

  submitForm: (formData) => {
    ipcRenderer.send('send-form-data', formData);
  },
});
