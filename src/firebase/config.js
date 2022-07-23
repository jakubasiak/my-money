import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };