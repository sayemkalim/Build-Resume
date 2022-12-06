import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// App initilization
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAajPiKg2z_cVGf3DHlngIWOHBZ_QhQozo",
  authDomain: "login-auth-resumebuilder.firebaseapp.com",
  projectId: "login-auth-resumebuilder",
  storageBucket: "login-auth-resumebuilder.appspot.com",
  messagingSenderId: "236705213092",
  appId: "1:236705213092:web:58e0ff4df8aa60aedb1431",
  measurementId: "G-WN486X6MMD"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };