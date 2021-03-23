import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTlvJfjYT3F0kJ3T5Mz-xiqZBCKbT5LQk",
  authDomain: "whats-app-clone-pwj.firebaseapp.com",
  projectId: "whats-app-clone-pwj",
  storageBucket: "whats-app-clone-pwj.appspot.com",
  messagingSenderId: "1002391512879",
  appId: "1:1002391512879:web:07be6e2ed91e4c1cb8a3da",
  measurementId: "G-NL4573JDZR"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  export default db;