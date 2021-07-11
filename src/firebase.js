// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDPCsnjGdcCvs9cO8NYgJOD6NFlXtaLkH4",
    authDomain: "slack-clone-d7d5c.firebaseapp.com",
    projectId: "slack-clone-d7d5c",
    storageBucket: "slack-clone-d7d5c.appspot.com",
    messagingSenderId: "988800651308",
    appId: "1:988800651308:web:758f6b07097f13eb834189",
    measurementId: "G-0Z27L08ZMP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db;