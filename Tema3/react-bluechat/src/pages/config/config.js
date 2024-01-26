import React, { useState } from 'react';
import writeUserData  from '../../firebase/sendData';
import './config.css';

function Config() {
    // Obtener la fecha y hora actuales
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0];
    const currentTimeString = currentDate.toTimeString().split(' ')[0];

    // Estados para almacenar los valores de los inputs y el selector
    const [userName, setUserName] = useState('marcsans');
    const [ip, setIp] = useState('');
    const [lastConnectionDate, setLastConnectionDate] = useState(currentDateString);
    const [lastConnectionTime, setLastConnectionTime] = useState(currentTimeString);
    const [status, setStatus] = useState('online'); // Valor predeterminado: online

    
    const handleSetClick = () => {
        // Realizar el console log de los datos guardados
        console.log('UserName:', userName);
        console.log('IP:', ip);
        console.log('Last Connection:', `${lastConnectionDate} ${lastConnectionTime}`);
        console.log('Status:', status === 'online' ? true : false);

        // Llamar a la función writeUserData con los datos necesarios
        writeUserData(userName, ip, { date: lastConnectionDate, time: lastConnectionTime }, status === 'online' ? true : false);
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
                    onChange={(e) => setIp()}
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
                <select
                    id="status-selector"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="online">ONLINE</option>
                    <option value="offline">OFFLINE</option>
                </select>
            </div>

            <button id='sendBtn' onClick={handleSetClick}>Set</button>
        </div>
    );
}

export default Config;
