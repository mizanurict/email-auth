// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJJ9hWe5qCV4hzBufr6eiov9N3-yDl454",
  authDomain: "email-auth-4f08c.firebaseapp.com",
  projectId: "email-auth-4f08c",
  storageBucket: "email-auth-4f08c.appspot.com",
  messagingSenderId: "260491304136",
  appId: "1:260491304136:web:1ca006f401c92b2cd019fd",
  measurementId: "G-N8BL7LHD0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;