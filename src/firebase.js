// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "assessment-e16a3.firebaseapp.com",
  projectId: "assessment-e16a3",
  storageBucket: "assessment-e16a3.appspot.com",
  messagingSenderId: "637519979371",
  appId: "1:637519979371:web:590f561081b1c0cf8c222e",
  measurementId: "G-VH62DY9XXS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);