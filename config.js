import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDgwvBGU05Aqv2aviZnQSDMVh5Kwn63ga4",
    authDomain: "book-worm-b337e.firebaseapp.com",
    databaseURL: "https://book-worm-b337e.firebaseio.com",
    projectId: "book-worm-b337e",
    storageBucket: "book-worm-b337e.appspot.com",
    messagingSenderId: "744397717245",
    appId: "1:744397717245:web:d5800175ca042ed3cf8894"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();