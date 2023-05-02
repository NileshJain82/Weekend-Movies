import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBTUb2CKliNZDFlYf2faOOk3IFCZOtdV_U",
  authDomain: "movies-445d6.firebaseapp.com",
  projectId: "movies-445d6",
  storageBucket: "movies-445d6.appspot.com",
  messagingSenderId: "606667237157",
  appId: "1:606667237157:web:a19f4ca214abb1f6385ccc",
  measurementId: "G-1JZ72XVHLE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;