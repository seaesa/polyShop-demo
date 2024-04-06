import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDMEcqoeUF_-x2wmh5MvewJLhtKxNNMllk",
  authDomain: "polyshop-29c47.firebaseapp.com",
  projectId: "polyshop-29c47",
  storageBucket: "polyshop-29c47.appspot.com",
  messagingSenderId: "746531995510",
  appId: "1:746531995510:web:e4eaee71420e2bcbda0457",
  measurementId: "G-CM8QQ0KEWB"
};
const app = initializeApp(firebaseConfig);
export default getFirestore(app)