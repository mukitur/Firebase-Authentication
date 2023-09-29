// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCX1t-ZU501UlRptoLrNHzs-0_CW7nrxDg',
  authDomain: 'user-email-pass-auth-33cdd.firebaseapp.com',
  projectId: 'user-email-pass-auth-33cdd',
  storageBucket: 'user-email-pass-auth-33cdd.appspot.com',
  messagingSenderId: '538135988283',
  appId: '1:538135988283:web:e5aec1ce2c2458c8a1341e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
