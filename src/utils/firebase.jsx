import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCJBhgnfoZluKluarlFIBez2Jw5mVyFf3s",
    authDomain: "site-react-3aef8.firebaseapp.com",
    projectId: "site-react-3aef8",
    storageBucket: "site-react-3aef8.appspot.com",
    messagingSenderId: "994528400573",
    appId: "1:994528400573:web:42569e2d81ec400e69d3d4",
    measurementId: "G-NV2HXC3TW6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;