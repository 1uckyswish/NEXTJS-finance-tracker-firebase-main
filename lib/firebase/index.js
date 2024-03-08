// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCas3HsePzIT0SFLohh9HiJiHgNuPwUZSI",
  authDomain: "finance-tracker-8fddb.firebaseapp.com",
  projectId: "finance-tracker-8fddb",
  storageBucket: "finance-tracker-8fddb.appspot.com",
  messagingSenderId: "568245315084",
  appId: "1:568245315084:web:74af7f9844ba046f24f029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};