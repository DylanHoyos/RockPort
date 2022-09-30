import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWY__8B1J9HUWieQ4NCtFZ-0-1zhEP4_w",
  authDomain: "coderhouse-ecommerce-95450.firebaseapp.com",
  projectId: "coderhouse-ecommerce-95450",
  storageBucket: "coderhouse-ecommerce-95450.appspot.com",
  messagingSenderId: "917696155081",
  appId: "1:917696155081:web:da320d29b79017451aec18"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
