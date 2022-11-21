// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj5OeVEWogaXauq6nKupSVNgSKK7x1AMs",
  authDomain: "eshop-project-eda1d.firebaseapp.com",
  projectId: "eshop-project-eda1d",
  storageBucket: "eshop-project-eda1d.appspot.com",
  messagingSenderId: "86187461673",
  appId: "1:86187461673:web:3f1c2825d7364172ba2038",
  measurementId: "G-8MZZY96ZJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export {
  auth,
  doc,
  addDoc,
  getDocs,
  collection,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  db,
};
