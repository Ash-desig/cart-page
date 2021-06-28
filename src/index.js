import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBxVZDKySqH9jLd83IkQ2Pey85z1coBQSk",
  authDomain: "cart-89995.firebaseapp.com",
  projectId: "cart-89995",
  storageBucket: "cart-89995.appspot.com",
  messagingSenderId: "959805919173",
  appId: "1:959805919173:web:05e5c890ffbe63594685ac"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
