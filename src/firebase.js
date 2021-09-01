// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFsfq8KROFei3BCe-nTXoEOYBTKuNFQBU",
  authDomain: "disney-plus-f36f1.firebaseapp.com",
  projectId: "disney-plus-f36f1",
  storageBucket: "disney-plus-f36f1.appspot.com",
  messagingSenderId: "508269916857",
  appId: "1:508269916857:web:4f7e7cd6eefdb2b7a72168"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;
