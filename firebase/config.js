// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvdOSeeoWNNr0nE0vszvt052GPB7PAm00",
  authDomain: "farm-5ec9a.firebaseapp.com",
  projectId: "farm-5ec9a",
  storageBucket: "farm-5ec9a.appspot.com",
  messagingSenderId: "835501890909",
  appId: "1:835501890909:web:a1bfc378c07bc3d8231cb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const projectFirestore = getFirestore(app);

export { projectFirestore };
