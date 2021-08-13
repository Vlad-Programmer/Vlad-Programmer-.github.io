'use strict';

let rezTestDiv = document.querySelector('.rezTestDiv');
let otpravTestDiv = document.querySelector('.otpravTestDiv');
let sozdTestDiv = document.querySelector('.sozdTestDiv');
let konstTestDiv = document.querySelector('.konstTestDiv');
let exit = document.querySelector('.exit');
let knopDelVse = document.querySelector('.knopDelVse');

let menuKoteiner = document.querySelector('.menuKoteiner');
let rezTest = document.querySelector('.rezTest');
let sozdTest = document.querySelector('.sozdTest');
let konstTest = document.querySelector('.konstTest');

// ==============================

let exit2 = document.querySelector('.exit2');
// =====================================
let btnNazad = document.querySelector('.btnNazad');

// ==================================
let dark = document.querySelector('.dark');
let darkSwift = document.querySelector('.darkSwift');
let darkSwift2 = document.querySelector('.darkSwift2');
let arrow = document.querySelector('.arrow');
let darkOff = document.querySelector('.darkOff');
// ========================================

// =======================================
let helpDiv = document.querySelector('.helpDiv');
let help = document.querySelector('.help');
// ==========================================
let h4dlySozd = document.querySelector('.h4dlySozd');
let pokaNet = document.querySelector('.pokaNet');

if (localStorage.getItem('decoration') == 'white') {
    dark.classList.add('skrit');
    // dark.classList.remove('darkSwift');
    darkOff.classList.remove('skrit');
    // darkOff.classList.add('darkSwift');

    document.body.style.backgroundColor = "#f6f7f9";
    menuKoteiner.classList.add('darkNoMenu');
    rezTest.classList.add('darkNoText');
    sozdTest.classList.add('darkNoText');
    konstTest.classList.add('darkNoText');
    exit2.classList.add('darkNoText');
    help.classList.add('darkNoText');
    h4dlySozd.classList.add('darkNoZag');
    pokaNet.classList.add('darkNoZag');

    /* redaktVopros. classList.add('darkNo');
    zaglTextNo.classList.add('darkNoZag');
    text1.classList.add('darkNoZag');
    text2.classList.add('darkNoZag');
    text3.classList.add('darkNoZag');
    text4.classList.add('darkNoZag');
    iputViborPravdi.classList.add('darkNoZag');   */

}

darkSwift.addEventListener('click', e => {
    console.log(11111111);
    if (localStorage.getItem('decoration') == 'white') {
        localStorage.setItem('decoration', 'dark');
    } else if (localStorage.getItem('decoration') == 'dark') {
        localStorage.setItem('decoration', 'white');
    }
    /* else {
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
    }
    /* else {
           localStorage.setItem('decoration', 'white');
       } */
    window.location.reload();
});

sozdTestDiv.addEventListener('mouseover', (e) => {
    sozdTestDiv.classList.add('viborMenu');
});
sozdTestDiv.addEventListener('mouseout', (e) => {
    sozdTestDiv.classList.remove('viborMenu');
});

