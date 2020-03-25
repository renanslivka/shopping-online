import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBD4kp9K7KAusrP3VanqLYgYD0ibnRIiAk",
  authDomain: "shopping-online-shalom.firebaseapp.com",
  databaseURL: "https://shopping-online-shalom.firebaseio.com",
  projectId: "shopping-online-shalom",
  storageBucket: "shopping-online-shalom.appspot.com",
  messagingSenderId: "559349726688",
  appId: "1:559349726688:web:9bb7078ba2339de27abf85",
  measurementId: "G-8N7QPSZZE4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
