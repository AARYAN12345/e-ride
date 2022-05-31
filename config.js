import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBLohQG_K64ldNp0dNAoVg1rXIdrHkGw1Q",
  authDomain: "p-75-68f90.firebaseapp.com",
  databaseURL: "https://p-75-68f90-default-rtdb.firebaseio.com",
  projectId: "p-75-68f90",
  storageBucket: "p-75-68f90.appspot.com",
  messagingSenderId: "699101300491",
  appId: "1:699101300491:web:13df5ca1c9949d36ec040e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
