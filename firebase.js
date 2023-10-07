import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm7l_zNuXb_QgJKAJLmvndr5QPlrzv148",
  authDomain: "madtaxadvice.firebaseapp.com",
  projectId: "madtaxadvice",
  storageBucket: "madtaxadvice.appspot.com",
  messagingSenderId: "370262861706",
  appId: "1:370262861706:web:739a1e8a02990517b4ca73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firebaseDb = getFirestore(app);
