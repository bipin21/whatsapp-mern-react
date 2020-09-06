import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAKNkKbjo277tXakEdfCyckZKsnf5E8GX0",
    authDomain: "whatsapp-mern-9f4a4.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-9f4a4.firebaseio.com",
    projectId: "whatsapp-mern-9f4a4",
    storageBucket: "whatsapp-mern-9f4a4.appspot.com",
    messagingSenderId: "992786771738",
    appId: "1:992786771738:web:ba865902f86d42646f86a3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;