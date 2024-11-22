import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: 'AIzaSyAPsx5vPvvZacJMOaFPGhAnadS1duKJL6E',
    authDomain: 'opineaqui-29bb4.firebaseapp.com',
    projectId: 'opineaqui-29bb4',
    storageBucket: 'opineaqui-29bb4.firebasestorage.app',
    messagingSenderId: '496943644610',
    appId: '1:496943644610:web:33a637a55b2c539afba05b',

};

// Inicializa o Firebase
const App = initializeApp(firebaseConfig);


const db = getFirestore(App);
const auth = getAuth(App);

export { db, auth };






