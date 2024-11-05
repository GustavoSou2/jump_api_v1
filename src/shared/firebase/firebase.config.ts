import firebase, { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC1o6ZeOaDKmaPngm_bqefI8kPl8MPLWuI',
  authDomain: 'jump-ec6d5.firebaseapp.com',
  projectId: 'jump-ec6d5',
  storageBucket: 'jump-ec6d5.appspot.com',
  messagingSenderId: '732031683964',
  appId: '1:732031683964:web:429c53195872875c2fa8f9',
  measurementId: 'G-7TSZV4YLF3',
};

const app = initializeApp(config);
const db: Firestore = getFirestore(app);

export default db;
