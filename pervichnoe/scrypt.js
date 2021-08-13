'use strict';

let rezTestDiv = document.querySelector('.rezTestDiv');
let otpravTestDiv = document.querySelector('.otpravTestDiv');
let sozdTestDiv = document.querySelector('.sozdTestDiv');
let konstTestDiv = document.querySelector('.konstTestDiv');

let h4dlySozd = document.querySelector('.h4dlySozd');

let menuKoteiner = document.querySelector('.menuKoteiner');
let rezTest = document.querySelector('.rezTest');
let sozdTest = document.querySelector('.sozdTest');
let konstTest = document.querySelector('.konstTest');

let exit = document.querySelector('.exit');
let exit2 = document.querySelector('.exit2');
let dark = document.querySelector('.dark');
let darkSwift = document.querySelector('.darkSwift');
let darkSwift2 = document.querySelector('.darkSwift2');
let arrow = document.querySelector('.arrow');
let darkOff = document.querySelector('.darkOff');
let helpDiv = document.querySelector('.helpDiv');
let help = document.querySelector('.help');
let h2VahiTesti = document.querySelector('.h2VahiTesti');
let pokaNet = document.querySelector('.pokaNet');

let mailUzer = localStorage.getItem('mailUzer');
exit2.textContent = `Выйти из аккаунта: ${mailUzer}`;

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

    h4dlySozd.classList.add('darkNoZag');
    h2VahiTesti.classList.add('darkNoZag');
    pokaNet.classList.add('darkNoZag');
      

}

darkSwift.addEventListener('click', e => {
    console.log(11111111);
    if (localStorage.getItem('decoration') == 'white') {
        localStorage.setItem('decoration', 'dark');
    } else if (localStorage.getItem('decoration') == 'dark') {
        localStorage.setItem('decoration', 'white');
    } 
    window.location.reload();
});

