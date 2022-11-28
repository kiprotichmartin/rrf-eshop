// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj5OeVEWogaXauq6nKupSVNgSKK7x1AMs",
  authDomain: "eshop-project-eda1d.firebaseapp.com",
  databaseURL: "https://eshop-project-eda1d-default-rtdb.firebaseio.com",
  projectId: "eshop-project-eda1d",
  storageBucket: "eshop-project-eda1d.appspot.com",
  messagingSenderId: "86187461673",
  appId: "1:86187461673:web:3f1c2825d7364172ba2038",
  measurementId: "G-8MZZY96ZJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
