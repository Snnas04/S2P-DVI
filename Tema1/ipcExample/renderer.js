// This file is required by the indexMainWindow.html file and will
// be executed in the renderer process for that window.
// Webpreferences: contextIsolation=false and nodeIntegration=True
// that's a BAD PRACTICE!!

const { ipcRenderer } = require('electron')

const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
setButton.addEventListener('click', () => {
  const title = titleInput.value;
  console.log("Sending a message using IPC");
  ipcRenderer.send('open-child-window', title);
})


