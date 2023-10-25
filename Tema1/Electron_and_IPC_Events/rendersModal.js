document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton')

  submitButton.addEventListener('click', async () => {
    try {
      const { ipcRenderer } = require('electron')
      await ipcRenderer.invoke('form-submit', { name, email, phone, gender, message })
      console.log('Form submitted successfully')
    } catch (error) {
      console.error('An error occurred:', error)
      // Handle the error here
    }
  })
})