// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig ={
  apiKey: "AIzaSyCVVzRtxJX6WsN_gq0VnPnUknVNBI7fpoQ",
  authDomain: "waterph-81893.firebaseapp.com",
  databaseURL: "https://waterph-81893-default-rtdb.firebaseio.com",
  projectId: "waterph-81893",
  storageBucket: "waterph-81893.appspot.com",
  messagingSenderId: "1057743994726",
  appId: "1:1057743994726:web:2182ca3d04ff4a82b052a7"
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebaseConfig;