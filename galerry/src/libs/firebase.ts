import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC3utXlt5wPcVnkbNp3mlCKXPrOn4U1Prc",
    authDomain: "d5reactgallery-59b22.firebaseapp.com",
    projectId: "d5reactgallery-59b22",
    storageBucket: "d5reactgallery-59b22.appspot.com",
    messagingSenderId: "153357336212",
    appId: "1:153357336212:web:f70b5a8276abc5d3017e81"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);