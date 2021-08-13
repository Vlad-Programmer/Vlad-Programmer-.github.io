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

let txtEmail = document.querySelector('.txtEmail');
let txtPassword = document.querySelector('.txtPassword');
let btnLogin = document.querySelector('.btnLogin');
let btnSingUp = document.querySelector('.btnSingUp');
let btnLogOut = document.querySelector('.btnLogOut');
let eror = document.querySelector('.eror');
let eror2 = document.querySelector('.error2');

btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    proverka();
});

btnSingUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    proverka2();
});

btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut();
});

let i = 0;

function proverka() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            btnLogOut.classList.remove('hide');
            let idichnik = firebaseUser.uid;
            let mailUzer = firebaseUser.email;
            localStorage.setItem('mailUzer', mailUzer);
            localStorage.setItem('idPolz', idichnik);
            localStorage.setItem('delVop', 0);
            localStorage.setItem('delUzer', 0);
            localStorage.setItem('delTest', 0);
            localStorage.setItem('decoration', 'white');
            window.location.href = "reiting/index.html";
        } else {
            let timerZad = setTimeout(function () {
                if (i == 1) {
                    eror.classList.add('pokaz');
                    eror.classList.remove('scritie');
                    txtEmail.value = '';
                    txtPassword.value = '';
                    let timerInterval = setTimeout(function () {
                        eror.classList.remove('pokaz');
                        eror.classList.add('scritie');
                    }, 2500);
                } else {
                    i++;
                }
                btnLogOut.classList.add('hide');
            }, 2500);
        }
    });
}
proverka();

let z = 0;

function proverka2() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            btnLogOut.classList.remove('hide');
            let idichnik = firebaseUser.uid;
            let mailUzer = firebaseUser.email;
            localStorage.setItem('mailUzer', mailUzer);

            // console.log(firebaseUser.email);
            localStorage.setItem('idPolz', idichnik);
            localStorage.setItem('delVop', 0);
            localStorage.setItem('delUzer', 0);
            localStorage.setItem('delTest', 0);
            localStorage.setItem('decoration', 'white');
            window.location.href = "proklad/index.html";
        } else {
            let timerZad = setTimeout(function () {
                if (z == 1) {
                    eror2.classList.add('pokaz');
                    eror2.classList.remove('scritie');
                    txtPassword.value = '';
                    let timerInterval = setTimeout(function () {
                        eror2.classList.remove('pokaz');
                        eror2.classList.add('scritie');
                    }, 2500);
                } else {
                    z++;
                }
                btnLogOut.classList.add('hide');
            }, 3000);
        }
    });
}
proverka2();