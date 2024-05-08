// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNhdu_KGDqt_ISv4zFkuQVsHJrWq_5xKM",
  authDomain: "solo-shpere.firebaseapp.com",
  projectId: "solo-shpere",
  storageBucket: "solo-shpere.appspot.com",
  messagingSenderId: "979585664831",
  appId: "1:979585664831:web:931c36e3f25849039b358a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
