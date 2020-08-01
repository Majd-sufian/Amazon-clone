import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAMr9R7BK6-lJSaF_uV9L-yPFdN3jBd0es",
  authDomain: "clone-68f8a.firebaseapp.com",
  databaseURL: "https://clone-68f8a.firebaseio.com",
  projectId: "clone-68f8a",
  storageBucket: "clone-68f8a.appspot.com",
  messagingSenderId: "899267164237",
  appId: "1:899267164237:web:dd55a07ccfba3630c8c404",
  measurementId: "G-X6861FWS1B",
});

const db = firebaseApp.firestore();

export default db;
