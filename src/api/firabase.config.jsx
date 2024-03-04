import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtEtjJuIL0WXb0aEEsrIRfOmZCuw6a2sU",
  authDomain: "loginbiblioweb.firebaseapp.com",
  projectId: "loginbiblioweb",
  storageBucket: "loginbiblioweb.appspot.com",
  messagingSenderId: "445423688940",
  appId: "1:445423688940:web:df2990ca53003738fa59c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);