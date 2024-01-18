import React, { useState } from 'react';

import './config.css';

function Config() {
    // Estados para almacenar los valores de los inputs y el selector
    const [userName, setUserName] = useState('');
    const [ip, setIp] = useState('');
    const [lastConnectionDate, setLastConnectionDate] = useState('');
    const [lastConnectionTime, setLastConnectionTime] = useState('');
    const [status, setStatus] = useState('online'); // Valor predeterminado: online

    // Función para manejar el clic en el botón "Set" al final del formulario
    const handleSetClick = () => {
        // Realizar el console log de los datos guardados
        console.log('UserName:', userName);
        console.log('IP:', ip);
        console.log('Last Connection:', `${lastConnectionDate} ${lastConnectionTime}`);
        console.log('Status:', status);

        // Aquí puedes realizar cualquier otra acción con los datos, como enviarlos a un servidor, etc.
    };

    return (
        <div id="config-content">
            <h3>Set UserName</h3>
            <div className="set-info">
                <input
                    id="user-input"
                    autoComplete="off"
                    autoFocus
                    placeholder='marcsans'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <h3>Set IP</h3>
            <div className="set-info">
                <input
                    id="ip-input"
                    autoComplete="off"
                    placeholder='192.168.1.1'
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                />
            </div>

            <h3>Set Last Connection</h3>
            <div className="set-info">
                <input
                    className="lastconn-input"
                    id='data'
                    autoComplete="off"
                    placeholder='2024/01/01'
                    value={lastConnectionDate}
                    onChange={(e) => setLastConnectionDate(e.target.value)}
                />
                <input
                    className="lastconn-input"
                    id='time'
                    autoComplete="off"
                    placeholder='00:00:00'
                    value={lastConnectionTime}
                    onChange={(e) => setLastConnectionTime(e.target.value)}
                />
            </div>

            <h3>Set Status</h3>
            <div className="set-info">
                <label htmlFor="status-selector">Select Your Status: </label>
                <select
                    id="status-selector"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="online">ONLINE</option>
                    <option value="offline">OFFLINE</option>
                </select>
            </div>

            <button onClick={handleSetClick}>Set</button>
        </div>
    );
}

export default Config;
