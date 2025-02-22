import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA1E8TDXM5xoNon0odM1721GOTKng7Kjf8",
    authDomain: "olx-clone-522d7.firebaseapp.com",
    projectId: "olx-clone-522d7",
    storageBucket: "olx-clone-522d7.firebasestorage.app",
    messagingSenderId: "418198190411",
    appId: "1:418198190411:web:f19bd36f5151843bb090ce"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
