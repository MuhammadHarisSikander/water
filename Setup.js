import * as React from 'react'
import App from './App'
import firebase from '@react-native-firebase/app'
import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBUsDk31aCbR1C02rkR5JvE6kNsb36XzUE",
  authDomain: "test-96878.firebaseapp.com",
  databaseURL: "https://test-96878-default-rtdb.firebaseio.com",
  projectId: "test-96878",
  storageBucket: "test-96878.appspot.com",
  messagingSenderId: "231317483506",
  appId: "1:231317483506:web:bbd887ec2652553efcc56b",
  measurementId: "G-VTXFDGW711"
};
// const firebaseConfig = {
//     apiKey: "AIzaSyCVVzRtxJX6WsN_gq0VnPnUknVNBI7fpoQ",
//     authDomain: "waterph-81893.firebaseapp.com",
//     databaseURL: "https://waterph-81893-default-rtdb.firebaseio.com",
//     projectId: "waterph-81893",
//     storageBucket: "waterph-81893.appspot.com",
//     messagingSenderId: "1057743994726",
//     appId: "1:1057743994726:web:2182ca3d04ff4a82b052a7"
//   };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export { firebase, Auth, database }

function Setup() {
  return <App />
}
export default Setup