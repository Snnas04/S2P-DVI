import React, { useState } from 'react';

import Chat from './chat/chat';
import Users from './chat/users';
import Config from './config/config';

import './home.css';

function Home() {
  // Estado local para controlar qué componente mostrar
  const [activeComponent, setActiveComponent] = useState('Users');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div id="home-content">
      <div id="header">
        <button className='menuBtn' id='header-left' onClick={() => handleButtonClick('BlueChat')}>
          BlueChat
        </button>
        <button className='menuBtn' id='header-right' onClick={() => handleButtonClick('Config')}>
          Settings
        </button>
      </div>

      <div id="mid">
        {/* Mostrar Users y Chat por defecto */}
        {activeComponent === 'BlueChat' && (
          <div id="users">
            <Users />
          </div>
        )}

        {activeComponent === 'BlueChat' && (
          <div id="chat">
            <Chat />
          </div>
        )}

        {/* Mostrar Config cuando se hace clic en 'Settings' */}
        {activeComponent === 'Config' && (
          <div>
            <Config />
          </div>
        )}
      </div>

      <script src="/socket.io/socket.io.js"></script>
      <script src="./client.js"></script>
    </div>
  );
}

export default Home;
