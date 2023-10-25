// Escucha el evento 'DOMContentLoaded', que se dispara cuando el documento HTML se ha cargado completamente
document.addEventListener('DOMContentLoaded', () => {
  // Agrega un evento de envío de formulario al elemento con el ID 'subscriptionForm'
  document.getElementById('subscriptionForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Obtiene los datos del formulario y los convierte en un objeto
    const form = event.target;
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Envía los datos del formulario al proceso principal de Electron a través de 'electronAPI'
    window.electronAPI.sendFormData(formObject);
  });

  // Obtiene referencias a varios elementos del formulario
  const userIdSelect = document.getElementById('userId'); // Se cambió a 'userId'
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const genderSelect = document.getElementById('gender'); // Se cambió a 'gender'
  const messageTextarea = document.getElementById('message');

  // Agrega un evento de cambio al elemento 'userIdSelect'
  userIdSelect.addEventListener('change', (event) => {
    event.preventDefault();

    // Obtiene el valor seleccionado en el campo 'userIdSelect'
    const selectedId = userIdSelect.value;

    if (selectedId) {
      // Realiza una solicitud a una API para obtener datos relacionados con el ID seleccionado
      fetch(`https://jsonplaceholder.typicode.com/users/${selectedId}`)
        .then((response) => response.json())
        .then((data) => {
          // Asigna los valores obtenidos de la API a los campos del formulario
          nameInput.value = data.name; // Cambiado a 'name' en lugar de 'username'
          emailInput.value = ''; // Puedes establecer un valor predeterminado si lo deseas
          genderSelect.value = data.gender;
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    } else {
      // Limpia los campos del formulario si no se selecciona un ID
      nameInput.value = '';
      emailInput.value = '';
      genderSelect.value = ''; // Establece un valor predeterminado para el género, si es necesario
      messageTextarea.value = ''; // Limpia el campo de descripción
    }
  });
});
