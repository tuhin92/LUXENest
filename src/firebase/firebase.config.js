// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-PGvapsL7gXcSMAQkE4Jm06swHT-G7Xc",
  authDomain: "residential-luxenest.firebaseapp.com",
  projectId: "residential-luxenest",
  storageBucket: "residential-luxenest.appspot.com",
  messagingSenderId: "255320100513",
  appId: "1:255320100513:web:9d0f440e9f0c1d12aa6ae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;