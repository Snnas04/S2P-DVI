import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

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
                setUsersData(dataSnapshot.val());
            } catch (error) {
                console.error('Error fetching data from Firebase:', error);
                setUsersData(null);
            }
        };

        fetchData();
    }, []);

    console.log(usersData);

    return (
        <div className='chat-content' id="users">
            {usersData ? (
                <div>
                    <h2>Users</h2>
                    <ul id="users-list">
                        {Object.values(usersData).map((userData, index) => (
                            <li key={index}>
                                {userData.ip}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default Users;
