// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIp0voOEMXc2Vcbh9N_QYqnVKXahxMyfA",
  authDomain: "login-firebase-5cd71.firebaseapp.com",
  projectId: "login-firebase-5cd71",
  storageBucket: "login-firebase-5cd71.appspot.com",
  messagingSenderId: "768815718551",
  appId: "1:768815718551:web:425c145cc7b296769589d2",
  measurementId: "G-5SZS55DZE5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


