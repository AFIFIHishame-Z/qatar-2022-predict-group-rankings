// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA18TxlkA0NA5mNBcn4nvLFI1mbVtAq164",
  authDomain: "qatar22-263e7.firebaseapp.com",
  projectId: "qatar22-263e7",
  storageBucket: "qatar22-263e7.appspot.com",
  messagingSenderId: "769489083557",
  appId: "1:769489083557:web:946d014add28fcfe74814c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
