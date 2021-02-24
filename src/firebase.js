import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAM_8maktn3EtviVWPPOfUEnBaJPwXDstM",
  authDomain: "slack-a3bcd.firebaseapp.com",
  databaseURL: "https://slack-a3bcd-default-rtdb.firebaseio.com",
  projectId: "slack-a3bcd",
  storageBucket: "slack-a3bcd.appspot.com",
  messagingSenderId: "529867384042",
  appId: "1:529867384042:web:172d0cfe1c71da07db6393",
  measurementId: "G-91YJPWCFLF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


