import React from 'react';

import Chat from './chat/chat';
import Users from './chat/users';

// import Config from './config/config';

import './home.css';

function Home() {
  return (
    <div id="home-content">
      <div id="header">
        <h1 id='header-left'>Contacts</h1>
        <h1 id='header-right'>Markitos Chat</h1>
      </div>

      <div id="mid">
        <div id="users">
          <Users />
        </div>
        
        <div id="chat">
          <Chat />
        </div>
        {/* <Config /> */}
      </div>

      <script src="/socket.io/socket.io.js"></script>
      <script src="./client.js"></script>
    </div>
  );
}

export default Home;
