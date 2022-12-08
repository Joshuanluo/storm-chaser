// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_APIDOMAIN,
  projectId: "storm-chaser-colab",
  storageBucket: "storm-chaser-colab.appspot.com",
  messagingSenderId: "291106799479",
  appId: "1:291106799479:web:3dd114e3ef036bd75fab72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db =getFirestore(app);
