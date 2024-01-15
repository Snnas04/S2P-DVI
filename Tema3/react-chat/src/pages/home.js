import React from 'react';

import Chat from './chat/chat';
import Users from './chat/users';
import Config from './config/config';

import './home.css';

function Home() {
  return (
    <div id="home-content">
      <div id="header">
        <button className='menuBtn' id='header-left'>BlueChat</button>
        <button className='menuBtn' id='header-right'>Settings</button>
      </div>

      <div id="mid">
        <div id="users">
          <Users />
        </div>
        
        <div id="chat">
          <Chat />
        </div>

        <div>
          <Config />
        </div>
      </div>

      <script src="/socket.io/socket.io.js"></script>
      <script src="./client.js"></script>
    </div>
  );
}

export default Home;
