import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBr0lGWtiOxBnO5w9Ma0WsjdidPhrk2eKY',
  authDomain: 'cabbage-8c63c.firebaseapp.com',
  databaseURL: 'https://cabbage-8c63c.firebaseio.com',
  projectId: 'cabbage-8c63c',
  storageBucket: 'cabbage-8c63c.appspot.com',
  messagingSenderId: '394538235726',
  appId: '1:394538235726:web:1ea6608792605055a7901f'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;