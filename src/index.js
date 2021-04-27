import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  firebase.initializeApp({
    apiKey: "AIzaSyASoUFwRBeqf7olM8_T8GGKhwo1v9ibocQ",
    authDomain: "notero-f4bb7.firebaseapp.com",
    projectId: "notero-f4bb7",
    storageBucket: "notero-f4bb7.appspot.com",
    messagingSenderId: "32281940485",
    appId: "1:32281940485:web:95f08b802751c5ab16426c",
    measurementId: "G-MN649F1ZFX"
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
