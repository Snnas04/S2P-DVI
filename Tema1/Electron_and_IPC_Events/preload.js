// Importa los módulos necesarios de Electron
const { contextBridge, ipcRenderer } = require('electron');

// Expone funciones al mundo del proceso de renderizado a través del contexto del puente
contextBridge.exposeInMainWorld('electronAPI', {
  // Función para abrir una ventana modal
  openModal: () => {
    ipcRenderer.send('open-modal');
  },

  // Función para enviar datos del formulario al proceso principal
  sendFormData: (formData) => {
    ipcRenderer.send('form-data', formData);
  },

  // Función para realizar una acción relacionada con perfiles (debes implementarla en el proceso principal)
  profilesFunction: () => {
    ipcRenderer.send('profilesFunction');
  },
});
