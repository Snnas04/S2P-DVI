const { contextBridge, ipcRenderer } = require('electron');

// Send message to main process
contextBridge.exposeInMainWorld('appMessages', {
    // Send gesture result to main process
    sendGestureResult: (gestureType) => {
        ipcRenderer.send('sendGestureResult', gestureType);
    },
    
    // Send voice result to main process
    sendVoiceResult: (voiceType) => {
        ipcRenderer.send('sendVoiceResult', voiceType);
    },

    // Go back to main window
    goBack: () => {
        ipcRenderer.send('goBack');
      },
    
});

console.log("preload.js loaded");
