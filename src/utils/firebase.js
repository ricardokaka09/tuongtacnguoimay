import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQgvmcTirV-vsk-39zk7CuiSHGMIfca8E",
    authDomain: "instagram-clone-dfa0d.firebaseapp.com",
    databaseURL: "https://instagram-clone-dfa0d.firebaseio.com",
    projectId: "instagram-clone-dfa0d",
    storageBucket: "instagram-clone-dfa0d.appspot.com",
    messagingSenderId: "495029499420",
    appId: "1:495029499420:web:bee43496ab344b900cd1d9",
    measurementId: "G-PFF2E2JBW5"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const providerFB = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export {db , auth, provider,providerFB}