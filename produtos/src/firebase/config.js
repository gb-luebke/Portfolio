// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBm3PS6dhj6DfCa9qJXzajlxPcAWi4mQNg",
    authDomain: "e-commerce-github.firebaseapp.com",
    projectId: "e-commerce-github",
    storageBucket: "e-commerce-github.appspot.com",
    messagingSenderId: "3726233308",
    appId: "1:3726233308:web:4b75c587f5f1ca2f5dae19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }

export const auth = getAuth(app)