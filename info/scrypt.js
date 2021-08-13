'use strict';

// ===================== меню ===========================
let rezTestDiv = document.querySelector('.rezTestDiv');
let otpravTestDiv = document.querySelector('.otpravTestDiv');
let sozdTestDiv = document.querySelector('.sozdTestDiv');
let konstTestDiv = document.querySelector('.konstTestDiv');
let exit = document.querySelector('.exit');

rezTestDiv.addEventListener('mouseover', (e) => {
    rezTestDiv.classList.add('viborMenu');
});
rezTestDiv.addEventListener('mouseout', (e) => {
    rezTestDiv.classList.remove('viborMenu');
});

otpravTestDiv.addEventListener('mouseover', (e) => {
    otpravTestDiv.classList.add('viborMenu');
});
otpravTestDiv.addEventListener('mouseout', (e) => {
    otpravTestDiv.classList.remove('viborMenu');
});

sozdTestDiv.addEventListener('mouseover', (e) => {
    sozdTestDiv.classList.add('viborMenu');
});
sozdTestDiv.addEventListener('mouseout', (e) => {
    sozdTestDiv.classList.remove('viborMenu');
});

/* konstTestDiv.addEventListener('mouseover', (e) => {
    konstTestDiv.classList.add('viborMenu');    
});
konstTestDiv.addEventListener('mouseout', (e) => {
    konstTestDiv.classList.remove('viborMenu');    
}); */

exit.addEventListener('mouseover', (e) => {
    exit.classList.add('viborMenu');
});
exit.addEventListener('mouseout', (e) => {
    exit.classList.remove('viborMenu');
});

// =========================================================


var firebaseConfig = {
    apiKey: "AIzaSyC9u6bg9fFRw550w-px7AOG0xCIwqokSRs",
    authDomain: "analytics-candidate.firebaseapp.com",
    databaseURL: "https://analytics-candidate-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "analytics-candidate",
    storageBucket: "analytics-candidate.appspot.com",
    messagingSenderId: "476377987731",
    appId: "1:476377987731:web:8fbe22b22a5c9204e06b66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

exit.addEventListener('click', e => {
    firebase.auth().signOut();
    window.location.href = "../parol/index.html";
});
