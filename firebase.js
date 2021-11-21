// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAginHZLlkCXkRrhIiJO5oholPQmkd8YYg",
  authDomain: "insta-2-39eca.firebaseapp.com",
  projectId: "insta-2-39eca",
  storageBucket: "insta-2-39eca.appspot.com",
  messagingSenderId: "351184661685",
  appId: "1:351184661685:web:04371df98ccccba9bfa2fc"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};