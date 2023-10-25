document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('subscriptionForm').addEventListener('submit', (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const formObject = {};
      formData.forEach((value, key) => {
          formObject[key] = value;
      });

      // Send the form data to the main process
      window.electronAPI.sendFormData(formObject);
  });
})
