import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, off } from 'firebase/database';

const firebaseConfig = {
    databaseURL: "https://spdvi-chat-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Users() {
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
        <div className='chat-content' id="users">
            {usersData ? (
                <div id='users-content'>
                    <h2>Users</h2>
                    <div id="users-list">
                        {usersData.map((userData, index) => (
                            <div
                                className={`chatsBtn ${userData.status ? 'active' : 'inactive'}`}
                                key={index}
                            >
                                {userData.nom}<br/>ip: {userData.ip}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default Users;
