// firebase.ts (ya da firebase.js)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyDqepFT80HXf8ivCdzpvzdijsfHKoB5IfY",
  authDomain: "ipek-polat-dr.firebaseapp.com",
  projectId: "ipek-polat-dr",
  storageBucket: "ipek-polat-dr.firebasestorage.app",
  messagingSenderId: "342150622600",
  appId: "1:342150622600:web:0febe84ad02d5f4867de3d",
  measurementId: "G-DEZ8X548J5"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore veritabanını al
const db = getFirestore(app);

const auth = getAuth(app);

export { db, collection, doc, deleteDoc, auth };




