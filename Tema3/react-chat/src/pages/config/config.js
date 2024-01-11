import './config.css'

function Config() {
    return (
        <div id="config-content">
            <div id="set-username">
                <input id="username-input" autoComplete="off" autoFocus />
                <button id="user-button">Set Username</button>
            </div>
        
            <script src="/socket.io/socket.io.js"></script>
            <script src="./client.js"></script>
        </div>
    );
}

export default Config;