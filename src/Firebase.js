import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBxL2p-ZtQJjK7rTZYQ2u4IU1VDNkTq6Kk",
    authDomain: "eshop-adffe.firebaseapp.com",
    projectId: "eshop-adffe",
    storageBucket: "eshop-adffe.appspot.com",
    messagingSenderId: "569924867388",
    appId: "1:569924867388:web:e1ab10a9fd8cd3365f7a39",
    measurementId: "G-L2VDSSDMQ7"
  };

//   const app = initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};

