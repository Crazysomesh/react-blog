import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyCwErvZaRVIZzS5XAMGghgDYjsdwF0lEXk",
    authDomain: "react-blog-app-448f5.firebaseapp.com",
    databaseURL: "https://react-blog-app-448f5.firebaseio.com",
    projectId: "react-blog-app-448f5",
    storageBucket: "react-blog-app-448f5.appspot.com",
    messagingSenderId: "702255227149"
  };
 
 
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;