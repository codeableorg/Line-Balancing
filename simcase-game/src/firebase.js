import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCnI_6VpRH3TczSyB02y6lecZ2m8s33H4c",
  authDomain: "simcase-game.firebaseapp.com",
  databaseURL: "https://simcase-game.firebaseio.com",
  projectId: "simcase-game",
  storageBucket: "simcase-game.appspot.com",
  messagingSenderId: "377549367448",
  appId: "1:377549367448:web:5b2ada55cc585b1d"
};
// Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);

export default fire;
