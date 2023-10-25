const { contextBridge, ipcRenderer } = require('electron');

// Allow the renderer process to use these methods safely
contextBridge.exposeInMainWorld('electronAPI', {
  openModal: () => {
    ipcRenderer.send('open-modal');
  },

  formSubmit: (formData) => {
    ipcRenderer.send('form-submit', formData);
  },

  // Add this method to receive the form data from the main process
  receiveFormData: (callback) => {
    ipcRenderer.on('form-data', (event, formData) => {
      callback(formData);
    });
  }
});

// Call the electronAPI.receiveFormData method to receive the form data
electronAPI.receiveFormData((formData) => {
  // Display the form data in the modal
  const nameElement = document.getElementById('nameValue')
  const emailElement = document.getElementById('emailValue')
  const phoneElement = document.getElementById('phoneValue')
  const genderElement = document.getElementById('genderValue')
  const messageElement = document.getElementById('messageValue')

  nameElement.textContent = formData.name
  emailElement.textContent = formData.email
  phoneElement.textContent = formData.phone
  genderElement.textContent = formData.gender
  messageElement.textContent = formData.message
})