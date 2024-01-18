import './config.css'

function Config() {
    return (
        <div id="config-content">
            <h3>Set username</h3>
            <div className="set-info">
                <input id="user-input" autoComplete="off" autoFocus />
                <button id="user-button">Set</button>
            </div>

            <h3>Set ip</h3>
            <div className="set-info">
                <input id="ip-input" autoComplete="off" />
                <button id="ip-button">Set</button>
            </div>

            <h3>Set last connection</h3>
            <div className="set-info">
                <input className="lastconn-input" id='data' autoComplete="off" />
                <input className="lastconn-input" id='time' autoComplete="off" />
                <button id="lastconn-button">Set</button>
            </div>

            <h3>Set status</h3>
            <div className="set-info">
                <label htmlFor="status-selector">Select Status: </label>
                <select id="status-selector">
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>
            </div>
        
            <script src="/socket.io/socket.io.js"></script>
            <script src="./client.js"></script>
        </div>
    );
}

export default Config;