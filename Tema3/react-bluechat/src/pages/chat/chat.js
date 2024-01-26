import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import './chat.css';

const firebaseConfig = {
    databaseURL: "https://spdvi-chat-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Chat() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [usersData, setUsersData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataRef = ref(db, 'chatUsers');
                const dataSnapshot = await get(dataRef);
                const data = dataSnapshot.val();

                if (data) {
                    const chatArray = Object.keys(data).map(usuarioId => ({
                        nom: usuarioId.toUpperCase(),
                        ...data[usuarioId],
                    }));
                    setUsersData(chatArray);
                } else {
                    setUsersData([]);
                }
            } catch (error) {
                console.error('Error fetching data from Firebase:', error);
                setUsersData(null);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="chat-content">
            {usersData ? (
                <div id='users-content'>    
                    <h2>Users</h2>
                    <div id="users-list">
                        <h3>Connected</h3>
                        {usersData.filter(userData => userData.status).map((userData, index) => (
                            <div
                                className={`chatsBtn ${userData.status ? 'active' : 'inactive'}`}
                                key={index}
                                onClick={() => setSelectedUser(userData)}
                            >
                                {userData.nom}
                            </div>
                        ))}

                        <h3>Disconnected</h3>
                        {usersData.filter(userData => !userData.status).map((userData, index) => (
                            <div
                                className={`chatsBtn ${userData.status ? 'active' : 'inactive'}`}
                                key={index}
                                onClick={() => setSelectedUser(userData)}
                            >
                                {userData.nom}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading data...</p>
            )}

            <div id="userSelected">
                {selectedUser ? (
                    <div>
                        <h2>{selectedUser.nom}</h2>
                        <p>Status: {selectedUser.status ? 'Connected' : 'Disconnected'}</p>
                    </div>
                ) : (
                    <p id='no-user-selected'>No user selected</p>
                )}
            </div>
            <div className='chat-content' id="messages"></div>

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
