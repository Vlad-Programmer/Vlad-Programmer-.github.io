'use strict';
var firebaseConfig = {
    apiKey: "AIzaSyC9u6bg9fFRw550w-px7AOG0xCIwqokSRs",
    authDomain: "analytics-candidate.firebaseapp.com",
    databaseURL: "https://analytics-candidate-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "analytics-candidate",
    storageBucket: "analytics-candidate.appspot.com",
    messagingSenderId: "476377987731",
    appId: "1:476377987731:web:8fbe22b22a5c9204e06b66"
};
firebase.initializeApp(firebaseConfig);

let nazvTest = localStorage.getItem('znachenTest');
let idPolz = localStorage.getItem('znachenKey');
let xranil = JSON.parse(localStorage.getItem('rezult'));
console.log(xranil);
var playersRef = firebase.database().ref(`${idPolz}` + "/rezult/");
playersRef.set(xranil);



// localStorage.removeItem('rezult');