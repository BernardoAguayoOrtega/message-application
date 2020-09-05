//import firebase
import * as firebase from 'firebase/app';
//imort firestore
import 'firebase/firestore';

//start de data base
firebase.initializeApp({
	apiKey: 'AIzaSyAQbz2Kmrstvd2XMxGLaL6FUd3NuNGlcCs',
	authDomain: 'test-3bd1f.firebaseapp.com',
	databaseURL: 'https://test-3bd1f.firebaseio.com',
	projectId: 'test-3bd1f',
	storageBucket: 'test-3bd1f.appspot.com',
	messagingSenderId: '523142341168',
	appId: '1:523142341168:web:1e20714c12c0952373c3f5',
});

//connection to data base
export const db = firebase.firestore();

//timestamp and export it
export const timestamp = firebase.firestore.FieldValue.serverTimestamp