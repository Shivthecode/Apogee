import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkHAllb3cDbLZB3ycOF4KktxF6eanzTYg",
  authDomain: "apogee-library.firebaseapp.com",
  projectId: "apogee-library",
  storageBucket: "apogee-library.firebasestorage.app",
  messagingSenderId: "712576195086",
  appId: "1:712576195086:web:d6376d960b9a546c647a5f",
  measurementId: "G-ND1L2K708N"
};

// App initialize karna
const app = initializeApp(firebaseConfig);

// Exports (GoogleAuthProvider hata diya gaya hai)
export const auth = getAuth(app);
export const db = getFirestore(app);


