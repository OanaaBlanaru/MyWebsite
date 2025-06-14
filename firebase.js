// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJX3_a3MvnB1X_Su96urXdwegjKL9Lrqo",
  authDomain: "mywebprojects-11473.firebaseapp.com",
  projectId: "mywebprojects-11473",
  storageBucket: "mywebprojects-11473.firebasestorage.app",
  messagingSenderId: "746454300922",
  appId: "1:746454300922:web:617c9816b864ff1805f143",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
function register(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration successful
      console.log(userCredential.user);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}
function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      console.log(userCredential.user);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}
function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export { auth, register, login };

// ...existing code...
