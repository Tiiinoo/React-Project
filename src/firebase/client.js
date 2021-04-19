import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
	apiKey: "AIzaSyBBJ5qbZcq2WGOyAuVySxLbJJhKM2c8zXE",
	authDomain: "ecommerce-coder-e0b56.firebaseapp.com",
	projectId: "ecommerce-coder-e0b56",
	storageBucket: "ecommerce-coder-e0b56.appspot.com",
	messagingSenderId: "555737391786",
	appId: "1:555737391786:web:5d52a4cd7a31fb74a666d3"
})

export const getFirebase = () => {
	return app
}

export const getFirestore = () => {
	return firebase.firestore(app);
}