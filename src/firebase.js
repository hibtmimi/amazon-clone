import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDCR8SRNNgbR74UffUk1If9FDC0lMxS4F0",
    authDomain: "clone-5b89d.firebaseapp.com",
    projectId: "clone-5b89d",
    storageBucket: "clone-5b89d.appspot.com",
    messagingSenderId: "957682104465",
    appId: "1:957682104465:web:c36b10e503c75551cae730",
    measurementId: "G-TTPYNV0YQT"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };