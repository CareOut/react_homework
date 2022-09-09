import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1MrqIOc-p5FzTvB2hhHvxrGsEhmdb03I",
  authDomain: "fir-project-f321c.firebaseapp.com",
  databaseURL:
    "https://fir-project-f321c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-project-f321c",
  storageBucket: "fir-project-f321c.appspot.com",
  messagingSenderId: "1071514776471",
  appId: "1:1071514776471:web:387e1e911372137ec38ad2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
