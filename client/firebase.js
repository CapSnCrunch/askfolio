// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdWGr0HMajRRNxuAaOSuVET4zjTcdgtvE",
  authDomain: "askfolio-b8865.firebaseapp.com",
  projectId: "askfolio-b8865",
  storageBucket: "askfolio-b8865.firebasestorage.app",
  messagingSenderId: "425946760330",
  appId: "1:425946760330:web:f792ebc640604bec631973",
  measurementId: "G-4P5RGX06FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };
export default app;