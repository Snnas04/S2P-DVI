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

  const profilesFunction = function () {
    const idUser = document.getElementById('userId').value;

    if (idUser) {
        fetch('https://jsonplaceholder.typicode.com/users/${idUser}')
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => {
              console.error("Error al obtener datos de la API:", error);
          });
    } else {
        // Limpiar los campos del formulario si no se selecciona un ID
        nameInput.value = "";
    }
}

  window.electronAPI.profilesFunction = profilesFunction;
})
