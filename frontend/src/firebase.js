// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "socialsavvy-fd529.firebaseapp.com",
  projectId: "socialsavvy-fd529",
  storageBucket: "socialsavvy-fd529.appspot.com",
  messagingSenderId: "61533612669",
  appId: "1:61533612669:web:7bfc4e3746f97468221f14",
  measurementId: "G-6HPVCVVM5D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);