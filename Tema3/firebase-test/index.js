import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX8KL8YK6GlX8s3lrF-0bD-9XPb83jjhc",
    authDomain: "spdvi-chat.firebaseapp.com",
    databaseURL: "https://spdvi-chat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "spdvi-chat",
    storageBucket: "spdvi-chat.appspot.com",
    messagingSenderId: "172167655749",
    appId: "1:172167655749:web:363d8a6c63665c821bce2c",
    measurementId: "G-QE4X77N1WC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de la Realtime Database
const db = getDatabase(app);

// Realiza una consulta a un nodo específico (reemplaza 'nombre-nodo' con el nombre real de tu nodo)
const dataRef = ref(db, 'chatUsers');
const dataSnapshot = await get(dataRef);

// Imprime los datos en la consola
console.log(dataSnapshot.val());