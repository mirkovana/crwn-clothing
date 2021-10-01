import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const config = {
  apiKey: "AIzaSyDGPv3cIl8SP1oluHjbYpoU-KIbQV0png8",
  authDomain: "crwn-db-3fe0d.firebaseapp.com",
  projectId: "crwn-db-3fe0d",
  storageBucket: "crwn-db-3fe0d.appspot.com",
  messagingSenderId: "649885782767",
  appId: "1:649885782767:web:1fbce82b6598c4f195411a",
  measurementId: "G-PTG87DZM0W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
