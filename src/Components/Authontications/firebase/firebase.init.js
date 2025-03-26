// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqsPkeKBIM00ChX5Wfk8lTXdHPqR9S2nc",
    authDomain: "chill-gamer-c45cc.firebaseapp.com",
    projectId: "chill-gamer-c45cc",
    storageBucket: "chill-gamer-c45cc.firebasestorage.app",
    messagingSenderId: "710831224735",
    appId: "1:710831224735:web:c732507bd71f1877d06faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);