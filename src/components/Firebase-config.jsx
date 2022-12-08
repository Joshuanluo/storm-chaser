// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_APIDOMAIN,
  projectId: "storm-chaser-143bc",
  storageBucket: "storm-chaser-143bc.appspot.com",
  messagingSenderId: "106080670921",
  appId: "1:106080670921:web:47ebbe232b59fe85c02918",
  measurementId: "G-PQY5ZD5917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db =getFirestore(app);
