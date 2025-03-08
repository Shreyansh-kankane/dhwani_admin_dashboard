import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  sendEmailVerification,
  type UserCredential,
} from "firebase/auth";


// const firebaseConfig = {
//   apiKey:`${import.meta.env.VITE_FIREBASE_API_KEY}`,
//   authDomain:`${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
//   projectId:`${import.meta.env.VITE_FIREBASE_PROJECT_ID}`,
//   storageBucket:`${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId:`${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
//   appId:`${import.meta.env.VITE_FIREBASE_APP_ID}`,
// }

// const firebaseConfig = { 
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyBPgx9zCp5oJ23TcWghD4QKX8Ctd-vDbtg",
  authDomain: "dhwani-657ab.firebaseapp.com",
  projectId: "dhwani-657ab",
  storageBucket: "dhwani-657ab.firebasestorage.app",
  messagingSenderId: "798111337089",
  appId: "1:798111337089:web:ded8c2c91881459c341b80"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  sendEmailVerification,
  UserCredential,
};
