// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJvPNO8oIv2N9NuBMeHf_jbr04gAkDlek",
  authDomain: "api-rest-nodes.firebaseapp.com",
  projectId: "api-rest-nodes",
  storageBucket: "api-rest-nodes.firebasestorage.app",
  messagingSenderId: "361785459512",
  appId: "1:361785459512:web:3653ac62822ca3016537cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export { db };