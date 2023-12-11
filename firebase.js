// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0XVIaVvWL2Lt3PWNaeFCpGbn_MtueWcU",
  authDomain: "todo-9080b.firebaseapp.com",
  projectId: "todo-9080b",
  storageBucket: "todo-9080b.appspot.com",
  messagingSenderId: "439585729320",
  appId: "1:439585729320:web:3553bcff4bb5fbcbe63e1d",
  measurementId: "G-BDLF9PGKHW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
