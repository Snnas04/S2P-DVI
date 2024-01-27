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
            <div className='chat-content' id='users-list'>
                {usersData ? (
                    <div>    
                        <h2>Users</h2>
                        <div>
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
            </div>

            <div className='chat-content' id='message-content'>
                <div id="userSelected">
                    {selectedUser ? (
                        <div>
                            <h3>{selectedUser.nom} - {selectedUser.status ? 'Connected' : 'Disconnected'}</h3>
                        </div>
                    ) : (
                        <h3 id='no-user-selected'>No user selected</h3>
                    )}
                </div>
                <div id="messages"></div>

                <form id="textbar">
                    <input 
                        id="input" 
                        autoComplete="off" 
                        autoFocus 
                        placeholder='Enter your message ...' 
                    />
                    <button>Send</button>
                </form>
            </div>
        
            <script src="/socket.io/socket.io.js"></script>
            <script src="./client.js"></script>
        </div>
    );
}

export default Chat;
