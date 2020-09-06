//import firebase
import * as firebase from 'firebase/app';
//imort firestore
import 'firebase/firestore';

//start de data base
firebase.initializeApp({
	apiKey: "AIzaSyAj_0SXqCFY49F2Z-h2WEKmFX9ClVie7xk",
	authDomain: "message-app-a67e3.firebaseapp.com",
	databaseURL: "https://message-app-a67e3.firebaseio.com",
	projectId: "message-app-a67e3",
	storageBucket: "message-app-a67e3.appspot.com",
	messagingSenderId: "502325470559",
	appId: "1:502325470559:web:9fcaa1a8bea0154e8d02ea"
});

//connection to data base
export const db = firebase.firestore();

//timestamp and export it
export const timestamp = firebase.firestore.FieldValue.serverTimestamp