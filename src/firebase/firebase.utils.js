// import firebase from 'firebase/app'
// import 'firebase/auth'


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAkA59FtxQJHjBulFirpZmT-E9xPfUW-s8",
  authDomain: "memories-development.firebaseapp.com",
  projectId: "memories-development",
  storageBucket: "memories-development.appspot.com",
  messagingSenderId: "1083508216517",
  appId: "1:1083508216517:web:934d145d4d5b9f7ebb96ac"
};

// Initialize Firebase
firebase.initializeApp(config);

//exports our auth instance
  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  ///trigger google auth popup whenever we use this provider
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;