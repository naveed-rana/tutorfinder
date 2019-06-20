import firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDEhH0EIcNo6jXZB_vywEh6hEidqAhP7es",
    authDomain: "getwork-49678.firebaseapp.com",
    databaseURL: "https://getwork-49678.firebaseio.com",
    projectId: "getwork-49678",
    storageBucket: "",
    messagingSenderId: "741274169959",
    appId: "1:741274169959:web:9e501cec77f22089"
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
