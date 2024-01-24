// sendData.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://spdvi-chat-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

function writeUserData(userId, ip, lastConnectionTime, status) {
    const db = getDatabase(app);
    set(ref(db, 'chatUsers/' + userId), {
        ip: ip,
        lastConnectionTime: lastConnectionTime,
        status: status
    });
}

export default writeUserData;
