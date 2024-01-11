const socket = io();

    // Pedir al usuario que ingrese su nombre al conectarse
    const username = 'user';
    socket.emit('set username', username);

    socket.on('user connected', (username) => {
      const item = document.createElement('li');
      item.textContent = `${username}`;
      item.classList.add('user-connected'); // Agregar clase para estilo específico
      messages.appendChild(item);
    });

    socket.on('user disconnected', (username) => {
      const item = document.createElement('li');
      item.textContent = `${username}`;
      item.classList.add('user-disconnected'); // Agregar clase para estilo específico
      messages.appendChild(item);
    });


    const messages = document.getElementById('messages');
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const setUser = document.getElementById("user-button");

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value) {
        socket.emit('chat message', `${input.value}`);
        input.value = '';
      }
    });

    setUser.addEventListener('click', (e) => {
      e.preventDefault();
      const newUsername = document.getElementById("username-input").value;

      if (newUsername) {
        socket.emit('set username', newUsername);
        document.getElementById("username-input").value = '';
      }
    });

    socket.on('chat message', (msg) => {
      const item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });