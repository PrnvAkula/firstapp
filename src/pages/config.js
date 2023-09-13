// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import'firebase/firestore';
import 'firebase/auth';
import { getAuth, GoogleAuthProvider } from "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVg3uCuSiQp8eZylo4xy6I8IEZtNYdX9A",
  authDomain: "firstapp-7fc2a.firebaseapp.com",
  projectId: "firstapp-7fc2a",
  storageBucket: "firstapp-7fc2a.appspot.com",
  messagingSenderId: "1026505952961",
  appId: "1:1026505952961:web:84cd70dcec5d2be17c0e40",
  measurementId: "G-HTF2ZNYM37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.default.initializeApp(firebaseConfig); 
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};