// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDczNWdgI2hQxFrUX627hupggQ2gDmZmxs",
  authDomain: "news-portal-1aede.firebaseapp.com",
  projectId: "news-portal-1aede",
  storageBucket: "news-portal-1aede.firebasestorage.app",
  messagingSenderId: "166162930731",
  appId: "1:166162930731:web:a98f31f21fe46fdbb15e6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;