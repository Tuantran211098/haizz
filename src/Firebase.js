// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase/app";
import 'firebase/firestore'
// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCvEq0mqsX_2a5EJLouwtO2r6MB1jGcmbM",
    authDomain: "loginmovie-5d999.firebaseapp.com",
    projectId: "loginmovie-5d999",
    storageBucket: "loginmovie-5d999.appspot.com",
    messagingSenderId: "278017833734",
    appId: "1:278017833734:web:60e08a36a54d843c363c87"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
