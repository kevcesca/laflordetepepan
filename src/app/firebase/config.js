// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHTTDQGea5XtZp3OZsNaDcBF8imGkJ3Qk",
    authDomain: "laflordetepepan.firebaseapp.com",
    projectId: "laflordetepepan",
    storageBucket: "laflordetepepan.appspot.com",
    messagingSenderId: "965287724196",
    appId: "1:965287724196:web:5c814c847daa181b6a1231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();