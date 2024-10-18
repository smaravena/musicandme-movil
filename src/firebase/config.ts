// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZgFzi-5vHo4KpsIdfKdeXVnmcVhTI3s0",
  authDomain: "musicandme-5e8c6.firebaseapp.com",
  projectId: "musicandme-5e8c6",
  storageBucket: "musicandme-5e8c6.appspot.com",
  messagingSenderId: "610855720633",
  appId: "1:610855720633:web:b789cf8565165b2493ed68",
  measurementId: "G-W5ME7ZLZV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);