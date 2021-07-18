import firebase from 'firebase'

require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyD71iYTpdUT4JODMwl-cwZE2yghXF5jBEs",
  authDomain: "storyhub-7fcd7.firebaseapp.com",
  databaseURL: "https://storyhub-7fcd7-default-rtdb.firebaseio.com",
  projectId: "storyhub-7fcd7",
  storageBucket: "storyhub-7fcd7.appspot.com",
  messagingSenderId: "831419487434",
  appId: "1:831419487434:web:ee67188ce088c4feccd033"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()