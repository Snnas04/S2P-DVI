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

  const form = document.getElementById('subscriptionForm');
  const userIdSelect = document.getElementById('userId'); // Cambiado a userId
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const genderSelect = document.getElementById('gender'); // Cambiado a gender
  const messageTextarea = document.getElementById('message');

  userIdSelect.addEventListener('change', (event) => {
    event.preventDefault();

    const selectedId = userIdSelect.value;

    if (selectedId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${selectedId}`)
        .then((response) => response.json())
        .then((data) => {
          // Asignar los valores obtenidos de la API a los campos del formulario
          nameInput.value = data.name; // Cambiado a 'name' en lugar de 'username'
          emailInput.value = ''; // Puedes establecer un valor predeterminado si lo deseas
          genderSelect.value = data.gender;
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    } else {
      // Limpiar los campos del formulario si no se selecciona un ID
      nameInput.value = '';
      emailInput.value = '';
      genderSelect.value = ''; // Establece un valor predeterminado para el género, si es necesario
      messageTextarea.value = ''; // Limpiar el campo de descripción
    }
  });
});
