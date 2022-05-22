// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpnG5Wm6x03oGwaYQhxMSOaUylnGDgMGc",
    authDomain: "mason-hut.firebaseapp.com",
    projectId: "mason-hut",
    storageBucket: "mason-hut.appspot.com",
    messagingSenderId: "854041974288",
    appId: "1:854041974288:web:d2f98cc69c704eda7adc95",
    measurementId: "G-W18DJFM62J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth;