'use strict';

let menuKoteiner = document.querySelector('.menuKoteiner');
let rezTestDiv = document.querySelector('.rezTestDiv');
let rezTest = document.querySelector('.rezTest');
let otpravTestDiv = document.querySelector('.otpravTestDiv');
let sozdTestDiv = document.querySelector('.sozdTestDiv');
let sozdTest = document.querySelector('.sozdTest');
let konstTestDiv = document.querySelector('.konstTestDiv');
let konstTest = document.querySelector('.konstTest');
let newUzer = document.querySelector('.newUzer');
// ==============================
let exit = document.querySelector('.exit');
let exit2 = document.querySelector('.exit2');

let mailUzer = localStorage.getItem('mailUzer');
exit2.textContent = `Выйти из аккаунта: ${mailUzer}`;
// =====================================
let btnNazad = document.querySelector('.btnNazad');

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

let zaglTextNo = document.querySelector('.zagl_text');

// ====================================

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
    zaglTextNo.classList.add('darkNoZag');
    text1.classList.add('darkNoZag');
    text2.classList.add('darkNoZag');
    text3.classList.add('darkNoZag');
    text4.classList.add('darkNoZag');
    iputViborPravdi.classList.add('darkNoZag');   

}

/* dark.classList.add('scritie');
dark.classList.remove('darkSwift');
darkOff.classList.remove('scritie');
darkOff.classList.add('darkSwift');

document.body.style.backgroundColor = "#f6f7f9";
menuKoteiner.classList.add('darkNoMenu');
rezTest.classList.add('darkNoText');
sozdTest.classList.add('darkNoText');
konstTest.classList.add('darkNoText');
exit2.classList.add('darkNoText');
zaglTextNo.classList.add('darkNoZag'); */

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

// ======================================

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

btnNazad.addEventListener('click', (e) => {
    window.location.href = "../pervichnoe/index.html";
});

function pokazend() {
    if (window.pageYOffset < 500) {
        arrow.classList.add('scritie');
    }

    if (window.pageYOffset > 500) {
        arrow.classList.remove('scritie');
        arrow.addEventListener('click', (e) => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        });
    }
}
window.addEventListener('scroll', pokazend);

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
    window.location.href = "../parol/index.html";
});

let non = document.querySelector('.non');
let sozdat = document.querySelector('.sozdat');
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
let xranil = JSON.parse(localStorage.getItem('delVop'));

if (xranil == 0) {

} else {
    var playersRef = firebase.database().ref(`${idPolz}` + '/' + `${nazvTest}` + '/');
    playersRef.set(xranil);
    localStorage.setItem('delVop', 0);
}

// const timeId = setTimeout(function (questionNumber) {
redaktVopros.classList.add('scritie');
otobrazgenieSpiska();
sozdat.classList.remove('scritie');

sozdat.addEventListener('click', (e) => {
    sozdat.classList.add('scritie');
    redaktVopros.classList.remove('scritie');
    let arrDlin;
    var ref = firebase.database().ref(`${idPolz}` + '/' + `${nazvTest}` + '/');

    ref.on("value", async function (snapshot) {
            arrDlin = await snapshot.val();
            arrDlin = arrDlin.length;
            questionNumber = arrDlin;
            cozdVoprosaPole(questionNumber);
        },
        function (error) {
            console.log("Error: " + error.code);
        });
});
// }, 10);

