const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getTop15QueryData: () => ipcRenderer.invoke('getTop15QueryData'),
  getTop5MostValuableQueryData: () => ipcRenderer.invoke('getTop5MostValuableQueryData'),
  getTop5LessValuableQueryData: () => ipcRenderer.invoke('getTop5LessValuableQueryData')
});

console.log('preload.js loaded!');
