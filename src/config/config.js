import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY || '${{ secrets.REACT_APP_API_KEY }}',
    authDomain: process.env.REACT_APP_AUTH_DOMAIN || '${{ secrets.REACT_APP_AUTH_DOMAIN }}',
    projectId: process.env.REACT_APP_PROJECT_ID || '${{ secrets.REACT_APP_PROJECT_ID }}',
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET || '${{ secrets.REACT_APP_STORAGE_BUCKET }}',
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || '${{ secrets.REACT_APP_MESSAGING_SENDER_ID }}',
    appId: process.env.REACT_APP_APP_ID || '${{ secrets.REACT_APP_APP_ID }}',
    measurementId: process.env.REACT_APP_MEASUREMENT_ID || '${{ secrets.REACT_APP_MEASUREMENT_ID }}'
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;