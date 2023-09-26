import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD66bjVlJm-CF31KfDEAquDNccaUxuoesw",
    authDomain: "primeiro-projeto-em-react.firebaseapp.com",
    projectId: "primeiro-projeto-em-react",
    storageBucket: "primeiro-projeto-em-react.appspot.com",
    messagingSenderId: "1087378395030",
    appId: "1:1087378395030:web:5f67c537f1cda9db6457b7",
    measurementId: "G-Z0BZL2MYEP"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;