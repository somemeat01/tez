
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbUUvuz6IdPGZjR3wrNDaMIX1u40CyaDw",
  authDomain: "react-native-97ed2.firebaseapp.com",
  projectId: "react-native-97ed2",
  storageBucket: "react-native-97ed2.firebasestorage.app",
  messagingSenderId: "645047072495",
  appId: "1:645047072495:web:34c03faa01ff738d820d1a",
  measurementId: "G-Q2PE8XLM8C"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);