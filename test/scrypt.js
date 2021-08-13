'use strict';
window.addEventListener('DOMContentLoaded', function () {
    let checkReady = document.querySelector('.chekform input');
    let btnReady = document.querySelector('.btnReady');
    let warningBlock = document.querySelector('.warningScreen');
    let questionBlock = document.querySelector('.questionScreen');
    let vsegoVop = document.querySelector('.vsegoVop');
    let vremyaVop = document.querySelector('.vremyaVop');
    let questionIndex = 1;

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

    let vhodTest = document.querySelector('.vhodTest');
    let vvodInputTest = document.querySelector('.vvodInputTest');
    let vvodInputKey = document.querySelector('.vvodInputKey');
    let knopProverkiId = document.querySelector('.knopProverkiId');
    let neVse = document.querySelector('.neVse');
    let viOchib = document.querySelector('.viOchib');
    let znachenTest = 0;
    let znachenKey = 0;
    let anketa = document.querySelector('.anketa');

    knopProverkiId.addEventListener('click', e => {
        znachenTest = vvodInputTest.value;
        znachenKey = vvodInputKey.value;

        if (znachenTest.length == 0 || znachenKey.length == 0) {
            neVse.classList.remove('skritie');
            vvodInputTest.value = '';
            vvodInputKey.value = '';
            let timerInterval = setTimeout(function () {
                neVse.classList.add('skritie');
            }, 2500);

        } else {
            proverkaId();
        }
    });

    function proverkaId() {
        var ref = firebase.database().ref(`${znachenKey}` + '/' + `${znachenTest}` + '/');

        ref.on("value", async function (snapshot) {
            let otvet = await snapshot.val();

            if (otvet == null) {
                viOchib.classList.remove('skritie');
                vvodInputTest.value = '';
                vvodInputKey.value = '';
                let timerInterval = setTimeout(function () {
                    viOchib.classList.add('skritie');
                }, 3000);
            } else {
                vhodTest.classList.add('skritie');
                warningBlock.classList.remove('skritie');
                kolichestvoVopros();
            }
        }, function (error) {
            console.log("Error: " + error.code);
        });
    }

    let arrRezult;
    let testAnswers = [];

    function kolichestvoVopros() {
        var ref = firebase.database().ref(`${znachenKey}` + '/' + `${znachenTest}` + '/');

        ref.on("value", async function (snapshot) {
            let arrRezult3 = await snapshot.val();
            let arrDlin3 = arrRezult3.length - 1;
            vsegoVop.textContent = `${arrDlin3}`;
            vremyaVop.textContent = `${Math.round(arrDlin3*20/60)}`;
        }, function (error) {
            console.log("Error: " + error.code);
        });
    }

    btnReady.addEventListener('click', (e) => {
        e.preventDefault();

        if (btnReady.classList.contains('btnChange')) {
            warningBlock.classList.add('skritie');
            changeQuestion(questionIndex);
        }
    });

    checkReady.addEventListener('click', (e) => {
        btnReady.classList.add('btnChange');

        if (checkReady.checked == false) {
            btnReady.classList.remove('btnChange');
            return;
        }
    });

    btnReady.addEventListener('click', (e) => {
        e.preventDefault();
    });

    let arr = [];
    class KardQuestion {
        constructor
            (questionNumber, question, answerOptionText1, answerOptionText2, answerOptionText3, answerOptionText4) {
                this.questionNumber = questionNumber;
                this.question = question;
                this.answerOptionText1 = answerOptionText1;
                this.answerOptionText2 = answerOptionText2;
                this.answerOptionText3 = answerOptionText3;
                this.answerOptionText4 = answerOptionText4;
            }

        newShablon() {
            let div = document.createElement('div');
            div.classList.add('.menu__item');
            div.innerHTML = `                
            <h3 class="questionNumber" >Вопрос № <span>${this.questionNumber}</span></h3>
            <div class="question">${this.question}</div>
            <div class="answerOptionTextFlex">
                <div class="answerOptionText1">${this.answerOptionText1}</div>
                <div class="answerOptionText2">${this.answerOptionText2}</div>                
            </div>
            <div class="answerOptionTextFlex">
                <div class="answerOptionText3">${this.answerOptionText3}</div>
                <div class="answerOptionText4">${this.answerOptionText4}</div> 
            </div>
            <div class="btn_answer_flex">
                <button class="btn_answer">ОТПРАВИТЬ ОТВЕТ</button>
            </div>
            <div class="questionScreen">
            <div class="timer__block"><span id="seconds">20</span>        
                        </div>    
        </div>`;
            questionBlock.append(div);
            let answerOption1 = document.querySelector('.answerOptionText1');
            let answerOption2 = document.querySelector('.answerOptionText2');
            let answerOption3 = document.querySelector('.answerOptionText3');
            let answerOption4 = document.querySelector('.answerOptionText4');
            let btnAnswer = document.querySelector('.btn_answer');
            let i = 0;

            btnAnswer.addEventListener('click', (e) => {
                e.preventDefault();
            });

            answerOption1.addEventListener('mouseover', (e) => {
                answerOption1.classList.add('changingCursor');
            });
            answerOption2.addEventListener('mouseover', (e) => {
                answerOption2.classList.add('changingCursor');
            });
            answerOption3.addEventListener('mouseover', (e) => {
                answerOption3.classList.add('changingCursor');
            });
            answerOption4.addEventListener('mouseover', (e) => {
                answerOption4.classList.add('changingCursor');
            });

            answerOption1.addEventListener('click', (e) => {
                answerOption1.classList.add('choice');
                answerOption2.classList.remove('choice');
                answerOption3.classList.remove('choice');
                answerOption4.classList.remove('choice');
                btnAnswer.classList.add('choice');
                i = 1;
            });

            answerOption2.addEventListener('click', (e) => {
                answerOption2.classList.add('choice');
                answerOption1.classList.remove('choice');
                answerOption3.classList.remove('choice');
                answerOption4.classList.remove('choice');
                btnAnswer.classList.add('choice');
                i = 2;
            });

            answerOption3.addEventListener('click', (e) => {
                answerOption3.classList.add('choice');
                answerOption1.classList.remove('choice');
                answerOption2.classList.remove('choice');
                answerOption4.classList.remove('choice');
                btnAnswer.classList.add('choice');
                i = 3;
            });

            answerOption4.addEventListener('click', (e) => {
                answerOption4.classList.add('choice');
                answerOption1.classList.remove('choice');
                answerOption2.classList.remove('choice');
                answerOption3.classList.remove('choice');
                btnAnswer.classList.add('choice');
                i = 4;
            });

            btnAnswer.addEventListener('click', (e) => {
                e.preventDefault();
                if (btnAnswer.classList.contains('choice')) {
                    clearInterval(timerInterval);
                    div.remove();
                    arr.push(i);
                    questionIndex++;
                    changeQuestion(questionIndex);
                }
            });

            let timerInterval = setTimeout(function () {
                div.remove();
                arr.push(0);
                questionIndex++;
                changeQuestion(questionIndex);
            }, 20000);

            let secondsTimer = 20000;
            let seconds = secondsTimer / 1000;
            let timerDisplay = document.querySelector('.timer__block');

            function setClock() {
                seconds = seconds + 1;
                let timee = setInterval(obnovlenieClock, 1000);
                obnovlenieClock();

                function obnovlenieClock() {
                    if (seconds <= 13) {
                        timerDisplay.classList.add('timer__block_1');
                    }
                    if (seconds <= 7) {
                        timerDisplay.classList.remove('timer__block_1');
                        timerDisplay.classList.add('timer__block_2');
                    }
                    seconds = seconds - 1;
                    timerDisplay.innerHTML = `Таймер: ${ seconds }`;
                }
            }
            setClock();
        }
    }

    let indexNamber = 0;

    function posting(q) {
        indexNamber++;

        var ref = firebase.database().ref(`${znachenKey}` + '/' + `${znachenTest}` + '/' + `${indexNamber}`);
        ref.on("value", async function (snapshot) {
            let rezult = await snapshot.val();
            new KardQuestion(rezult.questionNumber, rezult.question, rezult.answerOptionText1, rezult.answerOptionText2, rezult.answerOptionText3, rezult.answerOptionText4).newShablon();
        }, function (error) {
            console.log("Error: " + error.code);
        });
    }

    let indexVop = 1;
    let testAnswers2 = [];
    let arrRezult2;

    function changeQuestion() {
        calculatingResult(arr);

        var ref = firebase.database().ref(`${znachenKey}` + '/' + `${znachenTest}` + '/');
        ref.on("value", async function (snapshot) {
            arrRezult2 = await snapshot.val();
            let arrDlin = arrRezult2.length;
            let z = 1;
            let i;
            testAnswers2.length = 0;
            do {
                i = arrRezult2[`${z}`].answerTrue;
                z++;
                arrDlin--;
                testAnswers2.push(i);
            } while (arrDlin > 1);

            let lengthAnswers = testAnswers2.length;
            pokaz(lengthAnswers);
            return testAnswers;
        }, function (error) {
            console.log("Error: " + error.code);
        });

        function pokaz(lengthAnswers) {
            if (questionIndex - 1 == lengthAnswers) {
                return;
            } else {

                if (questionIndex == `${indexVop}`) {
                    posting(questionIndex - 1);
                    indexVop++;
                }
            }
        }
    }

    let indexTruth = 0;

    function calculatingResult(arr) {
        var ref = firebase.database().ref(`${znachenKey}` + '/' + `${znachenTest}` + '/');

        ref.on("value", async function (snapshot) {
            arrRezult = await snapshot.val();
            let arrDlin = arrRezult.length;
            let z = 1;
            let i;
            do {
                i = arrRezult[`${z}`].answerTrue;
                z++;
                arrDlin--;
                testAnswers.push(i);
            } while (arrDlin > 1);
            srav(testAnswers);
            return testAnswers;
        }, function (error) {
            console.log("Error: " + error.code);
        });

        function srav(testAnswers) {
            let lengthAnswers = testAnswers.length;

            if (arr.length >= lengthAnswers) {
                testAnswers.forEach(function (item, i) {
                    if (testAnswers[i] == arr[i]) {
                        indexTruth++;
                    }
                });
                transmittingResultUser(indexTruth, lengthAnswers);
            } else {
                testAnswers.length = 0;
            }
        }

        function transmittingResultUser(indexTruth, lengthAnswers) {
            let resultForUser = Math.round((indexTruth / lengthAnswers) * 100);
            anketa.classList.remove('skritie');

            let nameAnketa = document.querySelector('.nameAnketa');
            let familAnketa = document.querySelector('.familAnketa');
            let telAnketa = document.querySelector('.telAnketa');
            let pochtaAnketa = document.querySelector('.pochtaAnketa');
            let chekAnketa = document.querySelector('.chekFlex input');
            let knopAnketi = document.querySelector('.knopAnketi');
            let neVseAnket = document.querySelector('.neVseAnket');
            let infoNameAnketa, infoFamilAnketa, infoTelAnketa, infoPochtaAnketa, infoChekAnketa;

            knopAnketi.addEventListener('click', e => {
                infoNameAnketa = nameAnketa.value;
                infoFamilAnketa = familAnketa.value;
                infoTelAnketa = telAnketa.value;
                infoPochtaAnketa = pochtaAnketa.value;
                infoChekAnketa = chekAnketa.checked;
                localStorage.setItem('nameUzerTest', infoNameAnketa);

                if (infoNameAnketa.length == 0 || infoFamilAnketa.length == 0 || infoTelAnketa.length == 0 || infoPochtaAnketa.length == 0 || infoChekAnketa == false) {

                    neVseAnket.classList.remove('skritie');
                    let timerInterval = setTimeout(function () {
                        neVseAnket.classList.add('skritie');
                    }, 2500);

                } else {

                    let dannie = {
                        name: `${infoNameAnketa}`,
                        surname: `${infoFamilAnketa}`,
                        telephone: `${infoTelAnketa}`,
                        mail: `${infoPochtaAnketa}`,
                        rezultTest: 'Тест ' + '"' + `${znachenTest}` + '": ' + `${resultForUser}` + '%'
                    };

                    var ref = firebase.database().ref(`${znachenKey}` + "/rezult/");
                    let massiv;
                    ref.on("value", async function (snapshot) {
                            massiv = await snapshot.val();
                            massiv.push(dannie);
                            let zapis = JSON.stringify(massiv);
                            localStorage.setItem('rezult', zapis);
                            localStorage.setItem('znachenTest', znachenTest);
                            localStorage.setItem('znachenKey', znachenKey);
                            window.location.href = "../finish/index.html";
                        },
                        function (error) {
                            console.log("Error: " + error.code);
                        });
                }
            });


            // https://api.telegram.org/bot1917051671:AAFn6dEmJtOrKjpufRq5opGkzxqXUp1kYV8/getUpdates  

            /* https://api.telegram.org/bot1917051671:AAFn6dEmJtOrKjpufRq5opGkzxqXUp1kYV8/sendMessage?chat_id=640983007&text=hi */


            /* const url = 'https://api.telegram.org/bot1917051671:AAFn6dEmJtOrKjpufRq5opGkzxqXUp1kYV8/sendMessage?chat_id=640983007&text=';
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", url + `${uzerName}` + " закончил тест. Результат: " + resultForUser + "%", true);
            xhttp.send(); */

        }
    }
});