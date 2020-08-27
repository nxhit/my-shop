import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/storage";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCZzpvYtwiKRq6gxdnaOtKbMpal8awaCag",
  authDomain: "fir-api-f6968.firebaseapp.com",
  databaseURL: "https://fir-api-f6968.firebaseio.com",
  projectId: "fir-api-f6968",
  storageBucket: "fir-api-f6968.appspot.com",
  messagingSenderId: "826340333570",
  appId: "1:826340333570:web:1681c121a9455955436f1b",
  measurementId: "G-MGQ7TWKTZT"
};

const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export { fb, db };
