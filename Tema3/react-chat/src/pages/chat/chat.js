import React from 'react';

import './chat.css'

function Chat() {
    return (
        <div id="chat-content">
            <div className='chat-content' id="messages">message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/>message test<br/></div>

            <form id="textbar">
                <input id="input" autoComplete="off" autoFocus />
                <button>Send</button>
            </form>
        
            <script src="/socket.io/socket.io.js"></script>
            <script src="./client.js"></script>
        </div>
    );
}

export default Chat;
