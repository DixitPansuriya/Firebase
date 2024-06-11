// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJt8JTHXFS9wxHCvoPzXwDvoZhHMVfHMw",
  authDomain: "lakh-f340b.firebaseapp.com",
  projectId: "lakh-f340b",
  storageBucket: "lakh-f340b.appspot.com",
  messagingSenderId: "150262034563",
  appId: "1:150262034563:web:a07d6f9b4747d9fd5f6bb6",
  measurementId: "G-JMJPTFX8LP"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app)
  const provaider = new GoogleAuthProvider()

  export {auth,provaider}