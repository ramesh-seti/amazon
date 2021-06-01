import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDE4_D7pl4ISgI8zlUm-OCeqtLXtYFvgNQ",
  authDomain: "challenge-4a068.firebaseapp.com",
  databaseURL: "https://challenge-4a068.firebaseio.com",
  projectId: "challenge-4a068",
  storageBucket: "challenge-4a068.appspot.com",
  messagingSenderId: "1070175239876",
  appId: "1:1070175239876:web:200b8492e580a23f39d391",
  measurementId: "G-G9JEDM8T21",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };