// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXG04ktQgLnqVa1skmiO4Q7BpLG_7HiQs",
  authDomain: "testvue-c47cd.firebaseapp.com",
  projectId: "testvue-c47cd",
  storageBucket: "testvue-c47cd.appspot.com",
  messagingSenderId: "144378232694",
  appId: "1:144378232694:web:08df34ac2e1bac66c04457",
  measurementId: "G-PJ76SETELM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default{app, analytics};