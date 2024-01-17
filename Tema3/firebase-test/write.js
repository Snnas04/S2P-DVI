import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://spdvi-chat-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

function writeUserData(userId, ip, lastConTime, status) {
  const db = getDatabase(app);
  set(ref(db, 'chatUsers/' + userId), {
    ip: ip,
    lastConTime: lastConTime,
    status: status
  });
}

writeUserData('marcsans', '192.168.48.115', '{ date: \'2024/01/17\', time: \'16:00:00\' }', true)
