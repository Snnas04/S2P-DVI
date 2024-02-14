const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getTop15QueryData: () => ipcRenderer.invoke('getTop15QueryData'),
  getTop5MostValuableQueryData: () => ipcRenderer.invoke('getTop5MostValuableQueryData'),
  getTop5LessValuableQueryData: () => ipcRenderer.invoke('getTop5LessValuableQueryData'),

  getTop15QueryDataYear: (year) => ipcRenderer.invoke('getTop15QueryDataYear', year),
  getTop5MostValuableQueryDataYear: (year) => ipcRenderer.invoke('getTop5MostValuableQueryDataYear', year),
  getTop5LessValuableQueryDataYear: (year) => ipcRenderer.invoke('getTop5LessValuableQueryDataYear', year),

  exportToPdf: () => ipcRenderer.invoke('exportToPdf')
});

console.log('preload.js loaded!');
