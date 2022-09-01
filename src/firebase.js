// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDRYNdvSxes8mTrj9dVx4W9q7fANUOXWB8",
  authDomain: "challenge-5f62c.firebaseapp.com",
  projectId: "challenge-5f62c",
  storageBucket: "challenge-5f62c.appspot.com",
  messagingSenderId: "853679144232",
  appId: "1:853679144232:web:54f11db67a45fef2b2241d",
  measurementId: "G-C487VVRWBS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };