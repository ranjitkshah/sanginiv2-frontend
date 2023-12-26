// For Firebase v9+
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkbcgMpwR9hGkMhx7Gv7jSddNI0vxwXXg",
    authDomain: "zaridhar.firebaseapp.com",
    projectId: "zaridhar",
    storageBucket: "zaridhar.appspot.com",
    messagingSenderId: "496581518471",
    appId: "1:496581518471:web:5db8285eb3a11d593cc422",
    measurementId: "G-JCH61DZY2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = getAuth(app);
auth.settings.appVerificationDisabledForTesting = true;


export {auth, app}