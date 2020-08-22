import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGG89q3CU7xhzjZWubMjcDGs0gaaEAvnM",
  authDomain: "twitter-clone-c6d9a.firebaseapp.com",
  databaseURL: "https://twitter-clone-c6d9a.firebaseio.com",
  projectId: "twitter-clone-c6d9a",
  storageBucket: "twitter-clone-c6d9a.appspot.com",
  messagingSenderId: "11632114967",
  appId: "1:11632114967:web:9203a6e836050d38dd0b52",
  measurementId: "G-ZMC5GX44CH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