darkSwift2.addEventListener('click', e => {
    console.log(222222222);
    if (localStorage.getItem('decoration') == 'white') {
        localStorage.setItem('decoration', 'dark');
    } else if (localStorage.getItem('decoration') == 'dark') {
        localStorage.setItem('decoration', 'white');
    } 
    window.location.reload();
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

rezTestDiv.addEventListener('mouseover', (e) => {
    rezTestDiv.classList.add('viborMenu');
});
rezTestDiv.addEventListener('mouseout', (e) => {
    rezTestDiv.classList.remove('viborMenu');
});

exit.addEventListener('mouseover', (e) => {
    exit.classList.add('viborMenu');
});
exit.addEventListener('mouseout', (e) => {
    exit.classList.remove('viborMenu');
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

rezTestDiv.addEventListener('click', (e) => {
    window.location.href = "../reiting/index.html";
});

let zzz = [{}, {
    answerOptionText1: "в лондоне",
    answerOptionText2: "в шоколаде",
    answerOptionText3: "в маями",
    answerOptionText4: "в дубае",
    answerTrue: "1",
    question: "Где мы?",
    questionNumber: 1
}];

let poluchenieId;
let infoVvodNovogoTesta;
let vvodNovogoTesta = document.querySelector('.vvodNovogoTesta');
let knopDobavTest = document.querySelector('.knopDobavTest');
// let pokaNet = document.querySelector('.pokaNet');
let newUzer = document.querySelector('.newUzer');
poluchenieId = localStorage.getItem('idPolz');


let xranil = JSON.parse(localStorage.getItem('delTest'));

if (xranil == 0) {

} else {
    var playersRef = firebase.database().ref(`${poluchenieId}` + "/");
    playersRef.set(xranil);
    localStorage.setItem('delTest', 0);
}

let arrDlina;
// const timeId = setTimeout(function (questionNumber) {
    otobrazgenieSpiska();
// }, 1000);

let arrInfo = [];
vvodNovogoTesta.addEventListener('input', (e) => {
    infoVvodNovogoTesta = vvodNovogoTesta.value;
    if (infoVvodNovogoTesta.length != 0) {
        knopDobavTest.classList.remove('gotovSkritie');
        knopDobavTest.addEventListener('click', function () {
            dobavNovogoTesta(infoVvodNovogoTesta);
        });
    } else if (infoVvodNovogoTesta.length == 0) {
        knopDobavTest.classList.add('gotovSkritie');
    }
});

function dobavNovogoTesta(infoVvodNovogoTesta) {
    var playersRef = firebase.database().ref(`${poluchenieId}` + "/" + `${infoVvodNovogoTesta}` + "/");
    playersRef.set(zzz);
    window.location.reload();
}

function otobrazgenieSpiska() {

    let kolonka = document.querySelector('.kolonka');
    let kartochkaGotovo = document.querySelector('.kartochkaGotovo');
    let arrDlin;
    let arrInfo;
    let obolochkaSpiska = document.querySelector('.obolochkaSpiska');

    var ref = firebase.database().ref(`${poluchenieId}` + "/");
    ref.on("value", async function (snapshot) {
        arrInfo = await snapshot.val();

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

        arrDlina = Object.keys(arrInfo).length;
        if (arrDlina == 1) {
            pokaNet.classList.remove('skrit');
            obolochkaSpiska.classList.add('skrit');
        }
        if (arrDlina >= 2) {

        }

        arrInfo = Object.keys(arrInfo);
        var index = arrInfo.indexOf("rezult");
        if (index >= 0) {
            arrInfo.splice(index, 1);
        }
        arrDlin = arrInfo.length;
        vizov(arrInfo, arrDlin);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    let ii = 0;

    function vizov(arrInfo, arrDlin) {
        do {
            let postPoryd = arrInfo[ii];
            posting(postPoryd);
            ii++;
        } while (ii < arrDlin);
    }

    class KardQuestion {
        constructor
            (postPoryd) {
                this.questionGotovo = postPoryd;
            }

        newShablon() {
            let div = document.createElement('div');
            div.classList.add('.menu__item');
            div.innerHTML = `<div class="kartochkaGotovo">    
            <h3 class="questionNumberGotovo">Тест:</h3>         
               
                <div class="questionGotovo">${this.questionGotovo}</div>
                
                <div class="btn_answer_flexGotovo">
                    <button class="btn_answerDelitGotovo">удалить: ${this.questionGotovo}</button>
                    <button class="btn_answerRedactGotovo">редактировать: ${this.questionGotovo}</button>
                </div>
                <hr class="razdelit">
                <h4 class="infoText">Если вам нужно, отправить этот тест испытуемому:<br>
                скопируйте текст в поле ниже и отравьте его в письме или в сообщении месенджера.<br>
                Как только испытуемый пройдёт тест, его результат появится в вашем личном кабинете в меню "результаты кандидатов"</h4>
                <div class="infoOtpravka">Для прохождения теста "${this.questionGotovo}" перейдите по ссылке:
                <br>https://www.candidate-analytics.com/test <br>
                Заполняете там анкету, после этого начнётся прохождение теста.<br>
                Вам понадобится "ключ" и "название теста" (скопируйте их и введите в соответствующие поля анкеты).
                <br>Тест: <b>${this.questionGotovo}</b><br>
                Ключ: <b>${poluchenieId}</b><br>
                Будьте внимательны при вводе! Лучше всего использовать "скопировать - вставить", что бы не ошибиться.</div>
            </div>`;

            kolonka.after(div);

            let btnAnswerDelitGotovo = document.querySelector('.btn_answerDelitGotovo');
            let btnAnswerRedactGotovo = document.querySelector('.btn_answerRedactGotovo');
            let answerTrue = `${this.answerTrue}`;

            let questionNumberGotovo = document.querySelector('.questionNumberGotovo');
            let infoText = document.querySelector('.infoText');

            if (localStorage.getItem('decoration') == 'white') {
                let kartochkaGotovo = document.querySelector('.kartochkaGotovo');
                kartochkaGotovo.classList.add('darkNo');
                questionNumberGotovo.classList.add('darkNoZag');
                infoText.classList.add('darkNoZag');
            }

            btnAnswerRedactGotovo.addEventListener('click', (e) => {
                let w = e.target.innerHTML;
                w = w.split(" ").slice(1).join(" ");

                var ref = firebase.database().ref(`${poluchenieId}` + "/" + `${w}`);
                ref.on("value", async function (snapshot) {
                    arrInfo = await snapshot.val();

                    if (arrInfo[1].answerOptionText1 == 'в лондоне') {
                        localStorage.setItem("nazvTest", w);
                        window.location.href = "../pervay/index.html";
                    } else {
                        localStorage.setItem("nazvTest", w);
                        window.location.href = "../cozdanie/index.html";
                    }
                }, function (error) {
                    console.log("Error: " + error.code);
                });
            });

            btnAnswerDelitGotovo.addEventListener('click', (e) => {
                let s = e.target.innerHTML;
                s = s.split(" ").slice(1).join(" ");

                var ref = firebase.database().ref(`${poluchenieId}` + "/");
                let massiv;
                ref.on("value", async function (snapshot) {
                        massiv = await snapshot.val();                        
                        delete massiv[s];

                        let zapis = JSON.stringify(massiv);
                        localStorage.setItem('delTest', zapis);
                        window.location.reload();
                    },
                    function (error) {
                        console.log("Error: " + error.code);
                    });
            });
        }
    }

    function posting(postPoryd) {
        new KardQuestion(postPoryd).newShablon();
    }
}