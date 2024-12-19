// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-13d76.firebaseapp.com",
  projectId: "blog-13d76",
  storageBucket: "blog-13d76.firebasestorage.app",
  messagingSenderId: "542751589942",
  appId: "1:542751589942:web:4603340ab9887782853a97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);