// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcTrevriCuWnwlDi7AmO5FcGgrYLbSkf8",
  authDomain: "cloudlab1-7f832.firebaseapp.com",
  databaseURL: "https://cloudlab1-7f832-default-rtdb.firebaseio.com",
  projectId: "cloudlab1-7f832",
  storageBucket: "cloudlab1-7f832.appspot.com",
  messagingSenderId: "121606503732",
  appId: "1:121606503732:web:50323a4fbb703666eff961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);