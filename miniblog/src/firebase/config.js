// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyMvAh2nhKDSmAMa_VG9RQW7gfXuw_BWQ",
  authDomain: "miniblog-github.firebaseapp.com",
  projectId: "miniblog-github",
  storageBucket: "miniblog-github.appspot.com",
  messagingSenderId: "812322338195",
  appId: "1:812322338195:web:ae1f129dbfe9b21464e466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }