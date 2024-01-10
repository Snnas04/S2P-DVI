const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Manejar el evento de asignación de nombre
    socket.on('set username', (username) => {
        socket.username = username;
        console.log(`User '${username}' connected`);

        // Emitir un mensaje cuando alguien se conecta
        io.emit('user connected', `${username} has connected`);
    });

    socket.on('disconnect', () => {
        console.log(`User '${socket.username}' disconnected`);
        io.emit('user disconnected', `${socket.username} has disconnected`);
    });

    socket.on('chat message', (msg) => {
        // Incluir el nombre de usuario en el mensaje
        const messageWithUsername = `${socket.username}: ${msg}`;
        io.emit('chat message', messageWithUsername);
    });
});

const servidor = http.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

module.exports = { servidor };