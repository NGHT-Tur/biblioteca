import firebase from "firebase/app";
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBFbdBXalEXmHp-iX1tIGlNj8lRGlphJ9k",
  authDomain: "tedio-d26d1.firebaseapp.com",
  projectId: "tedio-d26d1",
  storageBucket: "tedio-d26d1.appspot.com",
  messagingSenderId: "707836751489",
  appId: "1:707836751489:web:9e7468abeb03c9f680e780"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();