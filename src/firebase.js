import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwyvI4t4dvoaOiOnHH6GeytvyxEfRN8iw",
  authDomain: "facebook-clone-382ad.firebaseapp.com",
  databaseURL: "https://facebook-clone-382ad.firebaseio.com",
  projectId: "facebook-clone-382ad",
  storageBucket: "facebook-clone-382ad.appspot.com",
  messagingSenderId: "941993381977",
  appId: "1:941993381977:web:dabc83c999ba1bdeebe148",
  measurementId: "G-Y0FLBMFNMN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
