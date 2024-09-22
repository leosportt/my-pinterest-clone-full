// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACgX4x_TaMFxOF2FoySE58jQLuWQ39W74",
  authDomain: "pinterest-clone-6ed99.firebaseapp.com",
  projectId: "pinterest-clone-6ed99",
  storageBucket: "pinterest-clone-6ed99.appspot.com",
  messagingSenderId: "600722808601",
  appId: "1:600722808601:web:db1f41c3cbb6af76636f88",
  measurementId: "G-3DWP1Q7B4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;