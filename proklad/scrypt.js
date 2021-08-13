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

let idPolz = localStorage.getItem('idPolz');
let dannieInfo = [{name:1}];
var playersRef = firebase.database().ref(`${idPolz}` + "/rezult/");
playersRef.set(dannieInfo);
let timerInterval = setTimeout(function () {
    window.location.href = "../reiting/index.html";
}, 2500);

