const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('appComunication', {
    sendGestureResult: (gestureType) => {
        ipcRenderer.send('sendGestureResult', gestureType);
    },
    goBack: () => {
        ipcRenderer.send('goBack');
      },
    
});
