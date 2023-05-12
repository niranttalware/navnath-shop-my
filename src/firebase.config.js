// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdZ4XocrlLjqmDUIE6zmJGV_Y7DETA7gs",
  authDomain: "navnath-trader-s-8b8c9.firebaseapp.com",
  projectId: "navnath-trader-s-8b8c9",
  storageBucket: "navnath-trader-s-8b8c9.appspot.com",
  messagingSenderId: "67537581286",
  appId: "1:67537581286:web:87a94e28e48f6d08bf7727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
