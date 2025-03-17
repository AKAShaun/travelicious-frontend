// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOQvZGKiyMs-OsSHqqKBAkpsVJRuQPpjs",
  authDomain: "travelicious-b3dcd.firebaseapp.com",
  projectId: "travelicious-b3dcd",
  storageBucket: "travelicious-b3dcd.firebasestorage.app",
  messagingSenderId: "1029783857159",
  appId: "1:1029783857159:web:fa47f0933675bcce97a2a2",
  measurementId: "G-VL5YHWG72W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };