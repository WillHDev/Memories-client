import firebase from 'firebase/app'
import 'firebase/auth'


//replace with ENV variables for
const firebaseConfig = {
    apiKey: "AIzaSyAkA59FtxQJHjBulFirpZmT-E9xPfUW-s8",
    authDomain: "memories-development.firebaseapp.com",
    projectId: "memories-development",
    storageBucket: "memories-development.appspot.com",
    messagingSenderId: "1083508216517",
    appId: "1:1083508216517:web:934d145d4d5b9f7ebb96ac"
  };

//auth instance
  export const auth = app.auth();
  //app
  export default app;