function cozdVoprosaPole(questionNumber) {
    let zagolovokVopros = document.querySelector('.zagolovok_vopros span');
    zagolovokVopros.textContent = `${questionNumber}`;

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
        window.location.reload();
    });

    sohranit.addEventListener('click', function () {

        for (let radio of radios) {
            if (radio.checked) {
                indexRadio = radio.value;

                if (indexRadio >= 1 && info1.length > 0 && info2.length > 0 && info3.length > 0 && info4.length > 0 && infoPole.length > 0) {

                    dannie.questionNumber = questionNumber;
                    dannie.question = infoPole;
                    dannie.answerOptionText1 = info1;
                    dannie.answerOptionText2 = info2;
                    dannie.answerOptionText3 = info3;
                    dannie.answerOptionText4 = info4;
                    dannie.answerTrue = indexRadio;

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

    async function serverPost(dannie, questionNumber) {
        var playersRef = firebase.database().ref(`${idPolz}` + '/' + `${nazvTest}` + '/' + `${questionNumber}`);
        await playersRef.set(dannie);
        window.location.reload();
    }
}

function otobrazgenieSpiska() {

    let kartochkaGotovo = document.querySelector('.kartochkaGotovo');
    let arrDlin;

    var ref = firebase.database().ref(`${idPolz}` + '/' + `${nazvTest}` + '/');
    ref.on("value", async function (snapshot) {
            arrDlin = await snapshot.val();
            arrDlin = arrDlin.length - 1;
            vizov(arrDlin);
        },
        function (error) {
            console.log("Error: " + error.code);
        });

    let ii = 1;

    function vizov(arrDlin) {

        do {
            posting(ii);
            ii++;
        } while (ii < arrDlin + 1);
    }

    class KardQuestion {
        constructor
            (questionNumber, question, answerOptionText1, answerOptionText2, answerOptionText3, answerOptionText4, answerTrue) {
                this.questionNumberSpan = questionNumber;
                this.questionGotovo = question;
                this.answerOptionText1Gotovo = answerOptionText1;
                this.answerOptionText2Gotovo = answerOptionText2;
                this.answerOptionText3Gotovo = answerOptionText3;
                this.answerOptionText4Gotovo = answerOptionText4;
                this.answerTrue = answerTrue;
            }

        newShablon() {
            let div = document.createElement('div');
            div.classList.add('.menu__item');
            div.innerHTML = `<div class="kartochkaGotovo">             
                <h3 class="questionNumberGotovo">Вопрос № <span class="questionNumberSpan" >${this.questionNumberSpan}</span></h3>
                <div class="questionGotovo">${this.questionGotovo}</div>
                <div class="answerOptionTextFlexGotovo">
                    <div class="answerOptionText1Gotovo">${this.answerOptionText1Gotovo}</div>
                    <div class="answerOptionText2Gotovo">${this.answerOptionText2Gotovo}</div>
                </div>
                <div class="answerOptionTextFlexGotovo">
                    <div class="answerOptionText3Gotovo">${this.answerOptionText3Gotovo}</div>
                    <div class="answerOptionText4Gotovo">${this.answerOptionText4Gotovo}</div>
                </div>
                <div class="btn_answer_flexGotovo">
                    <button class="btn_answerDelitGotovo"><span class="btnNevid" >_</span>удалить<span class="btnNevid" >${this.questionNumberSpan}</span></button>
                    <button class="btn_answerRedactGotovo"><span class="btnNevid" >_</span>редактировать<span class="btnNevid" >${this.questionNumberSpan}</span></button>
                </div>
            </div>`;

            kolonka.after(div);

            let questionNumberGotovo = document.querySelector('.questionNumberGotovo');
            let questionNumberSpan = document.querySelector('.questionNumberSpan');
            let questionGotovo = document.querySelector('.questionGotovo');
            let answerOptionText1Gotovo = document.querySelector('.answerOptionText1Gotovo');
            let answerOptionText2Gotovo = document.querySelector('.answerOptionText2Gotovo');
            let answerOptionText3Gotovo = document.querySelector('.answerOptionText3Gotovo');
            let answerOptionText4Gotovo = document.querySelector('.answerOptionText4Gotovo');
            let btnAnswerDelitGotovo = document.querySelector('.btn_answerDelitGotovo');
            let btnAnswerRedactGotovo = document.querySelector('.btn_answerRedactGotovo');
            let answerTrue = `${this.answerTrue}`;

            // ==========================
            if (localStorage.getItem('decoration') == 'white') {
                let kartochkaGotovo = document.querySelector('.kartochkaGotovo');
                kartochkaGotovo.classList.add('darkNo');
                questionNumberGotovo.classList.add('darkNoZag');
            }
            /* let kartochkaGotovo = document.querySelector('.kartochkaGotovo');           
            kartochkaGotovo.classList.add('darkNo');
            questionNumberGotovo.classList.add('darkNoZag'); */
            // ===========================

            if (questionNumberSpan.innerHTML == 1) {
                btnAnswerDelitGotovo.remove();
            }

            if (answerTrue == 1) {
                answerOptionText1Gotovo.classList.add('viborPolyTrue');
            } else if (answerTrue == 2) {
                answerOptionText2Gotovo.classList.add('viborPolyTrue');
            } else if (answerTrue == 3) {
                answerOptionText3Gotovo.classList.add('viborPolyTrue');
            } else if (answerTrue == 4) {
                answerOptionText4Gotovo.classList.add('viborPolyTrue');
            }

            btnAnswerRedactGotovo.addEventListener('click', (e) => {
                questionNumber = parseInt(e.target.innerHTML.match(/\d+/));
                redaktVopros.classList.remove('scritie');
                window.scrollTo({
                    top: 170,
                    left: 0,
                    behavior: "smooth"
                });
                cozdVoprosaPole(questionNumber);
            });

            btnAnswerDelitGotovo.addEventListener('click', (e) => {
                questionNumber = parseInt(e.target.innerHTML.match(/\d+/));

                var ref = firebase.database().ref(`${idPolz}` + '/' + `${nazvTest}` + '/');
                let massiv;
                ref.on("value", async function (snapshot) {
                        massiv = await snapshot.val();
                        let qwe = {};
                        massiv[0] = qwe;
                        massiv.splice(`${questionNumber}`, 1);
                        let ll = 0;
                        massiv.forEach(function (item, i) {
                            item.questionNumber = ll;
                            ll++;
                        });
                        massiv[0] = {};

                        let zapis = JSON.stringify(massiv);
                        localStorage.setItem('delVop', zapis);
                        window.location.reload();
                    },
                    function (error) {
                        console.log("Error: " + error.code);
                    });
            });
        }
    }

    function posting(ii) {
        var ref = firebase.database().ref(`${idPolz}` + '/' + `${nazvTest}` + '/' + `${ii}`);

        ref.on("value", async function (snapshot) {
                let rezult = await snapshot.val();
                new KardQuestion(rezult.questionNumber, rezult.question, rezult.answerOptionText1, rezult.answerOptionText2, rezult.answerOptionText3, rezult.answerOptionText4, rezult.answerTrue).newShablon();
            },
            function (error) {
                console.log("Error: " + error.code);
            });
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

