'use strict';
window.addEventListener('DOMContentLoaded', function () {
    let polevvod = document.querySelector('#polevvod');
    let pole1 = document.querySelector('.pole1');
    let pole2 = document.querySelector('.pole2');
    let pole3 = document.querySelector('.pole3');
    let pole4 = document.querySelector('.pole4');
    let vibor1 = document.querySelector('vibor1');
    let sohranit = document.querySelector('.btnReady_sohranit');
    let otmena = document.querySelector('.btnReady');
    let radios = document.querySelectorAll('input[type="radio"]');
    let indexRadio = 0,
        info1 = 0,
        info2 = 0,
        info3 = 0,
        info4 = 0,
        infoPole = 0,
        questionNumber = 0;
    let error = document.querySelector('.error');
    let dannie = {
        "questionNumber": 0,
        "question": 0,
        "answerOptionText1": 0,
        "answerOptionText2": 0,
        "answerOptionText3": 0,
        "answerOptionText4": 0,
        "answerTrue": 0
    };

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

    polevvod.addEventListener('input', (e) => {
        infoPole = polevvod.value;
       
        if (infoPole.length == 0) {
            polevvod.classList.add('redborder');
        } else {
            polevvod.classList.remove('redborder');
        }
    });

    pole1.addEventListener('input', (e) => {
        info1 = pole1.value;
        
        if (info1.length == 0) {
            pole1.classList.add('redborder');
        } else {
            pole1.classList.remove('redborder');
        }
    });

    pole2.addEventListener('input', (e) => {
        info2 = pole2.value;
        
        if (info2.length == 0) {
            pole2.classList.add('redborder');
        } else {
            pole2.classList.remove('redborder');
        }
    });

    pole3.addEventListener('input', (e) => {
        info3 = pole3.value;
        
        if (info3.length == 0) {
            pole3.classList.add('redborder');
        } else {
            pole3.classList.remove('redborder');
        }
    });

    pole4.addEventListener('input', (e) => {
        info4 = pole4.value;
        
        if (info4.length == 0) {
            pole4.classList.add('redborder');
        } else {
            pole4.classList.remove('redborder');
        }
    });

    sohranit.addEventListener('click', function () {

        for (let radio of radios) {
            if (radio.checked) {
                indexRadio = radio.value;

                if (indexRadio >= 1 && info1.length > 0 && info2.length > 0 && info3.length > 0 && info4.length > 0 && infoPole.length > 0) {
                    console.log(info1.length);
                    // ====================
                    questionNumber++;

                    dannie.questionNumber = questionNumber;
                    dannie.question = infoPole;
                    dannie.answerOptionText1 = info1;
                    dannie.answerOptionText2 = info2;
                    dannie.answerOptionText3 = info3;
                    dannie.answerOptionText4 = info4;
                    dannie.answerTrue = indexRadio;

                    console.log(dannie);

                    serverPost(dannie, questionNumber);


                } else {
                    pokazError();
                    return;
                }
            }
        }

        if (indexRadio === 0 || info1.length === undefined || info2.length === undefined || info3.length === undefined || info4.length === undefined || infoPole.length === undefined) {

            pokazError();
            return;
        }
    });

    function pokazError() {
        error.classList.add('pokaz');
        error.classList.remove('scritie');

        let timerInterval = setTimeout(function () {
            error.classList.remove('pokaz');
            error.classList.add('scritie');
        }, 2500);

    }

    let timerInterval = setInterval(function () {
        for (let radio of radios) {

            if (radio.checked) {

                indexRadio = radio.value;

                if (indexRadio == 1) {
                    pole1.classList.add('viborPoly');
                    pole2.classList.remove('viborPoly');
                    pole3.classList.remove('viborPoly');
                    pole4.classList.remove('viborPoly');

                } else if (indexRadio == 2) {
                    pole2.classList.add('viborPoly');
                    pole1.classList.remove('viborPoly');
                    pole3.classList.remove('viborPoly');
                    pole4.classList.remove('viborPoly');
                } else if (indexRadio == 3) {
                    pole3.classList.add('viborPoly');
                    pole1.classList.remove('viborPoly');
                    pole2.classList.remove('viborPoly');
                    pole4.classList.remove('viborPoly');
                } else if (indexRadio == 4) {
                    pole4.classList.add('viborPoly');
                    pole2.classList.remove('viborPoly');
                    pole3.classList.remove('viborPoly');
                    pole1.classList.remove('viborPoly');
                }

            }
        }
    }, 250);


    function serverPost(dannie, questionNumber) {

        var playersRef = firebase.database().ref("test/ivanov/" + `${questionNumber}`);
        playersRef.set(dannie);
        cleaning();
    }

    function cleaning() {
        polevvod.value = '';
        pole1.value = '';
        pole2.value = '';
        pole3.value = '';
        pole4.value = '';

        radios.forEach((item) => {
            item.checked = false;
        });

        pole1.classList.remove('viborPoly');
        pole2.classList.remove('viborPoly');
        pole3.classList.remove('viborPoly');
        pole4.classList.remove('viborPoly');
    }






});