sozdTestDiv.addEventListener('click', (e) => {
    window.location.href = "../pervichnoe/index.html";
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

function pokazend() {
    if (window.pageYOffset < 500) {
        arrow.classList.add('skrit');
    }

    if (window.pageYOffset > 500) {
        arrow.classList.remove('skrit');
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


let mailUzer = localStorage.getItem('mailUzer');
exit2.textContent = `Выйти из аккаунта: ${mailUzer}`;



let kolonka = document.querySelector('.kolonka');
// let pokaNet = document.querySelector('.pokaNet');
let newUzer = document.querySelector('.newUzer');
let idPolz = localStorage.getItem('idPolz');
let xranil = JSON.parse(localStorage.getItem('delUzer'));

if (xranil == 0) {

} else {
    var playersRef = firebase.database().ref(`${idPolz}` + '/rezult/');
    playersRef.set(xranil);
    localStorage.setItem('delUzer', 0);
}

// const timeId = setTimeout (function () { 
otobrazgenieSpiska();
// },2000);

function otobrazgenieSpiska() {
    let kartochkaGotovo = document.querySelector('.kartochkaGotovo');
    let arrDlin;

    var ref = firebase.database().ref(`${idPolz}` + '/rezult/');
    ref.on("value", async function (snapshot) {
            arrDlin = await snapshot.val();
            // ==========================
            let dlinUser = arrDlin.length - 1;
            let alarmUser = localStorage.getItem('alarm');
            if (dlinUser > alarmUser) {
                let raznica = dlinUser - alarmUser;
                console.log(raznica);
                newUzer.classList.remove('skrit');
                newUzer.textContent = `${raznica}`;
            }

            console.log(arrDlin);
            let dlinUser2 = arrDlin.length - 1;
            console.log(dlinUser2);
            localStorage.setItem('alarm', dlinUser2);
            // =============================

            if (arrDlin.length == 1) {
                pokaNet.classList.remove('skrit');
                return;
            }
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
            (name, surname, telephone, mail, rezultTest) {
                this.questionGotovo = rezultTest;
                this.answerOptionText1Gotovo = name;
                this.answerOptionText2Gotovo = surname;
                this.answerOptionText3Gotovo = telephone;
                this.answerOptionText4Gotovo = mail;
            }

        newShablon() {
            let div = document.createElement('div');
            div.classList.add('.menu__item');
            div.innerHTML = `<div class="kartochkaGotovo">         
                
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
                    <button class="btn_answerDelitGotovo">удалить: ${this.answerOptionText2Gotovo}</button>
                    
                </div>
            </div>`;

            kolonka.after(div);

            if (localStorage.getItem('decoration') == 'white') {
                let kartochkaGotovo = document.querySelector('.kartochkaGotovo');
                kartochkaGotovo.classList.add('darkNo');
                // questionNumberGotovo.classList.add('darkNoZag');
            }

            let questionNumberSpan = document.querySelector('.questionNumberSpan');
            let questionGotovo = document.querySelector('.questionGotovo');
            let answerOptionText1Gotovo = document.querySelector('.answerOptionText1Gotovo');
            let answerOptionText2Gotovo = document.querySelector('.answerOptionText2Gotovo');
            let answerOptionText3Gotovo = document.querySelector('.answerOptionText3Gotovo');
            let answerOptionText4Gotovo = document.querySelector('.answerOptionText4Gotovo');
            let btnAnswerDelitGotovo = document.querySelector('.btn_answerDelitGotovo');
            let btnAnswerRedactGotovo = document.querySelector('.btn_answerRedactGotovo');
            let answerTrue = `${this.answerTrue}`;
            let ocenka = questionGotovo.innerHTML;
            ocenka = parseInt(ocenka.match(/\d+/));

            if (ocenka <= 60) {
                questionGotovo.classList.add('redTup');
                btnAnswerDelitGotovo.classList.add('redTupBtn');
            } else if (ocenka >= 61 && ocenka <= 84) {
                questionGotovo.classList.add('midle');
                btnAnswerDelitGotovo.classList.add('midleBtn');
            } else if (ocenka >= 85) {
                questionGotovo.classList.add('um');
                btnAnswerDelitGotovo.classList.add('umBtn');
            }

            btnAnswerDelitGotovo.addEventListener('click', (e) => {
                let w = e.target.innerHTML;
                w = w.split(" ").slice(1).join(" ");

                var ref = firebase.database().ref(`${idPolz}` + '/rezult/');
                let massiv;
                ref.on("value", async function (snapshot) {
                        massiv = await snapshot.val();
                        massiv = massiv.filter(function (obj) {
                            return obj.surname !== w;
                        });

                        /* console.log(massiv);
                        let dlinUser = massiv.length - 1;
                        console.log(dlinUser);
                        localStorage.setItem('alarm', dlinUser); */

                        let zapis = JSON.stringify(massiv);
                        localStorage.setItem('delUzer', zapis);
                        window.location.reload();
                    },
                    function (error) {
                        console.log("Error: " + error.code);
                    });
            });
        }
    }

    function posting(ii) {
        var ref = firebase.database().ref(`${idPolz}` + '/rezult/' + `${ii}`);

        ref.on("value", async function (snapshot) {
                let rezult = await snapshot.val();
                new KardQuestion(rezult.name, rezult.surname, rezult.telephone, rezult.mail, rezult.rezultTest).newShablon();
            },
            function (error) {
                console.log("Error: " + error.code);
            });
    }

    knopDelVse.addEventListener('click', (e) => {
        // let w = e.target.innerHTML;
        // w = w.split(" ").slice(1).join(" ");

        var ref = firebase.database().ref(`${idPolz}` + '/rezult/');
        let massiv;
        ref.on("value", async function (snapshot) {
                massiv = await snapshot.val();
                massiv = massiv.splice(0, 1);
                console.log(massiv);
                /* massiv = massiv.filter(function (obj) {
                    return obj.surname !== w;
                }); */

                /* console.log(massiv);
                let dlinUser = massiv.length - 1;
                console.log(dlinUser);
                localStorage.setItem('alarm', dlinUser); */

                let zapis = JSON.stringify(massiv);
                localStorage.setItem('delUzer', zapis);
                window.location.reload();
            },
            function (error) {
                console.log("Error: " + error.code);
            });
    });
}