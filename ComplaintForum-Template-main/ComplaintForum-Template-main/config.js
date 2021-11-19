import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 const firebaseConfig = {
  apiKey: "AIzaSyBzNqHAxlA6DnP2Tmu3EsxlEIInZyqXrV0",
  authDomain: "for-the-principle.firebaseapp.com",
  projectId: "for-the-principle",
  storageBucket: "for-the-principle.appspot.com",
  messagingSenderId: "512178179678",
  appId: "1:512178179678:web:2b62c3f3e3813a98666ecf"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

