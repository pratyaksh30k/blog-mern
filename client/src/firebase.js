// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6afc3.firebaseapp.com",
  projectId: "mern-blog-6afc3",
  storageBucket: "mern-blog-6afc3.appspot.com",
  messagingSenderId: "680678550258",
  appId: "1:680678550258:web:583db04a2087af2e287e6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);