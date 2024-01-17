import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
    databaseURL: "https://spdvi-chat-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

// Obtiene una instancia de la Realtime Database
const db = getDatabase(app);

// Realiza una consulta a un nodo específico (reemplaza 'nombre-nodo' con el nombre real de tu nodo)
const dataRef = ref(db, 'chatUsers');
const dataSnapshot = await get(dataRef);

// Imprime los datos en la consola
console.log(dataSnapshot.val());