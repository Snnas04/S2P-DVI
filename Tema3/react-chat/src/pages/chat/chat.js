import React from 'react';


import './chat.css'

function Chat() {
    return (
        <div id="chat-content">
            <div id="messages">test</div>

            <form id="form">
                <input id="input" autoComplete="off" autoFocus />
                <button>Send</button>
            </form>
        
            <script src="/socket.io/socket.io.js"></script>
            <script src="./client.js"></script>
        </div>
    );
}

export default Chat;
