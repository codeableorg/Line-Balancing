import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCjUWVhVGjMiYjHg9AOm9Sgs--rwg75W3g",
  authDomain: "line-balancing-a238d.firebaseapp.com",
  databaseURL: "https://line-balancing-a238d.firebaseio.com",
  projectId: "line-balancing-a238d",
  storageBucket: "",
  messagingSenderId: "92507595737",
  appId: "1:92507595737:web:e832a322caa895e4"
};
// Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);

export default fire;
