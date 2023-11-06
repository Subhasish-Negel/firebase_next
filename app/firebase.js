// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLtpkUDAbqF2MjhPQrsx7BQrvvrLt2dOY",
  authDomain: "next-auth-2269.firebaseapp.com",
  projectId: "next-auth-2269",
  storageBucket: "next-auth-2269.appspot.com",
  messagingSenderId: "775156099648",
  appId: "1:775156099648:web:03fb30ae812bbec1db4da5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);