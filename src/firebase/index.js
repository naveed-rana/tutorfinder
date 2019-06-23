import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAfLnN3qajkgJgKqGKDJOVZQ1xMJ1Lpats",
  authDomain: "get-work-84ce9.firebaseapp.com",
  databaseURL: "https://get-work-84ce9.firebaseio.com",
  projectId: "get-work-84ce9",
  storageBucket: "",
  messagingSenderId: "282936118591",
  appId: "1:282936118591:web:c87d404331451aa5"
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
const db = firebase.firestore()
export {
  auth,
  database,
  db,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
