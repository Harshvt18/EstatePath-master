// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fec5b.firebaseapp.com",
  projectId: "mern-estate-fec5b",
  storageBucket: "mern-estate-fec5b.appspot.com",
  messagingSenderId: "388361459957",
  appId: "1:388361459957:web:b8a2abff73395cde6e4dbc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
