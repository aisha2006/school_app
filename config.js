import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDD7M9lJLvXw-8iTnCP4ehWEG9FNi1HqhI",
    authDomain: "schoolapp-4f0e3.firebaseapp.com",
    projectId: "schoolapp-4f0e3",
    storageBucket: "schoolapp-4f0e3.appspot.com",
    messagingSenderId: "147854689691",
    appId: "1:147854689691:web:43d3f51bd931dcf54e8d3e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();