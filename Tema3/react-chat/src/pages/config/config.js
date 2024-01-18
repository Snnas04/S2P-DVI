import React from 'react';

import './config.css'

function Config() {
    return (
        <div id="config-content">
            <h3>Set username</h3>
            <div className="set-info">
                <input id="user-input" autoComplete="off" autoFocus placeholder='marcsans' />
                <button id="user-button">Set</button>
            </div>

            <h3>Set ip</h3>
            <div className="set-info">
                <input id="ip-input" autoComplete="off" placeholder='192.168.1.1' />
                <button id="ip-button">Set</button>
            </div>

            <h3>Set last connection</h3>
            <div className="set-info">
                <input className="lastconn-input" id='data' autoComplete="off" placeholder='2024/01/01' />
                <input className="lastconn-input" id='time' autoComplete="off" placeholder='00:00:00' />
                <button id="lastconn-button">Set</button>
            </div>

            <h3>Set status</h3>
            <div className="set-info">
                <label htmlFor="status-selector">Select Your Status: </label>
                <select id="status-selector">
                    <option value="online">ONLINE</option>
                    <option value="offline">OFFLINE</option>
                </select>
            </div>
        
            <script src="/socket.io/socket.io.js"></script>
            <script src="./client.js"></script>
        </div>
    );
}



export default Config;