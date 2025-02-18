// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQWqMWLx-CJd5ysroCq0ddJ5Z6whIIL_o",
    authDomain: "portfolio-projects-92612.firebaseapp.com",
    projectId: "portfolio-projects-92612",
    storageBucket: "portfolio-projects-92612.firebasestorage.app",
    messagingSenderId: "385740811447",
    appId: "1:385740811447:web:2b80461ea37718ce0ff132",
    measurementId: "G-BW2DNWB8ZT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);