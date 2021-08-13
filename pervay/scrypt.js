'use strict';

let rezTestDiv = document.querySelector('.rezTestDiv');
let otpravTestDiv = document.querySelector('.otpravTestDiv');
let sozdTestDiv = document.querySelector('.sozdTestDiv');
let konstTestDiv = document.querySelector('.konstTestDiv');
let exit = document.querySelector('.exit');
let newUzer = document.querySelector('.newUzer');

// ==============================

let exit2 = document.querySelector('.exit2');

let mailUzer = localStorage.getItem('mailUzer');
exit2.textContent = `Выйти из аккаунта: ${mailUzer}`;
// =====================================


// ==================================
let dark = document.querySelector('.dark');
let darkSwift = document.querySelector('.darkSwift');
let darkSwift2 = document.querySelector('.darkSwift2');
let arrow = document.querySelector('.arrow');
let darkOff = document.querySelector('.darkOff');
// ========================================

let redaktVopros = document.querySelector('.redakt_vopros');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
let text4 = document.querySelector('.text4');
let iputViborPravdi = document.querySelector('.iput_vibor_pravdi');

// =======================================
let helpDiv = document.querySelector('.helpDiv');
let help = document.querySelector('.help');
// ==========================================

let menuKoteiner = document.querySelector('.menuKoteiner');
let rezTest = document.querySelector('.rezTest');
let sozdTest = document.querySelector('.sozdTest');
let konstTest = document.querySelector('.konstTest');
let zaglTextPerv = document.querySelector('.zagl_text');

if (localStorage.getItem('decoration') == 'white') {
    dark.classList.add('scritie');
    // dark.classList.remove('darkSwift');
    darkOff.classList.remove('scritie');
    // darkOff.classList.add('darkSwift');

    document.body.style.backgroundColor = "#f6f7f9";
    menuKoteiner.classList.add('darkNoMenu');
    rezTest.classList.add('darkNoText');
    sozdTest.classList.add('darkNoText');
    konstTest.classList.add('darkNoText');
    exit2.classList.add('darkNoText');
    help.classList.add('darkNoText');

    redaktVopros. classList.add('darkNo');
    zaglTextPerv.classList.add('darkNoZag');
    text1.classList.add('darkNoZag');
    text2.classList.add('darkNoZag');
    text3.classList.add('darkNoZag');
    text4.classList.add('darkNoZag');
    iputViborPravdi.classList.add('darkNoZag');   

}

darkSwift.addEventListener('click', e => {
    console.log(11111111);
    if (localStorage.getItem('decoration') == 'white') {
        localStorage.setItem('decoration', 'dark');
    } else if (localStorage.getItem('decoration') == 'dark') {
        localStorage.setItem('decoration', 'white');
    } /* else {
        localStorage.setItem('decoration', 'white');
    } */
    window.location.reload();
});

darkSwift2.addEventListener('click', e => {
    console.log(222222222);
    if (localStorage.getItem('decoration') == 'white') {
        localStorage.setItem('decoration', 'dark');
    } else if (localStorage.getItem('decoration') == 'dark') {
        localStorage.setItem('decoration', 'white');
    } /* else {
        localStorage.setItem('decoration', 'white');
    } */
    window.location.reload();
});

rezTestDiv.addEventListener('mouseover', (e) => {
    rezTestDiv.classList.add('viborMenu');
});

rezTestDiv.addEventListener('mouseout', (e) => {
    rezTestDiv.classList.remove('viborMenu');
});

sozdTestDiv.addEventListener('click', (e) => {
    window.location.href = "../pervichnoe/index.html";
});

rezTestDiv.addEventListener('click', (e) => {
    window.location.href = "../reiting/index.html";
});

helpDiv.addEventListener('mouseover', (e) => {
    helpDiv.classList.add('viborMenu');
});
helpDiv.addEventListener('mouseout', (e) => {
    helpDiv.classList.remove('viborMenu');
});

dark.addEventListener('mouseover', (e) => {
    dark.classList.add('viborMenu');
});
dark.addEventListener('mouseout', (e) => {
    dark.classList.remove('viborMenu');
});

darkOff.addEventListener('mouseover', (e) => {
    darkOff.classList.add('viborMenu');
});
darkOff.addEventListener('mouseout', (e) => {
    darkOff.classList.remove('viborMenu');
});

exit.addEventListener('mouseover', (e) => {
    exit.classList.add('viborMenu');
});

exit.addEventListener('mouseout', (e) => {
    exit.classList.remove('viborMenu');
});

let oboloochka = document.querySelector('.oboloochka');
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

exit.addEventListener('click', e => {
    firebase.auth().signOut();
    const timeExit = setTimeout(function () {
        window.location.href = "../parol/index.html";
    }, 1000);
});

let polevvod = document.querySelector('#polevvod');
let pole1 = document.querySelector('.pole1');
let pole2 = document.querySelector('.pole2');
let pole3 = document.querySelector('.pole3');
let pole4 = document.querySelector('.pole4');
let vibor1 = document.querySelector('vibor1');
let sohranit = document.querySelector('.btnReady_sohranit');
let otmena = document.querySelector('.btnReady');
let radios = document.querySelectorAll('input[type="radio"]');
// let redaktVopros = document.querySelector('.redakt_vopros');
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
let kolonka = document.querySelector('.kolonka');
let redactKartBtn;
let idPolz = localStorage.getItem('idPolz');
let nazvTest = localStorage.getItem('nazvTest');
let zaglText = document.querySelector('.zagl_text span');
zaglText.textContent = `${nazvTest}`;

cozdVoprosaPole();

function cozdVoprosaPole(questionNumber) {

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

    otmena.addEventListener('click', function () {
        window.location.href = "../pervichnoe/index.html";
    });

    sohranit.addEventListener('click', function () {

        for (let radio of radios) {
            if (radio.checked) {
                indexRadio = radio.value;
                if (indexRadio >= 1 && info1.length > 0 && info2.length > 0 && info3.length > 0 && info4.length > 0 && infoPole.length > 0) {

                    dannie.questionNumber = 1;
                    dannie.question = infoPole;
                    dannie.answerOptionText1 = info1;
                    dannie.answerOptionText2 = info2;
                    dannie.answerOptionText3 = info3;
                    dannie.answerOptionText4 = info4;
                    dannie.answerTrue = indexRadio;

                    serverPost(dannie);
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

    async function serverPost(dannie) {
        var playersRef = firebase.database().ref(`${idPolz}` + '/' + `${nazvTest}` + '/' + 1);
        await playersRef.set(dannie);
        window.location.href = "../cozdanie/index.html";
    }
}

function userRaznica () {
    var ref = firebase.database().ref(`${idPolz}` + "/");
    ref.on("value", async function (snapshot) {
        let arrInfo = await snapshot.val();

        // =========================================================
        let dlinUser = arrInfo.rezult.length - 1;
        let alarmUser = localStorage.getItem('alarm');
        if (dlinUser > alarmUser) {
            let raznica = dlinUser - alarmUser;
            console.log(raznica);
            newUzer.classList.remove('scritie');
            newUzer.textContent = `${raznica}`;
        }
        // ===============================================================

        
    }, function (error) {
        console.log("Error: " + error.code);
    });
}
userRaznica ();