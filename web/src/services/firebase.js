import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyBSzStj3l9E54EjXk2OAVnC5Wme05X7njU",
    authDomain: "questions-9fdd6.firebaseapp.com",
    databaseURL: "https://questions-9fdd6-default-rtdb.firebaseio.com",
    projectId: "questions-9fdd6",
    storageBucket: "questions-9fdd6.appspot.com",
    messagingSenderId: "633110626196",
    appId: "1:633110626196:web:f9889fe72afa745e115981",
    measurementId: "G-CL82NB276Y"
  });

  const auth = firebase.auth();

  export default firebase;
  
  export {auth};