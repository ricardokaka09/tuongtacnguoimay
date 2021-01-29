import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYzsz_AJ_PiRQ1SOxMlkDSXP9-fW4Aq9A",
    authDomain: "h2n-shopp.firebaseapp.com",
    databaseURL: "https://h2n-shopp.firebaseio.com",
    projectId: "h2n-shopp",
    storageBucket: "h2n-shopp.appspot.com",
    messagingSenderId: "471002313140",
    appId: "1:471002313140:web:5e10fc3321dcce5d7d42e1",
    measurementId: "G-TCL4T957BN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const providerFace = new firebase.auth.FacebookAuthProvider();

  export {db,auth,provider,providerFace};