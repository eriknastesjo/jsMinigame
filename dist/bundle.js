/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./kmom10/js/figConstruct.js":
/*!***********************************!*\
  !*** ./kmom10/js/figConstruct.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fig": () => (/* binding */ Fig)
/* harmony export */ });

class Fig {
    /**
 * Creates a figure to draw into a parent element.
 * @param  {} cellPos The id of the parent element, either a string or a number
 * @param  {string} color Eg "black" or "#4a99b4"
 * @param  {string} shape Choose "square", "rectange", "circle" or "triangle". Will produce square as default.
*/
    constructor (cellPos, color, shape) {
        this.cellPos = cellPos;
        this.color = color;

        let borderRadius = 0;
        if (shape === "circle") {
            borderRadius = "50%";
        }
        let clipPath = "none";
        if (shape === "triangle") {
            clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
        }
        let width = "24px";
        if (shape === "rectangle") {
            width = "18px";
        }

        this.draw = function () {
            const fig = document.createElement("div");

            fig.classList = "fig non-clickable";

            fig.style.width = "24px";
            fig.style.margin = "auto";

            fig.style.height = width;
            fig.style.backgroundColor = this.color;
            fig.style.borderRadius = borderRadius;
            fig.style.clipPath = clipPath;

            document.getElementById(this.cellPos).appendChild(fig);
        };
    }
}




/***/ }),

/***/ "./kmom10/js/main.js":
/*!***************************!*\
  !*** ./kmom10/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextStep": () => (/* binding */ nextStep)
/* harmony export */ });
/* harmony import */ var _metaScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metaScore */ "./kmom10/js/metaScore.js");
/* harmony import */ var _startmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startmenu */ "./kmom10/js/startmenu.js");
/* harmony import */ var _test1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test1 */ "./kmom10/js/test1.js");
/* harmony import */ var _test2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test2 */ "./kmom10/js/test2.js");
/* harmony import */ var _test3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test3 */ "./kmom10/js/test3.js");
/* harmony import */ var _test4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test4 */ "./kmom10/js/test4.js");
/* harmony import */ var _test5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test5 */ "./kmom10/js/test5.js");








let count = 0;

nextStep();
// test1.init();
// test2.init();
// test3.init();
// test4.init();
// test5.init();
// showMetaScore();

/**
 * Will go to next test
 */
function nextStep () {
    count++;
    switch (count) {
    case 1:
        (0,_startmenu__WEBPACK_IMPORTED_MODULE_1__.presentIntroduction)();
        break;
    case 2:
        _test1__WEBPACK_IMPORTED_MODULE_2__.test1.init();
        break;
    case 3:
        _test2__WEBPACK_IMPORTED_MODULE_3__.test2.init();
        break;
    case 4:
        _test3__WEBPACK_IMPORTED_MODULE_4__.test3.init();
        break;
    case 5:
        _test4__WEBPACK_IMPORTED_MODULE_5__.test4.init();
        break;
    case 6:
        _test5__WEBPACK_IMPORTED_MODULE_6__.test5.init();
        break;
    case 7:
        (0,_metaScore__WEBPACK_IMPORTED_MODULE_0__.showMetaScore)();
        break;
    default:
        break;
    }
}

window.reset = function () {
    switch (count) {
    case 2:
        _test1__WEBPACK_IMPORTED_MODULE_2__.test1.reset();
        break;
    case 3:
        _test2__WEBPACK_IMPORTED_MODULE_3__.test2.reset();
        break;
    case 4:
        _test3__WEBPACK_IMPORTED_MODULE_4__.test3.reset();
        break;
    case 5:
        _test4__WEBPACK_IMPORTED_MODULE_5__.test4.reset();
        break;
    case 6:
        _test5__WEBPACK_IMPORTED_MODULE_6__.test5.reset();
        break;
    default:
        break;
    }
};




/***/ }),

/***/ "./kmom10/js/metaScore.js":
/*!********************************!*\
  !*** ./kmom10/js/metaScore.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToMetaScore": () => (/* binding */ addToMetaScore),
/* harmony export */   "showMetaScore": () => (/* binding */ showMetaScore)
/* harmony export */ });

let metaScore = 0;

/**
 * Collects score from all tests that will be presented in the end.
 * @param  {} scoreToAdd
 */
function addToMetaScore (scoreToAdd) {
    metaScore += scoreToAdd;
}

/**
 * End of tests, shows test result
 */
function showMetaScore () {
    const title = document.createElement("h1");
    const instruction = document.createElement("p");
    const instruction2 = document.createElement("p");
    const workTitle = document.createElement("p");
    const instruction3 = document.createElement("p");

    const fullScore = 53;

    title.innerHTML = "Thank you for your cooperation";
    instruction.innerHTML = "Your final score is " + metaScore + "/" + fullScore;

    instruction2.innerHTML = "Based on this data you are most suited to work as...";

    if (metaScore > fullScore * 0.8) {
        workTitle.innerHTML = "LEAD SCINCE OFFICER";
    } else if (metaScore > fullScore * 0.5) {
        workTitle.innerHTML = "GUARD";
    } else if (metaScore > fullScore * 0.3) {
        workTitle.innerHTML = "LAB RAT";
    } else {
        workTitle.innerHTML = "TOILET PAPER";
    }

    workTitle.style.visibility = "hidden";

    instruction3.innerHTML = "Stand by to get your first assignment.";

    title.classList = "title";
    instruction.classList = "instruction";
    instruction2.classList = "instruction";
    workTitle.classList = "instruction";
    instruction3.classList = "instruction";

    document.getElementById("content").appendChild(title);
    document.getElementById("content").appendChild(instruction);
    document.getElementById("content").appendChild(instruction2);
    document.getElementById("content").appendChild(workTitle);
    document.getElementById("content").appendChild(instruction3);

    // Timer
    setTimeout(function () {
        workTitle.style.visibility = "visible";
    }, 1000);
}




/***/ }),

/***/ "./kmom10/js/startmenu.js":
/*!********************************!*\
  !*** ./kmom10/js/startmenu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "presentIntroduction": () => (/* binding */ presentIntroduction)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./kmom10/js/main.js");


/**
 * Presents introduction before all tests start.
 */
function presentIntroduction () {
    const title = document.createElement("h1");
    const instruction = document.createElement("p");
    const instruction2 = document.createElement("p");
    const beginTestButton = document.createElement("p");

    title.innerHTML = "Welcome subject #160053";
    instruction.innerHTML = "Your intelligence will now be evaluated with a series of tests designed here on Black Mesa.";
    instruction2.innerHTML = "Please take a deep breath and push the button when you are ready.";
    beginTestButton.innerHTML = "BEGIN";

    title.classList = "title";
    instruction.classList = "instruction";
    instruction.id = "instruction";
    instruction2.classList = "instruction";
    instruction2.id = "instruction2";
    beginTestButton.classList = "button";

    beginTestButton.addEventListener("click", function (event) {
        (0,_main__WEBPACK_IMPORTED_MODULE_0__.nextStep)();
        document.getElementsByClassName("title")[0].remove();
        document.getElementById("instruction").remove();
        document.getElementById("instruction2").remove();
        event.target.remove();
    });

    document.getElementById("content").appendChild(title);
    document.getElementById("content").appendChild(instruction);
    document.getElementById("content").appendChild(instruction2);
    document.getElementById("content").appendChild(beginTestButton);
}




/***/ }),

/***/ "./kmom10/js/test1.js":
/*!****************************!*\
  !*** ./kmom10/js/test1.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test1": () => (/* binding */ test1)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./kmom10/js/main.js");
/* harmony import */ var _metaScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metaScore */ "./kmom10/js/metaScore.js");



let question = null;
let nextButton = null;

let current = 0;

let score = 0;

/**
 * Quiz test
 */
const test1 = {

    allQuestions: {
        1: "Which one of the three is least like the other two?",
        2: "Mary, who is 16 years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
        3: "Which one of the three choices makes the best comparison? PEACH is to HCAEP as 46251 is to:",
        4: "How can you drop a raw egg onto a concrete floor without cracking it?",
        5: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?"
    },

    ansBoxList: [
        1,
        2,
        3
    ],

    ansTxt: {

        1: {
            1: "Snake",
            2: "20",
            3: "25631",
            4: "The egg is made of steel",
            5: "True"
        },

        2: {
            1: "Dog",
            2: "24",
            3: "26451",
            4: "I catch it before it hits the floor",
            5: "False"
        },

        3: {
            1: "Mouse",
            2: "25",
            3: "15264",
            4: "Concrete floors are very hard to crack",
            5: "What?"
        }
    },

    correntAnswers: {
        1: 1,
        2: 2,
        3: 3,
        4: 3,
        5: 1
    },

    /**
     * Will give introductory information about the test.
     */
    init: function () {
        const title = document.createElement("h1");
        const instruction = document.createElement("p");
        const beginTestButton = document.createElement("p");

        title.innerHTML = "Test 1";
        instruction.innerHTML = "You will be presented with five multiple choice questions. There are three possible answers to each question. Please choose the one you think is correct.";
        beginTestButton.innerHTML = "START";

        title.classList = "title";
        instruction.classList = "instruction";
        beginTestButton.classList = "button";

        beginTestButton.addEventListener("click", function (event) {
            test1.createTable();
            document.getElementsByClassName("title")[0].remove();
            document.getElementsByClassName("instruction")[0].remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(instruction);
        document.getElementById("content").appendChild(beginTestButton);
    },

    /**
     * Creates the test. The table contains the three possible answers for each question.
     */
    createTable: function () {
        // Table
        const tbl = document.createElement("table");
        tbl.id = "ans-table";

        // Question
        question = document.createElement("h1");
        question.id = "questions-test1";

        // Answers  (kommer automatiskt skapa en tbody)
        const row = tbl.insertRow();
        for (let i = 0; i < this.ansBoxList.length; i++) {
            this.ansBoxList[i] = row.insertCell(i);
            this.ansBoxList[i].classList = "ansBox clickable";
        }

        // Set Permanent EventListeners
        for (let i = 0; i < this.ansBoxList.length; i++) {
            this.ansBoxList[i].addEventListener("click", revealCorrect);
            this.ansBoxList[i].addEventListener("click", showNextButton);
        }

        // NextButton
        nextButton = document.createElement("p");
        nextButton.classList = "button";
        nextButton.addEventListener("click", nextQuestion);
        nextButton.innerHTML = "NEXT";
        nextButton.style.visibility = "hidden";

        // Create
        document.getElementById("content").appendChild(question);
        document.getElementById("content").appendChild(tbl);
        document.getElementById("content").appendChild(nextButton);

        // Initiate     // maybe delete later?
        this.nextQuestion();
    },

    /**
     * Set appropriate EventListeners (correct vs incorrect ansBoxes)
     */
    setListerners: function () {
        for (let i = 0; i < this.ansBoxList.length; i++) {
            if (this.correntAnswers[current] === i + 1) {
                this.ansBoxList[i].addEventListener("click", clickedCorrect);
            } else {
                this.ansBoxList[i].addEventListener("click", turnRed);
            }
            this.ansBoxList[i].addEventListener("click", removeAllEListerners);
        }
    },

    /**
     * Adds score that will be added to meta score at the end
     * @param  {number} scoreToAdd
     */
    addScore: function (scoreToAdd) {
        score += scoreToAdd;
    },

    /**
     * Will present next question and possible answers. If five questions has been presented it will instead call function to end test.
     */
    nextQuestion: function () {
        current++;
        if (current <= 5) {
            question.innerHTML = this.allQuestions[current];
            for (let i = 0; i < this.ansBoxList.length; i++) {
                this.ansBoxList[i].innerHTML = this.ansTxt[i + 1][current];
                this.ansBoxList[i].style.backgroundColor = "white";
                this.ansBoxList[i].style.color = "black";
            }
            this.setListerners();
        } else {
            this.finishTest();
        }
    },

    /**
     * Ends the test and presents the ending score that will be added to meta score
     */
    finishTest: function () {
        document.getElementById("ans-table").remove();
        document.getElementById("questions-test1").remove();
        nextButton.remove();

        const title = document.createElement("h1");
        const finalMessage = document.createElement("p");
        const finishButton = document.createElement("p");

        title.innerHTML = "Test Completed";
        finalMessage.innerHTML = "Score: " + score + "/15";
        finishButton.innerHTML = "FINISH";

        title.classList = "title";
        finalMessage.classList = "instruction";
        finishButton.classList = "button";

        title.id = "title-test1";
        finalMessage.id = "instruction-test1";
        finishButton.id = "finishbutton-test1";

        finishButton.addEventListener("click", function (event) {
            (0,_metaScore__WEBPACK_IMPORTED_MODULE_1__.addToMetaScore)(score);
            (0,_main__WEBPACK_IMPORTED_MODULE_0__.nextStep)();
            document.getElementById("title-test1").remove();
            document.getElementById("instruction-test1").remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(finalMessage);
        document.getElementById("content").appendChild(finishButton);
    },

    /**
     * Super secret reset function. For cheaters only.
     */
    reset: function () {
        current = 0;
        score = 0;
        document.getElementById("content").remove();
        const newContentDiv = document.createElement("div");
        newContentDiv.id = "content";
        document.getElementsByTagName("body")[0].appendChild(newContentDiv);
        this.init();
    }

};

/*   --- EVENT LISTENERS ---   */

/**
 * EventListener funtion. Will make "nextButton" visible.
 */
function showNextButton () {
    nextButton.style.visibility = "visible";
}

/**
 * EventListener function. Turn the correct ansBox green.
 */
function revealCorrect () {
    test1.ansBoxList[test1.correntAnswers[current] - 1].style.backgroundColor = "green";
    test1.ansBoxList[test1.correntAnswers[current] - 1].style.color = "white";
}

/**
 * EventListener function. Turn own element red.
 */
function turnRed (event) {
    event.target.style.backgroundColor = "red";
}

/**
 * EventListener function. Add scores.
 */
function clickedCorrect () {
    test1.addScore(3);
}

/**
 * EventListener function. Removes several EventListeners ("clickedCorrect", "turnRed" and "removeAllEListeners") from all the ansBoxes.
 */
function removeAllEListerners () {
    for (let i = 0; i < test1.ansBoxList.length; i++) {
        test1.ansBoxList[i].removeEventListener("click", clickedCorrect);
        test1.ansBoxList[i].removeEventListener("click", turnRed);
        test1.ansBoxList[i].removeEventListener("click", removeAllEListerners);
    }
}

/**
 * EventListener function. Hides own element and go to next question.
 */
function nextQuestion (event) {
    event.target.style.visibility = "hidden";
    test1.nextQuestion();
}




/***/ }),

/***/ "./kmom10/js/test2.js":
/*!****************************!*\
  !*** ./kmom10/js/test2.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test2": () => (/* binding */ test2)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./kmom10/js/main.js");
/* harmony import */ var _metaScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metaScore */ "./kmom10/js/metaScore.js");



let fizzbuzzList = [];
let nextButton = null;

let lastNum = 0;
let correctAns = "";

let score = 0;

let count = 0;

/**
 * Fizz Buzz test
 */
const test2 = {

    ansBoxList: [
        1,
        2,
        3,
        4
    ],

    /**
     * Will give introductory information about the test.
     */
    init: function () {
        const title = document.createElement("h1");
        const instruction = document.createElement("p");
        const beginTestButton = document.createElement("p");

        title.innerHTML = " Test 2";
        instruction.innerHTML = "You will be presented with three sequences of numbers. There is a pattern where some numbers are replaced by either 'fizz', 'buzz' or 'fizz buzz'. Given the pattern, try to figure out what should be next in the sequence. ";
        beginTestButton.innerHTML = "START";

        title.classList = "title";
        instruction.classList = "instruction";
        beginTestButton.classList = "button";

        beginTestButton.addEventListener("click", function (event) {
            test2.createFizzBuzz();
            document.getElementsByClassName("title")[0].remove();
            document.getElementsByClassName("instruction")[0].remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(instruction);
        document.getElementById("content").appendChild(beginTestButton);
    },

    /**
    * Creates the test. The table contains the four possible answers for each question/sequence of numbers.
    */
    createFizzBuzz: function () {
        // Table
        const tbl = document.createElement("table");
        tbl.id = "ans-table";

        // Question
        const question = document.createElement("h1");
        question.id = "questions-test2";

        // Answers  (kommer automatiskt skapa en tbody)
        const row = tbl.insertRow();
        for (let i = 0; i < this.ansBoxList.length; i++) {
            this.ansBoxList[i] = row.insertCell(i);
            this.ansBoxList[i].classList = "ansBox clickable";
        }

        // Set innerHTML
        this.randFizzBuzzSequece();
        const str = fizzbuzzList.join(", ");
        question.innerHTML = str + ",… What is next?";
        this.ansBoxList[0].innerHTML = "fizz";
        this.ansBoxList[1].innerHTML = "buzz";
        this.ansBoxList[2].innerHTML = "fizz buzz";
        this.ansBoxList[3].innerHTML = lastNum;

        // Set Permanent EventListeners
        for (let i = 0; i < this.ansBoxList.length; i++) {
            this.ansBoxList[i].addEventListener("click", revealCorrect);
            this.ansBoxList[i].addEventListener("click", showNextButton);
        }
        this.setListerners();

        // NextButton
        nextButton = document.createElement("p");
        nextButton.classList = "button";
        nextButton.addEventListener("click", nextSequence);
        nextButton.innerHTML = "NEXT";
        nextButton.style.visibility = "hidden";

        // Create
        document.getElementById("content").appendChild(question);
        document.getElementById("content").appendChild(tbl);
        document.getElementById("content").appendChild(nextButton);
    },

    /**
     * Creates the Fizz Buzz sequence
     */
    randFizzBuzzSequece: function () {
        const firstNum = Math.floor((Math.random() * 93) + 1);
        fizzbuzzList = [];
        for (let i = 0; i <= 6; i++) {
            let num = firstNum + i;
            if (i > 5) {
                lastNum = num;
            }
            if (num % 3 === 0 && num % 5 === 0) {
                num = "fizz buzz";
            } else if (num % 3 === 0) {
                num = "fizz";
            } else if (num % 5 === 0) {
                num = "buzz";
            }
            if (i < 6) {
                fizzbuzzList.push(num);
            } else {
                correctAns = num;
            }
        }
    },

    /**
     * Set appropriate EventListeners (correct vs incorrect ansBoxes)
     */
    setListerners: function () {
        for (let i = 0; i < this.ansBoxList.length; i++) {
            if (this.ansBoxList[i].innerHTML === correctAns.toString()) {
                this.ansBoxList[i].addEventListener("click", clickedCorrect);
            } else {
                this.ansBoxList[i].addEventListener("click", turnRed);
            }
            this.ansBoxList[i].addEventListener("click", removeAllEListerners);
        }
    },

    /**
     * Reveals correct ansBox by turning it green
     */
    revealCorrect: function () {
        for (let i = 0; i < this.ansBoxList.length; i++) {
            if (this.ansBoxList[i].innerHTML === correctAns.toString()) {
                this.ansBoxList[i].style.backgroundColor = "green";
                this.ansBoxList[i].style.color = "white";
            }
        }
    },

    /**
     * Adds score that will be added to meta score at the end
     * @param  {number} scoreToAdd
     */
    addScore: function (scoreToAdd) {
        score += scoreToAdd;
    },

    /**
     * Will remove elements that contain the Fizz Buzz game
     */
    deleteFizzBuzz: function () {
        document.getElementById("ans-table").remove();
        document.getElementById("questions-test2").remove();
    },

    /**
     * Ends the test and presents the ending score that will be added to meta score
     */
    finishTest: function () {
        nextButton.remove();

        const title = document.createElement("h1");
        const finalMessage = document.createElement("p");
        const finishButton = document.createElement("p");

        title.innerHTML = "Test Completed";
        finalMessage.innerHTML = "Score: " + score + "/9";
        finishButton.innerHTML = "FINISH";

        title.classList = "title";
        finalMessage.classList = "instruction";
        finishButton.classList = "button";

        title.id = "title-test2";
        finalMessage.id = "instruction-test2";
        finishButton.id = "finishbutton-test2";

        finishButton.addEventListener("click", function (event) {
            (0,_metaScore__WEBPACK_IMPORTED_MODULE_1__.addToMetaScore)(score);
            (0,_main__WEBPACK_IMPORTED_MODULE_0__.nextStep)();
            document.getElementById("title-test2").remove();
            document.getElementById("instruction-test2").remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(finalMessage);
        document.getElementById("content").appendChild(finishButton);
    },

    /**
     * Super secret reset function. For cheaters only.
     */
    reset: function () {
        count = 0;
        score = 0;
        document.getElementById("content").remove();
        const newContentDiv = document.createElement("div");
        newContentDiv.id = "content";
        document.getElementsByTagName("body")[0].appendChild(newContentDiv);
        this.init();
    }
};

// --- ADD EVENT LISTENERS ---

/**
 * EventListener funtion. Will make "nextButton" visible.
 */
function showNextButton () {
    nextButton.style.visibility = "visible";
}

/**
 * EventListener funtion. Will present next sequence of Fizz Buzz. If three sequences have been presented it will end the game by calling finishTest instead.
 */
function nextSequence (event) {
    count++;
    test2.deleteFizzBuzz();
    if (count <= 2) {
        test2.createFizzBuzz();
    } else {
        test2.finishTest();
    }
    event.target.remove();
}

/**
 * EventListener funtion. Will call function to reveal correct ansBox.
 */
function revealCorrect () {
    test2.revealCorrect();
}

/**
 * EventListener funtion. Will turn own element red.
 */
function turnRed (event) {
    event.target.style.backgroundColor = "red";
}

/**
 * EventListener funtion. Will add score by calling addScore function
 */
function clickedCorrect () {
    test2.addScore(3);
}

/**
 * EventListener function. Removes several EventListeners ("clickedCorrect", "turnRed" and "removeAllEListeners") from all the ansBoxes.
 */
function removeAllEListerners () {
    for (let i = 0; i < test2.ansBoxList.length; i++) {
        test2.ansBoxList[i].removeEventListener("click", clickedCorrect);
        test2.ansBoxList[i].removeEventListener("click", turnRed);
        test2.ansBoxList[i].removeEventListener("click", removeAllEListerners);
    }
}




/***/ }),

/***/ "./kmom10/js/test3.js":
/*!****************************!*\
  !*** ./kmom10/js/test3.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test3": () => (/* binding */ test3)
/* harmony export */ });
/* harmony import */ var _figConstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figConstruct */ "./kmom10/js/figConstruct.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./kmom10/js/main.js");
/* harmony import */ var _metaScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metaScore */ "./kmom10/js/metaScore.js");




let question = null;
let correctOrderTxt = null;
let nextButton = null;
let finished = false;

const fig1 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "blue", "square");
const fig2 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(1, "gold", "circle");
const fig3 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(2, "magenta", "triangle");
const fig4 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(3, "brown", "rectangle");
const fig5 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(4, "cyan", "triangle");
const fig6 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(5, "orange", "square");
const fig7 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(6, "red", "triangle");
const fig8 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(7, "purple", "square");
const fig9 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(8, "green", "circle");
const fig10 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(9, "lime", "rectangle");

const figList = [fig1, fig2, fig3, fig4, fig5, fig6, fig7, fig8, fig9, fig10];

let count = 0;

let score = 0;

/**
 * Memory test
 */
const test3 = {

    ansBoxList: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ],

    correctOrder: [
        6,
        3,
        1,
        0,
        4,
        5,
        8,
        7,
        9,
        2
    ],

    /**
     * Will give introductory information about the test.
     */
    init: function () {
        const title = document.createElement("h1");
        const instruction = document.createElement("p");
        const beginTestButton = document.createElement("p");

        title.innerHTML = "Test 3";
        instruction.innerHTML = "You will be presented with 10 figures. The figures differ in color and shape. Below the figures you will see a list. Your task is to click on the figures in order according to that list, e.g. '1. Brown Triangle, 2. Yellow Circle ...'.You have 15 seconds to finish the test. If you click on the wrong figure the test ends.";
        beginTestButton.innerHTML = "START";

        title.classList = "title";
        instruction.classList = "instruction";
        beginTestButton.classList = "button";

        beginTestButton.addEventListener("click", function (event) {
            test3.createTable();
            document.getElementsByClassName("title")[0].remove();
            document.getElementsByClassName("instruction")[0].remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(instruction);
        document.getElementById("content").appendChild(beginTestButton);
    },

    /**
     * Creates the test. The table contains the ten figures. Also adds a timer.
     */
    createTable: function () {
        // Table
        const tbl = document.createElement("table");
        tbl.id = "ans-table";

        // Question
        question = document.createElement("h1");
        question.innerHTML = "Timer has started<br><br>";
        question.id = "questions-test3";

        // Insert two rows with five columns each
        const row = tbl.insertRow();
        const row2 = tbl.insertRow();

        for (let i = 0; i < 5; i++) {
            this.ansBoxList[i] = row.insertCell();
            this.ansBoxList[i].classList = "box-square clickable";
            this.ansBoxList[i].id = i;
        }
        for (let i = 5; i < 10; i++) {
            this.ansBoxList[i] = row2.insertCell();
            this.ansBoxList[i].classList = "box-square clickable";
            this.ansBoxList[i].id = i;
        }

        // Correct Order Txt
        correctOrderTxt = document.createElement("p");
        correctOrderTxt.innerHTML = "1. red triangle, 2. brown rectangle, 3. yellow circle, 4. blue square, 5. cyan triangle, 6. orange square, 7. green circle, 8. purple square, 9 lime rectangle";
        correctOrderTxt.id = "correctOrderTxt";

        // Next Button
        nextButton = document.createElement("p");
        nextButton.classList = "button";
        nextButton.addEventListener("click", this.finishTest);
        nextButton.innerHTML = "NEXT";
        nextButton.style.visibility = "hidden";

        // Create
        document.getElementById("content").appendChild(question);
        document.getElementById("content").appendChild(tbl);
        document.getElementById("content").appendChild(nextButton);
        document.getElementById("content").appendChild(correctOrderTxt);

        // Draw figures
        for (let i = 0; i < this.ansBoxList.length; i++) {
            figList[i].draw();
        }

        // Set listeners
        this.setListerners();

        // Timer
        setTimeout(function () {
            if (finished === false) {
                test3.deleteAllFigs();
                test3.timesUp();
            }
        }, 15000);
    },

    /**
     * Set the same EventListeners to all ansBoxes.
     */
    setListerners: function () {
        for (let i = 0; i < this.ansBoxList.length; i++) {
            this.ansBoxList[i].addEventListener("click", checkIfCorrect);
        }
    },

    /**
     * Delete all figures.
     */
    deleteAllFigs: function () {
        const figsToDelete = [];
        for (const i of document.getElementsByClassName("fig")) {
            figsToDelete.push(i);
            // i.remove(); // går ej, då försvinner bara hälften!
        }
        for (const i of figsToDelete) {
            i.remove();
        }
    },

    /**
     * Adds score that will be added to meta score at the end.
     * @param  {number} scoreToAdd
     */
    addScore: function (scoreToAdd) {
        score += scoreToAdd;
    },

    /**
     * Game Over. Is called when player chooses an incorrect ansBox.
     */
    lostGame: function () {
        question.innerHTML = "Game Over<br><br>";
        for (const i of this.ansBoxList) {
            if (i.id !== "correct") {
                i.style.backgroundColor = "red";
                i.classList = "box-square"; // cursorstyle not clickable
                i.removeEventListener("click", checkIfCorrect);
            }
        }
        correctOrderTxt.style.visibility = "hidden";
        nextButton.style.visibility = "visible";
    },

    /**
     * Game Over. Is called if time runs out.
     */
    timesUp: function () {
        question.innerHTML = "Time is up<br><br>";
        for (const i of this.ansBoxList) {
            if (i.id !== "correct") {
                i.style.backgroundColor = "red";
                i.classList = "box-square"; // cursorstyle not clickable
                i.removeEventListener("click", checkIfCorrect);
            }
        }
        correctOrderTxt.style.visibility = "hidden";
        nextButton.style.visibility = "visible";
    },

    /**
     * Game Over. Is called if player aces the test.
     */
    cheater: function () {
        question.innerHTML = "Finished<br><br>";
        correctOrderTxt.style.visibility = "hidden";
        nextButton.style.visibility = "visible";
        finished = true;
    },

    /**
     * Ends the test and presents the ending score that will be added to meta score
     */
    finishTest: function () {
        document.getElementById("ans-table").remove();
        document.getElementById("questions-test3").remove();
        document.getElementById("correctOrderTxt").remove();
        nextButton.remove();

        const title = document.createElement("h1");
        const finalMessage = document.createElement("p");
        const finishButton = document.createElement("p");

        title.innerHTML = "Test Completed";
        finalMessage.innerHTML = "Score: " + score + "/10";
        finishButton.innerHTML = "FINISH";

        title.classList = "title";
        finalMessage.classList = "instruction";
        finishButton.classList = "button";

        title.id = "title-test3";
        finalMessage.id = "instruction-test3";
        finishButton.id = "finishbutton-test3";

        finishButton.addEventListener("click", function (event) {
            (0,_metaScore__WEBPACK_IMPORTED_MODULE_2__.addToMetaScore)(score);
            (0,_main__WEBPACK_IMPORTED_MODULE_1__.nextStep)();
            document.getElementById("title-test3").remove();
            document.getElementById("instruction-test3").remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(finalMessage);
        document.getElementById("content").appendChild(finishButton);
    },

    /**
     * Super secret reset function. For cheaters only.
     */
    reset: function () {
        count = 0;
        score = 0;
        document.getElementById("content").remove();
        const newContentDiv = document.createElement("div");
        newContentDiv.id = "content";
        document.getElementsByTagName("body")[0].appendChild(newContentDiv);
        this.init();
    }
};

// --- ADD EVENT LISTENERS ---
/**
 * EventListener function. Will compare with correctOrder[count] to see if player clicked the correct ansBox.
 */
function checkIfCorrect (event) {
    if (parseInt(event.target.id) === test3.correctOrder[count]) {
        event.target.childNodes[0].remove();
        event.target.classList = "box-square"; // cursorstyle not clickable anymore
        event.target.id = "correct"; // will not turn red at gameover (see lostGame())
        test3.addScore(1);
        count++;
        event.target.removeEventListener("click", checkIfCorrect);
    } else {
        test3.deleteAllFigs();
        test3.lostGame();
    }
    if (count === figList.length) {
        test3.cheater();
    }
}




/***/ }),

/***/ "./kmom10/js/test4.js":
/*!****************************!*\
  !*** ./kmom10/js/test4.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test4": () => (/* binding */ test4)
/* harmony export */ });
/* harmony import */ var _figConstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figConstruct */ "./kmom10/js/figConstruct.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./kmom10/js/main.js");
/* harmony import */ var _metaScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metaScore */ "./kmom10/js/metaScore.js");




let question = null;
let correctOrderTxt = null;
let nextButton = null;

const fig1 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "blue", "square");
const fig2 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(1, "gold", "circle");
const fig3 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(2, "magenta", "triangle");
const fig4 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(3, "brown", "circle");
const fig5 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(4, "cyan", "triangle");
const fig6 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(5, "orange", "square");
const fig7 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(6, "red", "triangle");
const fig8 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(7, "purple", "square");
const fig9 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(8, "green", "circle");

const figList = [fig1, fig2, fig3, fig4, fig5, fig6, fig7, fig8, fig9];

let count = 0;

let score = 0;

/**
 * Memory test
 */
const test4 = {

    ansBoxList: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ],

    correctOrder: [
        4,
        2,
        8,
        7,
        1,
        3,
        5,
        0,
        6
    ],

    /**
     * Will give introductory information about the test.
     */
    init: function () {
        const title = document.createElement("h1");
        const instruction = document.createElement("p");
        const beginTestButton = document.createElement("p");

        title.innerHTML = "Test 4";
        instruction.innerHTML = "You will be presented with 9 figures. The figures differ in color and shape. Try to remember their respective positions. After 5 seconds the figures will disappear. You will be asked to click on their positions in a certain order based on what color and shape they had. If you click on the wrong position the test ends.";
        beginTestButton.innerHTML = "START";

        title.classList = "title";
        instruction.classList = "instruction";
        beginTestButton.classList = "button";

        beginTestButton.addEventListener("click", function (event) {
            test4.createTable();
            document.getElementsByClassName("title")[0].remove();
            document.getElementsByClassName("instruction")[0].remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(instruction);
        document.getElementById("content").appendChild(beginTestButton);
    },

    /**
     * Creates the test. The table contains the nine figures. Also adds a timer.
     */
    createTable: function () {
        // Table
        const tbl = document.createElement("table");
        tbl.id = "ans-table";

        // Question
        question = document.createElement("h1");
        question.innerHTML = "Remember positions <br><br>";
        question.id = "questions-test4";

        // Insert three rows with three columns each
        const row = tbl.insertRow();
        const row2 = tbl.insertRow();
        const row3 = tbl.insertRow();

        for (let i = 0; i < 3; i++) {
            this.ansBoxList[i] = row.insertCell();
            this.ansBoxList[i].classList = "box-square";
            this.ansBoxList[i].id = i;
        }
        for (let i = 3; i < 6; i++) {
            this.ansBoxList[i] = row2.insertCell();
            this.ansBoxList[i].classList = "box-square";
            this.ansBoxList[i].id = i;
        }
        for (let i = 6; i < 9; i++) {
            this.ansBoxList[i] = row3.insertCell();
            this.ansBoxList[i].classList = "box-square";
            this.ansBoxList[i].id = i;
        }

        // Correct Order Txt
        correctOrderTxt = document.createElement("p");
        correctOrderTxt.innerHTML = "<br><br>"; // will be changed later, now it's just to take up space
        correctOrderTxt.style.visibility = "hidden";
        correctOrderTxt.id = "correctOrderTxt";

        // Next Button
        nextButton = document.createElement("p");
        nextButton.classList = "button";
        nextButton.addEventListener("click", this.finishTest);
        nextButton.innerHTML = "NEXT";
        nextButton.style.visibility = "hidden";

        // Create
        document.getElementById("content").appendChild(question);
        document.getElementById("content").appendChild(tbl);
        document.getElementById("content").appendChild(nextButton);
        document.getElementById("content").appendChild(correctOrderTxt);

        // Draw figures
        for (let i = 0; i < this.ansBoxList.length; i++) {
            figList[i].draw();
        }

        // Timer
        setTimeout(function () {
            test4.setListerners();
            question.innerHTML = "Now click on the positions according to the order below";
            correctOrderTxt.innerHTML = "1. Cyan Triangle 2. Pink Triangle 3. Green Circle 4. Purple Square 5. Yellow Circle 6. Brown Circle 7. Orange Square 8. Blue Square 9. Red Triangle";
            correctOrderTxt.style.visibility = "visible";
            for (let i = 0; i < test4.ansBoxList.length; i++) {
                test4.ansBoxList[i].classList += " clickable";
            }
            const figsToDelete = [];
            for (const i of document.getElementsByClassName("fig")) {
                figsToDelete.push(i);
                // i.remove(); // går ej, då försvinner bara hälften!
            }
            for (const i of figsToDelete) {
                i.remove();
            }
        }, 5000);
    },

    /**
     * Set the same EventListeners to all ansBoxes
     */
    setListerners: function () {
        for (let i = 0; i < this.ansBoxList.length; i++) {
            this.ansBoxList[i].addEventListener("click", checkIfCorrect);
        }
    },

    /**
     * Adds score that will be added to meta score at the end
     * @param  {number} scoreToAdd
     */
    addScore: function (scoreToAdd) {
        score += scoreToAdd;
    },

    /**
     * Game Over. Is called when player chooses an incorrect ansBox.
     */
    lostGame: function () {
        question.innerHTML = "Game over<br><br>";
        for (const i of this.ansBoxList) {
            if (i.id !== "correct") {
                i.style.backgroundColor = "red";
                i.classList = "box-square"; // cursorstyle not clickable
                i.removeEventListener("click", checkIfCorrect);
            }
        }
        correctOrderTxt.style.visibility = "hidden";
        nextButton.style.visibility = "visible";
    },

    /**
     * Game Over. Is called if player aces the test (as if).
     */
    cheater: function () {
        question.innerHTML = "Cheater detected<br><br>";
        correctOrderTxt.style.visibility = "hidden";
        nextButton.style.visibility = "visible";
    },

    /**
     * Ends the test and presents the ending score that will be added to meta score
     */
    finishTest: function () {
        document.getElementById("ans-table").remove();
        document.getElementById("questions-test4").remove();
        document.getElementById("correctOrderTxt").remove();
        nextButton.remove();

        const title = document.createElement("h1");
        const finalMessage = document.createElement("p");
        const finishButton = document.createElement("p");

        title.innerHTML = "Test Completed";
        finalMessage.innerHTML = "Score: " + score + "/9";
        finishButton.innerHTML = "FINISH";

        title.classList = "title";
        finalMessage.classList = "instruction";
        finishButton.classList = "button";

        title.id = "title-test4";
        finalMessage.id = "instruction-test4";
        finishButton.id = "finishbutton-test4";

        finishButton.addEventListener("click", function (event) {
            (0,_metaScore__WEBPACK_IMPORTED_MODULE_2__.addToMetaScore)(score);
            (0,_main__WEBPACK_IMPORTED_MODULE_1__.nextStep)();
            document.getElementById("title-test4").remove();
            document.getElementById("instruction-test4").remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(finalMessage);
        document.getElementById("content").appendChild(finishButton);
    },

    /**
     * Super secret reset function. For cheaters only.
     */
    reset: function () {
        count = 0;
        score = 0;
        document.getElementById("content").remove();
        const newContentDiv = document.createElement("div");
        newContentDiv.id = "content";
        document.getElementsByTagName("body")[0].appendChild(newContentDiv);
        this.init();
    }
};

// --- ADD EVENT LISTENERS ---
/**
 * EventListener function. Will compare with correctOrder[count] to see if player clicked the correct ansBox.
 */
function checkIfCorrect (event) {
    if (parseInt(event.target.id) === test4.correctOrder[count]) {
        figList[event.target.id].draw();
        event.target.classList = "box-square"; // cursorstyle not clickable anymore
        event.target.id = "correct"; // will not turn red at gameover (see lostGame())
        test4.addScore(1);
        count++;
        event.target.removeEventListener("click", checkIfCorrect);
    } else {
        test4.lostGame();
    }
    if (count === 9) {
        test4.cheater();
    }
}




/***/ }),

/***/ "./kmom10/js/test5.js":
/*!****************************!*\
  !*** ./kmom10/js/test5.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test5": () => (/* binding */ test5)
/* harmony export */ });
/* harmony import */ var _figConstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figConstruct */ "./kmom10/js/figConstruct.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./kmom10/js/main.js");
/* harmony import */ var _metaScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metaScore */ "./kmom10/js/metaScore.js");




let question = null;
let ansBox = null;
let choseToClick = false;
let canClick = false;
let showFigsInterval = null;
let timerToInterval = null;

const fig1 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "blue", "circle");
const fig2 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "orange", "square");
const fig3 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "magenta", "triangle");
const fig4 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "red", "square");
const fig5 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "cyan", "square");
const fig6 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "red", "triangle");
const fig7 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "blue", "square");
const fig8 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "purple", "circle");
const fig9 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "red", "triangle");
const fig10 = new _figConstruct__WEBPACK_IMPORTED_MODULE_0__.Fig(0, "red", "square");

const figList = [fig1, fig2, fig3, fig4, fig5, fig6, fig7, fig8, fig9, fig10];

let count = -1;

let score = 0;

/**
 * Memory test
 */
const test5 = {

    correctAns: [
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
        true
    ],

    /**
     * Will give introductory information about the test.
     */
    init: function () {
        const title = document.createElement("h1");
        const instruction = document.createElement("p");
        const beginTestButton = document.createElement("p");

        title.innerHTML = "Test 5";
        instruction.innerHTML = "You will be presented with 10 figures sequentially. Your task is to click on the figure unless it's red or is the shape of a square. However if the figure is <em>both</em> red and a square you must also click on it. <br><br> For example, click on the figure if it's a purple triangle or a red square. Do not click on the figure if it's a yellow square or a red circle.<br><br> Please, take the time to understand the instruction and remember the rules before you start.";
        beginTestButton.innerHTML = "START";

        title.classList = "title";
        instruction.classList = "instruction";
        beginTestButton.classList = "button";

        beginTestButton.addEventListener("click", function (event) {
            test5.createTable();
            document.getElementsByClassName("title")[0].remove();
            document.getElementsByClassName("instruction")[0].remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(instruction);
        document.getElementById("content").appendChild(beginTestButton);
    },

    /**
     * Creates the test. Also starts an interval and a timer.
     */
    createTable: function () {
        // Table
        const tbl = document.createElement("table");
        tbl.id = "ans-table";

        // Question
        question = document.createElement("h1");
        question.innerHTML = "Get ready";
        question.id = "questions-test5";

        // Insert a row with only one column and add EventListener
        const row = tbl.insertRow();
        ansBox = row.insertCell();
        ansBox.classList = "box-square";
        ansBox.id = 0;
        ansBox.addEventListener("click", userClicked);

        // Create
        document.getElementById("content").appendChild(question);
        document.getElementById("content").appendChild(tbl);

        // Interval
        showFigsInterval = setInterval(this.showNewFig, 3000);

        // Timer before interval stops
        timerToInterval = setTimeout(this.timer, 32999);
    },

    /**
     * Will spawn a new figure.
     */
    showNewFig: function () {
        question.innerHTML = "Test under session";
        count++;

        // reset box
        ansBox.style.backgroundColor = "white";
        ansBox.classList = "box-square clickable";
        choseToClick = false;
        canClick = true;

        // create fig
        figList[count].draw();

        // set timer
        setTimeout(function () {
            if (ansBox.childNodes[0]) {
                ansBox.childNodes[0].remove();
            }
            canClick = false;
            ansBox.classList = "box-square"; // cursor not clickable style anymore
            if (choseToClick === test5.correctAns[count]) {
                test5.addScore(1);
                ansBox.style.backgroundColor = "green";
            } else {
                ansBox.style.backgroundColor = "red";
            }
            setTimeout(function () {
                ansBox.style.backgroundColor = "white";
            }, 100);
        }, 1000);
    },

    /**
     * Timer function that will cancel the interval
     */
    timer: function () {
        clearInterval(showFigsInterval);
        test5.finishTest();
    },

    /**
     * Adds score that will be added to meta score at the end
     * @param  {number} scoreToAdd
     */
    addScore: function (scoreToAdd) {
        score += scoreToAdd;
    },

    /**
     * Ends the test and presents the ending score that will be added to meta score
     */
    finishTest: function () {
        document.getElementById("ans-table").remove();
        document.getElementById("questions-test5").remove();
        // nextButton.remove();

        const title = document.createElement("h1");
        const finalMessage = document.createElement("p");
        const finishButton = document.createElement("p");

        title.innerHTML = "Test Completed";
        finalMessage.innerHTML = "Score: " + score + "/10";
        finishButton.innerHTML = "FINISH";

        title.classList = "title";
        finalMessage.classList = "instruction";
        finishButton.classList = "button";

        title.id = "title-test5";
        finalMessage.id = "instruction-test5";
        finishButton.id = "finishbutton-test5";

        finishButton.addEventListener("click", function (event) {
            (0,_metaScore__WEBPACK_IMPORTED_MODULE_2__.addToMetaScore)(score);
            (0,_main__WEBPACK_IMPORTED_MODULE_1__.nextStep)();
            document.getElementById("title-test5").remove();
            document.getElementById("instruction-test5").remove();
            event.target.remove();
        });

        document.getElementById("content").appendChild(title);
        document.getElementById("content").appendChild(finalMessage);
        document.getElementById("content").appendChild(finishButton);
    },

    /**
     * Super secret reset function. For cheaters only. Will clear interval and timer.
     */
    reset: function () {
        clearInterval(showFigsInterval);
        clearTimeout(timerToInterval);
        count = -1;
        score = 0;
        document.getElementById("content").remove();
        const newContentDiv = document.createElement("div");
        newContentDiv.id = "content";
        document.getElementsByTagName("body")[0].appendChild(newContentDiv);

        this.init();
    }
};

// --- ADD EVENT LISTENERS ---
/**
 * EventListener function. Will turn ansBox grey and turn choseToClick to true
 */
function userClicked (event) {
    if (canClick) {
        event.target.style.backgroundColor = "LightGray";
        event.target.classList = "box-square"; // cursorstyle not clickable anymore
        choseToClick = true;
        canClick = false;
    }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./kmom10/js/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzZCO0FBQ007QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFtQjtBQUMzQjtBQUNBO0FBQ0EsUUFBUSw4Q0FBVTtBQUNsQjtBQUNBO0FBQ0EsUUFBUSw4Q0FBVTtBQUNsQjtBQUNBO0FBQ0EsUUFBUSw4Q0FBVTtBQUNsQjtBQUNBO0FBQ0EsUUFBUSw4Q0FBVTtBQUNsQjtBQUNBO0FBQ0EsUUFBUSw4Q0FBVTtBQUNsQjtBQUNBO0FBQ0EsUUFBUSx5REFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsK0NBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsK0NBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsK0NBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsK0NBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVwQjs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUV5Qzs7Ozs7Ozs7Ozs7Ozs7OztBQzVEUDs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLCtDQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0c7QUFDVzs7QUFFN0M7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0QkFBNEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDBEQUFjO0FBQzFCLFlBQVksK0NBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblJpQjtBQUNXOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwwREFBYztBQUMxQixZQUFZLCtDQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pSb0I7QUFDSDtBQUNXOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsOENBQUc7QUFDcEIsaUJBQWlCLDhDQUFHO0FBQ3BCLGlCQUFpQiw4Q0FBRztBQUNwQixpQkFBaUIsOENBQUc7QUFDcEIsaUJBQWlCLDhDQUFHO0FBQ3BCLGlCQUFpQiw4Q0FBRztBQUNwQixpQkFBaUIsOENBQUc7QUFDcEIsaUJBQWlCLDhDQUFHO0FBQ3BCLGlCQUFpQiw4Q0FBRztBQUNwQixrQkFBa0IsOENBQUc7O0FBRXJCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDBEQUFjO0FBQzFCLFlBQVksK0NBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRWlCOzs7Ozs7O1VDL05qQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbmVyYWwvLi9rbW9tMTAvanMvZmlnQ29uc3RydWN0LmpzIiwid2VicGFjazovL2dlbmVyYWwvLi9rbW9tMTAvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9nZW5lcmFsLy4va21vbTEwL2pzL21ldGFTY29yZS5qcyIsIndlYnBhY2s6Ly9nZW5lcmFsLy4va21vbTEwL2pzL3N0YXJ0bWVudS5qcyIsIndlYnBhY2s6Ly9nZW5lcmFsLy4va21vbTEwL2pzL3Rlc3QxLmpzIiwid2VicGFjazovL2dlbmVyYWwvLi9rbW9tMTAvanMvdGVzdDIuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhbC8uL2ttb20xMC9qcy90ZXN0My5qcyIsIndlYnBhY2s6Ly9nZW5lcmFsLy4va21vbTEwL2pzL3Rlc3Q0LmpzIiwid2VicGFjazovL2dlbmVyYWwvLi9rbW9tMTAvanMvdGVzdDUuanMiLCJ3ZWJwYWNrOi8vZ2VuZXJhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nZW5lcmFsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nZW5lcmFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2VuZXJhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dlbmVyYWwvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9nZW5lcmFsL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9nZW5lcmFsL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEZpZyB7XG4gICAgLyoqXG4gKiBDcmVhdGVzIGEgZmlndXJlIHRvIGRyYXcgaW50byBhIHBhcmVudCBlbGVtZW50LlxuICogQHBhcmFtICB7fSBjZWxsUG9zIFRoZSBpZCBvZiB0aGUgcGFyZW50IGVsZW1lbnQsIGVpdGhlciBhIHN0cmluZyBvciBhIG51bWJlclxuICogQHBhcmFtICB7c3RyaW5nfSBjb2xvciBFZyBcImJsYWNrXCIgb3IgXCIjNGE5OWI0XCJcbiAqIEBwYXJhbSAge3N0cmluZ30gc2hhcGUgQ2hvb3NlIFwic3F1YXJlXCIsIFwicmVjdGFuZ2VcIiwgXCJjaXJjbGVcIiBvciBcInRyaWFuZ2xlXCIuIFdpbGwgcHJvZHVjZSBzcXVhcmUgYXMgZGVmYXVsdC5cbiovXG4gICAgY29uc3RydWN0b3IgKGNlbGxQb3MsIGNvbG9yLCBzaGFwZSkge1xuICAgICAgICB0aGlzLmNlbGxQb3MgPSBjZWxsUG9zO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgbGV0IGJvcmRlclJhZGl1cyA9IDA7XG4gICAgICAgIGlmIChzaGFwZSA9PT0gXCJjaXJjbGVcIikge1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2xpcFBhdGggPSBcIm5vbmVcIjtcbiAgICAgICAgaWYgKHNoYXBlID09PSBcInRyaWFuZ2xlXCIpIHtcbiAgICAgICAgICAgIGNsaXBQYXRoID0gXCJwb2x5Z29uKDUwJSAwJSwgMCUgMTAwJSwgMTAwJSAxMDAlKVwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3aWR0aCA9IFwiMjRweFwiO1xuICAgICAgICBpZiAoc2hhcGUgPT09IFwicmVjdGFuZ2xlXCIpIHtcbiAgICAgICAgICAgIHdpZHRoID0gXCIxOHB4XCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBmaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgICAgICBmaWcuY2xhc3NMaXN0ID0gXCJmaWcgbm9uLWNsaWNrYWJsZVwiO1xuXG4gICAgICAgICAgICBmaWcuc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcbiAgICAgICAgICAgIGZpZy5zdHlsZS5tYXJnaW4gPSBcImF1dG9cIjtcblxuICAgICAgICAgICAgZmlnLnN0eWxlLmhlaWdodCA9IHdpZHRoO1xuICAgICAgICAgICAgZmlnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICBmaWcuc3R5bGUuYm9yZGVyUmFkaXVzID0gYm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgZmlnLnN0eWxlLmNsaXBQYXRoID0gY2xpcFBhdGg7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY2VsbFBvcykuYXBwZW5kQ2hpbGQoZmlnKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEZpZyB9O1xuIiwiaW1wb3J0IHsgc2hvd01ldGFTY29yZSB9IGZyb20gXCIuL21ldGFTY29yZVwiO1xuaW1wb3J0IHsgcHJlc2VudEludHJvZHVjdGlvbiB9IGZyb20gXCIuL3N0YXJ0bWVudVwiO1xuaW1wb3J0IHsgdGVzdDEgfSBmcm9tIFwiLi90ZXN0MVwiO1xuaW1wb3J0IHsgdGVzdDIgfSBmcm9tIFwiLi90ZXN0MlwiO1xuaW1wb3J0IHsgdGVzdDMgfSBmcm9tIFwiLi90ZXN0M1wiO1xuaW1wb3J0IHsgdGVzdDQgfSBmcm9tIFwiLi90ZXN0NFwiO1xuaW1wb3J0IHsgdGVzdDUgfSBmcm9tIFwiLi90ZXN0NVwiO1xuXG5sZXQgY291bnQgPSAwO1xuXG5uZXh0U3RlcCgpO1xuLy8gdGVzdDEuaW5pdCgpO1xuLy8gdGVzdDIuaW5pdCgpO1xuLy8gdGVzdDMuaW5pdCgpO1xuLy8gdGVzdDQuaW5pdCgpO1xuLy8gdGVzdDUuaW5pdCgpO1xuLy8gc2hvd01ldGFTY29yZSgpO1xuXG4vKipcbiAqIFdpbGwgZ28gdG8gbmV4dCB0ZXN0XG4gKi9cbmZ1bmN0aW9uIG5leHRTdGVwICgpIHtcbiAgICBjb3VudCsrO1xuICAgIHN3aXRjaCAoY291bnQpIHtcbiAgICBjYXNlIDE6XG4gICAgICAgIHByZXNlbnRJbnRyb2R1Y3Rpb24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgICB0ZXN0MS5pbml0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgICAgdGVzdDIuaW5pdCgpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICAgIHRlc3QzLmluaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSA1OlxuICAgICAgICB0ZXN0NC5pbml0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgICAgdGVzdDUuaW5pdCgpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIDc6XG4gICAgICAgIHNob3dNZXRhU2NvcmUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG53aW5kb3cucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dpdGNoIChjb3VudCkge1xuICAgIGNhc2UgMjpcbiAgICAgICAgdGVzdDEucmVzZXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgICB0ZXN0Mi5yZXNldCgpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICAgIHRlc3QzLnJlc2V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgICAgdGVzdDQucmVzZXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSA2OlxuICAgICAgICB0ZXN0NS5yZXNldCgpO1xuICAgICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG5leHBvcnQgeyBuZXh0U3RlcCB9O1xuIiwiXG5sZXQgbWV0YVNjb3JlID0gMDtcblxuLyoqXG4gKiBDb2xsZWN0cyBzY29yZSBmcm9tIGFsbCB0ZXN0cyB0aGF0IHdpbGwgYmUgcHJlc2VudGVkIGluIHRoZSBlbmQuXG4gKiBAcGFyYW0gIHt9IHNjb3JlVG9BZGRcbiAqL1xuZnVuY3Rpb24gYWRkVG9NZXRhU2NvcmUgKHNjb3JlVG9BZGQpIHtcbiAgICBtZXRhU2NvcmUgKz0gc2NvcmVUb0FkZDtcbn1cblxuLyoqXG4gKiBFbmQgb2YgdGVzdHMsIHNob3dzIHRlc3QgcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIHNob3dNZXRhU2NvcmUgKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3Qgd29ya1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjb25zdCBmdWxsU2NvcmUgPSA1MztcblxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVGhhbmsgeW91IGZvciB5b3VyIGNvb3BlcmF0aW9uXCI7XG4gICAgaW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gXCJZb3VyIGZpbmFsIHNjb3JlIGlzIFwiICsgbWV0YVNjb3JlICsgXCIvXCIgKyBmdWxsU2NvcmU7XG5cbiAgICBpbnN0cnVjdGlvbjIuaW5uZXJIVE1MID0gXCJCYXNlZCBvbiB0aGlzIGRhdGEgeW91IGFyZSBtb3N0IHN1aXRlZCB0byB3b3JrIGFzLi4uXCI7XG5cbiAgICBpZiAobWV0YVNjb3JlID4gZnVsbFNjb3JlICogMC44KSB7XG4gICAgICAgIHdvcmtUaXRsZS5pbm5lckhUTUwgPSBcIkxFQUQgU0NJTkNFIE9GRklDRVJcIjtcbiAgICB9IGVsc2UgaWYgKG1ldGFTY29yZSA+IGZ1bGxTY29yZSAqIDAuNSkge1xuICAgICAgICB3b3JrVGl0bGUuaW5uZXJIVE1MID0gXCJHVUFSRFwiO1xuICAgIH0gZWxzZSBpZiAobWV0YVNjb3JlID4gZnVsbFNjb3JlICogMC4zKSB7XG4gICAgICAgIHdvcmtUaXRsZS5pbm5lckhUTUwgPSBcIkxBQiBSQVRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3b3JrVGl0bGUuaW5uZXJIVE1MID0gXCJUT0lMRVQgUEFQRVJcIjtcbiAgICB9XG5cbiAgICB3b3JrVGl0bGUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgICBpbnN0cnVjdGlvbjMuaW5uZXJIVE1MID0gXCJTdGFuZCBieSB0byBnZXQgeW91ciBmaXJzdCBhc3NpZ25tZW50LlwiO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuICAgIGluc3RydWN0aW9uLmNsYXNzTGlzdCA9IFwiaW5zdHJ1Y3Rpb25cIjtcbiAgICBpbnN0cnVjdGlvbjIuY2xhc3NMaXN0ID0gXCJpbnN0cnVjdGlvblwiO1xuICAgIHdvcmtUaXRsZS5jbGFzc0xpc3QgPSBcImluc3RydWN0aW9uXCI7XG4gICAgaW5zdHJ1Y3Rpb24zLmNsYXNzTGlzdCA9IFwiaW5zdHJ1Y3Rpb25cIjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGluc3RydWN0aW9uKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb24yKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQod29ya1RpdGxlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb24zKTtcblxuICAgIC8vIFRpbWVyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdvcmtUaXRsZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfSwgMTAwMCk7XG59XG5cbmV4cG9ydCB7IGFkZFRvTWV0YVNjb3JlLCBzaG93TWV0YVNjb3JlIH07XG4iLCJpbXBvcnQgeyBuZXh0U3RlcCB9IGZyb20gXCIuL21haW5cIjtcblxuLyoqXG4gKiBQcmVzZW50cyBpbnRyb2R1Y3Rpb24gYmVmb3JlIGFsbCB0ZXN0cyBzdGFydC5cbiAqL1xuZnVuY3Rpb24gcHJlc2VudEludHJvZHVjdGlvbiAoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBpbnN0cnVjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBiZWdpblRlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiV2VsY29tZSBzdWJqZWN0ICMxNjAwNTNcIjtcbiAgICBpbnN0cnVjdGlvbi5pbm5lckhUTUwgPSBcIllvdXIgaW50ZWxsaWdlbmNlIHdpbGwgbm93IGJlIGV2YWx1YXRlZCB3aXRoIGEgc2VyaWVzIG9mIHRlc3RzIGRlc2lnbmVkIGhlcmUgb24gQmxhY2sgTWVzYS5cIjtcbiAgICBpbnN0cnVjdGlvbjIuaW5uZXJIVE1MID0gXCJQbGVhc2UgdGFrZSBhIGRlZXAgYnJlYXRoIGFuZCBwdXNoIHRoZSBidXR0b24gd2hlbiB5b3UgYXJlIHJlYWR5LlwiO1xuICAgIGJlZ2luVGVzdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkJFR0lOXCI7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QgPSBcInRpdGxlXCI7XG4gICAgaW5zdHJ1Y3Rpb24uY2xhc3NMaXN0ID0gXCJpbnN0cnVjdGlvblwiO1xuICAgIGluc3RydWN0aW9uLmlkID0gXCJpbnN0cnVjdGlvblwiO1xuICAgIGluc3RydWN0aW9uMi5jbGFzc0xpc3QgPSBcImluc3RydWN0aW9uXCI7XG4gICAgaW5zdHJ1Y3Rpb24yLmlkID0gXCJpbnN0cnVjdGlvbjJcIjtcbiAgICBiZWdpblRlc3RCdXR0b24uY2xhc3NMaXN0ID0gXCJidXR0b25cIjtcblxuICAgIGJlZ2luVGVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIG5leHRTdGVwKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZVwiKVswXS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvblwiKS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbjJcIikucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGluc3RydWN0aW9uKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb24yKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoYmVnaW5UZXN0QnV0dG9uKTtcbn1cblxuZXhwb3J0IHsgcHJlc2VudEludHJvZHVjdGlvbiB9O1xuIiwiaW1wb3J0IHsgbmV4dFN0ZXAgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBhZGRUb01ldGFTY29yZSB9IGZyb20gXCIuL21ldGFTY29yZVwiO1xuXG5sZXQgcXVlc3Rpb24gPSBudWxsO1xubGV0IG5leHRCdXR0b24gPSBudWxsO1xuXG5sZXQgY3VycmVudCA9IDA7XG5cbmxldCBzY29yZSA9IDA7XG5cbi8qKlxuICogUXVpeiB0ZXN0XG4gKi9cbmNvbnN0IHRlc3QxID0ge1xuXG4gICAgYWxsUXVlc3Rpb25zOiB7XG4gICAgICAgIDE6IFwiV2hpY2ggb25lIG9mIHRoZSB0aHJlZSBpcyBsZWFzdCBsaWtlIHRoZSBvdGhlciB0d28/XCIsXG4gICAgICAgIDI6IFwiTWFyeSwgd2hvIGlzIDE2IHllYXJzIG9sZCwgaXMgZm91ciB0aW1lcyBhcyBvbGQgYXMgaGVyIGJyb3RoZXIuIEhvdyBvbGQgd2lsbCBNYXJ5IGJlIHdoZW4gc2hlIGlzIHR3aWNlIGFzIG9sZCBhcyBoZXIgYnJvdGhlcj9cIixcbiAgICAgICAgMzogXCJXaGljaCBvbmUgb2YgdGhlIHRocmVlIGNob2ljZXMgbWFrZXMgdGhlIGJlc3QgY29tcGFyaXNvbj8gUEVBQ0ggaXMgdG8gSENBRVAgYXMgNDYyNTEgaXMgdG86XCIsXG4gICAgICAgIDQ6IFwiSG93IGNhbiB5b3UgZHJvcCBhIHJhdyBlZ2cgb250byBhIGNvbmNyZXRlIGZsb29yIHdpdGhvdXQgY3JhY2tpbmcgaXQ/XCIsXG4gICAgICAgIDU6IFwiSWYgYWxsIEJsb29wcyBhcmUgUmF6emllcyBhbmQgYWxsIFJhenppZXMgYXJlIExhenppZXMsIHRoZW4gYWxsIEJsb29wcyBhcmUgZGVmaW5pdGVseSBMYXp6aWVzP1wiXG4gICAgfSxcblxuICAgIGFuc0JveExpc3Q6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgM1xuICAgIF0sXG5cbiAgICBhbnNUeHQ6IHtcblxuICAgICAgICAxOiB7XG4gICAgICAgICAgICAxOiBcIlNuYWtlXCIsXG4gICAgICAgICAgICAyOiBcIjIwXCIsXG4gICAgICAgICAgICAzOiBcIjI1NjMxXCIsXG4gICAgICAgICAgICA0OiBcIlRoZSBlZ2cgaXMgbWFkZSBvZiBzdGVlbFwiLFxuICAgICAgICAgICAgNTogXCJUcnVlXCJcbiAgICAgICAgfSxcblxuICAgICAgICAyOiB7XG4gICAgICAgICAgICAxOiBcIkRvZ1wiLFxuICAgICAgICAgICAgMjogXCIyNFwiLFxuICAgICAgICAgICAgMzogXCIyNjQ1MVwiLFxuICAgICAgICAgICAgNDogXCJJIGNhdGNoIGl0IGJlZm9yZSBpdCBoaXRzIHRoZSBmbG9vclwiLFxuICAgICAgICAgICAgNTogXCJGYWxzZVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgMzoge1xuICAgICAgICAgICAgMTogXCJNb3VzZVwiLFxuICAgICAgICAgICAgMjogXCIyNVwiLFxuICAgICAgICAgICAgMzogXCIxNTI2NFwiLFxuICAgICAgICAgICAgNDogXCJDb25jcmV0ZSBmbG9vcnMgYXJlIHZlcnkgaGFyZCB0byBjcmFja1wiLFxuICAgICAgICAgICAgNTogXCJXaGF0P1wiXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29ycmVudEFuc3dlcnM6IHtcbiAgICAgICAgMTogMSxcbiAgICAgICAgMjogMixcbiAgICAgICAgMzogMyxcbiAgICAgICAgNDogMyxcbiAgICAgICAgNTogMVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaWxsIGdpdmUgaW50cm9kdWN0b3J5IGluZm9ybWF0aW9uIGFib3V0IHRoZSB0ZXN0LlxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGJlZ2luVGVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVGVzdCAxXCI7XG4gICAgICAgIGluc3RydWN0aW9uLmlubmVySFRNTCA9IFwiWW91IHdpbGwgYmUgcHJlc2VudGVkIHdpdGggZml2ZSBtdWx0aXBsZSBjaG9pY2UgcXVlc3Rpb25zLiBUaGVyZSBhcmUgdGhyZWUgcG9zc2libGUgYW5zd2VycyB0byBlYWNoIHF1ZXN0aW9uLiBQbGVhc2UgY2hvb3NlIHRoZSBvbmUgeW91IHRoaW5rIGlzIGNvcnJlY3QuXCI7XG4gICAgICAgIGJlZ2luVGVzdEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNUQVJUXCI7XG5cbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuICAgICAgICBpbnN0cnVjdGlvbi5jbGFzc0xpc3QgPSBcImluc3RydWN0aW9uXCI7XG4gICAgICAgIGJlZ2luVGVzdEJ1dHRvbi5jbGFzc0xpc3QgPSBcImJ1dHRvblwiO1xuXG4gICAgICAgIGJlZ2luVGVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0ZXN0MS5jcmVhdGVUYWJsZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlXCIpWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImluc3RydWN0aW9uXCIpWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb24pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoYmVnaW5UZXN0QnV0dG9uKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgdGVzdC4gVGhlIHRhYmxlIGNvbnRhaW5zIHRoZSB0aHJlZSBwb3NzaWJsZSBhbnN3ZXJzIGZvciBlYWNoIHF1ZXN0aW9uLlxuICAgICAqL1xuICAgIGNyZWF0ZVRhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRhYmxlXG4gICAgICAgIGNvbnN0IHRibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICAgICAgdGJsLmlkID0gXCJhbnMtdGFibGVcIjtcblxuICAgICAgICAvLyBRdWVzdGlvblxuICAgICAgICBxdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgcXVlc3Rpb24uaWQgPSBcInF1ZXN0aW9ucy10ZXN0MVwiO1xuXG4gICAgICAgIC8vIEFuc3dlcnMgIChrb21tZXIgYXV0b21hdGlza3Qgc2thcGEgZW4gdGJvZHkpXG4gICAgICAgIGNvbnN0IHJvdyA9IHRibC5pbnNlcnRSb3coKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuc0JveExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXSA9IHJvdy5pbnNlcnRDZWxsKGkpO1xuICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldLmNsYXNzTGlzdCA9IFwiYW5zQm94IGNsaWNrYWJsZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IFBlcm1hbmVudCBFdmVudExpc3RlbmVyc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zQm94TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXZlYWxDb3JyZWN0KTtcbiAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd05leHRCdXR0b24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmV4dEJ1dHRvblxuICAgICAgICBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0ID0gXCJidXR0b25cIjtcbiAgICAgICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dFF1ZXN0aW9uKTtcbiAgICAgICAgbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBcIk5FWFRcIjtcbiAgICAgICAgbmV4dEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICAgICAgICAvLyBDcmVhdGVcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHF1ZXN0aW9uKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHRibCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKTtcblxuICAgICAgICAvLyBJbml0aWF0ZSAgICAgLy8gbWF5YmUgZGVsZXRlIGxhdGVyP1xuICAgICAgICB0aGlzLm5leHRRdWVzdGlvbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgYXBwcm9wcmlhdGUgRXZlbnRMaXN0ZW5lcnMgKGNvcnJlY3QgdnMgaW5jb3JyZWN0IGFuc0JveGVzKVxuICAgICAqL1xuICAgIHNldExpc3Rlcm5lcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuc0JveExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcnJlbnRBbnN3ZXJzW2N1cnJlbnRdID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tlZENvcnJlY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5SZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVBbGxFTGlzdGVybmVycyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBzY29yZSB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gbWV0YSBzY29yZSBhdCB0aGUgZW5kXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBzY29yZVRvQWRkXG4gICAgICovXG4gICAgYWRkU2NvcmU6IGZ1bmN0aW9uIChzY29yZVRvQWRkKSB7XG4gICAgICAgIHNjb3JlICs9IHNjb3JlVG9BZGQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdpbGwgcHJlc2VudCBuZXh0IHF1ZXN0aW9uIGFuZCBwb3NzaWJsZSBhbnN3ZXJzLiBJZiBmaXZlIHF1ZXN0aW9ucyBoYXMgYmVlbiBwcmVzZW50ZWQgaXQgd2lsbCBpbnN0ZWFkIGNhbGwgZnVuY3Rpb24gdG8gZW5kIHRlc3QuXG4gICAgICovXG4gICAgbmV4dFF1ZXN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnJlbnQrKztcbiAgICAgICAgaWYgKGN1cnJlbnQgPD0gNSkge1xuICAgICAgICAgICAgcXVlc3Rpb24uaW5uZXJIVE1MID0gdGhpcy5hbGxRdWVzdGlvbnNbY3VycmVudF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zQm94TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXS5pbm5lckhUTUwgPSB0aGlzLmFuc1R4dFtpICsgMV1bY3VycmVudF07XG4gICAgICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldExpc3Rlcm5lcnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoVGVzdCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuZHMgdGhlIHRlc3QgYW5kIHByZXNlbnRzIHRoZSBlbmRpbmcgc2NvcmUgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIG1ldGEgc2NvcmVcbiAgICAgKi9cbiAgICBmaW5pc2hUZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zLXRhYmxlXCIpLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9ucy10ZXN0MVwiKS5yZW1vdmUoKTtcbiAgICAgICAgbmV4dEJ1dHRvbi5yZW1vdmUoKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgY29uc3QgZmluYWxNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVGVzdCBDb21wbGV0ZWRcIjtcbiAgICAgICAgZmluYWxNZXNzYWdlLmlubmVySFRNTCA9IFwiU2NvcmU6IFwiICsgc2NvcmUgKyBcIi8xNVwiO1xuICAgICAgICBmaW5pc2hCdXR0b24uaW5uZXJIVE1MID0gXCJGSU5JU0hcIjtcblxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QgPSBcInRpdGxlXCI7XG4gICAgICAgIGZpbmFsTWVzc2FnZS5jbGFzc0xpc3QgPSBcImluc3RydWN0aW9uXCI7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QgPSBcImJ1dHRvblwiO1xuXG4gICAgICAgIHRpdGxlLmlkID0gXCJ0aXRsZS10ZXN0MVwiO1xuICAgICAgICBmaW5hbE1lc3NhZ2UuaWQgPSBcImluc3RydWN0aW9uLXRlc3QxXCI7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi5pZCA9IFwiZmluaXNoYnV0dG9uLXRlc3QxXCI7XG5cbiAgICAgICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGFkZFRvTWV0YVNjb3JlKHNjb3JlKTtcbiAgICAgICAgICAgIG5leHRTdGVwKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLXRlc3QxXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbi10ZXN0MVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGZpbmFsTWVzc2FnZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChmaW5pc2hCdXR0b24pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdXBlciBzZWNyZXQgcmVzZXQgZnVuY3Rpb24uIEZvciBjaGVhdGVycyBvbmx5LlxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnJlbnQgPSAwO1xuICAgICAgICBzY29yZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld0NvbnRlbnREaXYuaWQgPSBcImNvbnRlbnRcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKG5ld0NvbnRlbnREaXYpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbn07XG5cbi8qICAgLS0tIEVWRU5UIExJU1RFTkVSUyAtLS0gICAqL1xuXG4vKipcbiAqIEV2ZW50TGlzdGVuZXIgZnVudGlvbi4gV2lsbCBtYWtlIFwibmV4dEJ1dHRvblwiIHZpc2libGUuXG4gKi9cbmZ1bmN0aW9uIHNob3dOZXh0QnV0dG9uICgpIHtcbiAgICBuZXh0QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn1cblxuLyoqXG4gKiBFdmVudExpc3RlbmVyIGZ1bmN0aW9uLiBUdXJuIHRoZSBjb3JyZWN0IGFuc0JveCBncmVlbi5cbiAqL1xuZnVuY3Rpb24gcmV2ZWFsQ29ycmVjdCAoKSB7XG4gICAgdGVzdDEuYW5zQm94TGlzdFt0ZXN0MS5jb3JyZW50QW5zd2Vyc1tjdXJyZW50XSAtIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB0ZXN0MS5hbnNCb3hMaXN0W3Rlc3QxLmNvcnJlbnRBbnN3ZXJzW2N1cnJlbnRdIC0gMV0uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG59XG5cbi8qKlxuICogRXZlbnRMaXN0ZW5lciBmdW5jdGlvbi4gVHVybiBvd24gZWxlbWVudCByZWQuXG4gKi9cbmZ1bmN0aW9uIHR1cm5SZWQgKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG59XG5cbi8qKlxuICogRXZlbnRMaXN0ZW5lciBmdW5jdGlvbi4gQWRkIHNjb3Jlcy5cbiAqL1xuZnVuY3Rpb24gY2xpY2tlZENvcnJlY3QgKCkge1xuICAgIHRlc3QxLmFkZFNjb3JlKDMpO1xufVxuXG4vKipcbiAqIEV2ZW50TGlzdGVuZXIgZnVuY3Rpb24uIFJlbW92ZXMgc2V2ZXJhbCBFdmVudExpc3RlbmVycyAoXCJjbGlja2VkQ29ycmVjdFwiLCBcInR1cm5SZWRcIiBhbmQgXCJyZW1vdmVBbGxFTGlzdGVuZXJzXCIpIGZyb20gYWxsIHRoZSBhbnNCb3hlcy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQWxsRUxpc3Rlcm5lcnMgKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdDEuYW5zQm94TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0ZXN0MS5hbnNCb3hMaXN0W2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja2VkQ29ycmVjdCk7XG4gICAgICAgIHRlc3QxLmFuc0JveExpc3RbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5SZWQpO1xuICAgICAgICB0ZXN0MS5hbnNCb3hMaXN0W2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVBbGxFTGlzdGVybmVycyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEV2ZW50TGlzdGVuZXIgZnVuY3Rpb24uIEhpZGVzIG93biBlbGVtZW50IGFuZCBnbyB0byBuZXh0IHF1ZXN0aW9uLlxuICovXG5mdW5jdGlvbiBuZXh0UXVlc3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIHRlc3QxLm5leHRRdWVzdGlvbigpO1xufVxuXG5leHBvcnQgeyB0ZXN0MSB9O1xuIiwiaW1wb3J0IHsgbmV4dFN0ZXAgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBhZGRUb01ldGFTY29yZSB9IGZyb20gXCIuL21ldGFTY29yZVwiO1xuXG5sZXQgZml6emJ1enpMaXN0ID0gW107XG5sZXQgbmV4dEJ1dHRvbiA9IG51bGw7XG5cbmxldCBsYXN0TnVtID0gMDtcbmxldCBjb3JyZWN0QW5zID0gXCJcIjtcblxubGV0IHNjb3JlID0gMDtcblxubGV0IGNvdW50ID0gMDtcblxuLyoqXG4gKiBGaXp6IEJ1enogdGVzdFxuICovXG5jb25zdCB0ZXN0MiA9IHtcblxuICAgIGFuc0JveExpc3Q6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgNFxuICAgIF0sXG5cbiAgICAvKipcbiAgICAgKiBXaWxsIGdpdmUgaW50cm9kdWN0b3J5IGluZm9ybWF0aW9uIGFib3V0IHRoZSB0ZXN0LlxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGJlZ2luVGVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IFwiIFRlc3QgMlwiO1xuICAgICAgICBpbnN0cnVjdGlvbi5pbm5lckhUTUwgPSBcIllvdSB3aWxsIGJlIHByZXNlbnRlZCB3aXRoIHRocmVlIHNlcXVlbmNlcyBvZiBudW1iZXJzLiBUaGVyZSBpcyBhIHBhdHRlcm4gd2hlcmUgc29tZSBudW1iZXJzIGFyZSByZXBsYWNlZCBieSBlaXRoZXIgJ2ZpenonLCAnYnV6eicgb3IgJ2ZpenogYnV6eicuIEdpdmVuIHRoZSBwYXR0ZXJuLCB0cnkgdG8gZmlndXJlIG91dCB3aGF0IHNob3VsZCBiZSBuZXh0IGluIHRoZSBzZXF1ZW5jZS4gXCI7XG4gICAgICAgIGJlZ2luVGVzdEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNUQVJUXCI7XG5cbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuICAgICAgICBpbnN0cnVjdGlvbi5jbGFzc0xpc3QgPSBcImluc3RydWN0aW9uXCI7XG4gICAgICAgIGJlZ2luVGVzdEJ1dHRvbi5jbGFzc0xpc3QgPSBcImJ1dHRvblwiO1xuXG4gICAgICAgIGJlZ2luVGVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0ZXN0Mi5jcmVhdGVGaXp6QnV6eigpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlXCIpWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImluc3RydWN0aW9uXCIpWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb24pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoYmVnaW5UZXN0QnV0dG9uKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIHRoZSB0ZXN0LiBUaGUgdGFibGUgY29udGFpbnMgdGhlIGZvdXIgcG9zc2libGUgYW5zd2VycyBmb3IgZWFjaCBxdWVzdGlvbi9zZXF1ZW5jZSBvZiBudW1iZXJzLlxuICAgICovXG4gICAgY3JlYXRlRml6ekJ1eno6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVGFibGVcbiAgICAgICAgY29uc3QgdGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgICAgICB0YmwuaWQgPSBcImFucy10YWJsZVwiO1xuXG4gICAgICAgIC8vIFF1ZXN0aW9uXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBxdWVzdGlvbi5pZCA9IFwicXVlc3Rpb25zLXRlc3QyXCI7XG5cbiAgICAgICAgLy8gQW5zd2VycyAgKGtvbW1lciBhdXRvbWF0aXNrdCBza2FwYSBlbiB0Ym9keSlcbiAgICAgICAgY29uc3Qgcm93ID0gdGJsLmluc2VydFJvdygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zQm94TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldID0gcm93Lmluc2VydENlbGwoaSk7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uY2xhc3NMaXN0ID0gXCJhbnNCb3ggY2xpY2thYmxlXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgaW5uZXJIVE1MXG4gICAgICAgIHRoaXMucmFuZEZpenpCdXp6U2VxdWVjZSgpO1xuICAgICAgICBjb25zdCBzdHIgPSBmaXp6YnV6ekxpc3Quam9pbihcIiwgXCIpO1xuICAgICAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBzdHIgKyBcIizigKYgV2hhdCBpcyBuZXh0P1wiO1xuICAgICAgICB0aGlzLmFuc0JveExpc3RbMF0uaW5uZXJIVE1MID0gXCJmaXp6XCI7XG4gICAgICAgIHRoaXMuYW5zQm94TGlzdFsxXS5pbm5lckhUTUwgPSBcImJ1enpcIjtcbiAgICAgICAgdGhpcy5hbnNCb3hMaXN0WzJdLmlubmVySFRNTCA9IFwiZml6eiBidXp6XCI7XG4gICAgICAgIHRoaXMuYW5zQm94TGlzdFszXS5pbm5lckhUTUwgPSBsYXN0TnVtO1xuXG4gICAgICAgIC8vIFNldCBQZXJtYW5lbnQgRXZlbnRMaXN0ZW5lcnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuc0JveExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV2ZWFsQ29ycmVjdCk7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dOZXh0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldExpc3Rlcm5lcnMoKTtcblxuICAgICAgICAvLyBOZXh0QnV0dG9uXG4gICAgICAgIG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QgPSBcImJ1dHRvblwiO1xuICAgICAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0U2VxdWVuY2UpO1xuICAgICAgICBuZXh0QnV0dG9uLmlubmVySFRNTCA9IFwiTkVYVFwiO1xuICAgICAgICBuZXh0QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG4gICAgICAgIC8vIENyZWF0ZVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQocXVlc3Rpb24pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodGJsKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBGaXp6IEJ1enogc2VxdWVuY2VcbiAgICAgKi9cbiAgICByYW5kRml6ekJ1enpTZXF1ZWNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDkzKSArIDEpO1xuICAgICAgICBmaXp6YnV6ekxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbnVtID0gZmlyc3ROdW0gKyBpO1xuICAgICAgICAgICAgaWYgKGkgPiA1KSB7XG4gICAgICAgICAgICAgICAgbGFzdE51bSA9IG51bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChudW0gJSAzID09PSAwICYmIG51bSAlIDUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBudW0gPSBcImZpenogYnV6elwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gJSAzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbnVtID0gXCJmaXp6XCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bSAlIDUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBudW0gPSBcImJ1enpcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpIDwgNikge1xuICAgICAgICAgICAgICAgIGZpenpidXp6TGlzdC5wdXNoKG51bSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvcnJlY3RBbnMgPSBudW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGFwcHJvcHJpYXRlIEV2ZW50TGlzdGVuZXJzIChjb3JyZWN0IHZzIGluY29ycmVjdCBhbnNCb3hlcylcbiAgICAgKi9cbiAgICBzZXRMaXN0ZXJuZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnNCb3hMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbnNCb3hMaXN0W2ldLmlubmVySFRNTCA9PT0gY29ycmVjdEFucy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja2VkQ29ycmVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVyblJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUFsbEVMaXN0ZXJuZXJzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXZlYWxzIGNvcnJlY3QgYW5zQm94IGJ5IHR1cm5pbmcgaXQgZ3JlZW5cbiAgICAgKi9cbiAgICByZXZlYWxDb3JyZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnNCb3hMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbnNCb3hMaXN0W2ldLmlubmVySFRNTCA9PT0gY29ycmVjdEFucy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBzY29yZSB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gbWV0YSBzY29yZSBhdCB0aGUgZW5kXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBzY29yZVRvQWRkXG4gICAgICovXG4gICAgYWRkU2NvcmU6IGZ1bmN0aW9uIChzY29yZVRvQWRkKSB7XG4gICAgICAgIHNjb3JlICs9IHNjb3JlVG9BZGQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdpbGwgcmVtb3ZlIGVsZW1lbnRzIHRoYXQgY29udGFpbiB0aGUgRml6eiBCdXp6IGdhbWVcbiAgICAgKi9cbiAgICBkZWxldGVGaXp6QnV6ejogZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFucy10YWJsZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvbnMtdGVzdDJcIikucmVtb3ZlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuZHMgdGhlIHRlc3QgYW5kIHByZXNlbnRzIHRoZSBlbmRpbmcgc2NvcmUgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIG1ldGEgc2NvcmVcbiAgICAgKi9cbiAgICBmaW5pc2hUZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5leHRCdXR0b24ucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IGZpbmFsTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRlc3QgQ29tcGxldGVkXCI7XG4gICAgICAgIGZpbmFsTWVzc2FnZS5pbm5lckhUTUwgPSBcIlNjb3JlOiBcIiArIHNjb3JlICsgXCIvOVwiO1xuICAgICAgICBmaW5pc2hCdXR0b24uaW5uZXJIVE1MID0gXCJGSU5JU0hcIjtcblxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QgPSBcInRpdGxlXCI7XG4gICAgICAgIGZpbmFsTWVzc2FnZS5jbGFzc0xpc3QgPSBcImluc3RydWN0aW9uXCI7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QgPSBcImJ1dHRvblwiO1xuXG4gICAgICAgIHRpdGxlLmlkID0gXCJ0aXRsZS10ZXN0MlwiO1xuICAgICAgICBmaW5hbE1lc3NhZ2UuaWQgPSBcImluc3RydWN0aW9uLXRlc3QyXCI7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi5pZCA9IFwiZmluaXNoYnV0dG9uLXRlc3QyXCI7XG5cbiAgICAgICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGFkZFRvTWV0YVNjb3JlKHNjb3JlKTtcbiAgICAgICAgICAgIG5leHRTdGVwKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLXRlc3QyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbi10ZXN0MlwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGZpbmFsTWVzc2FnZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChmaW5pc2hCdXR0b24pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdXBlciBzZWNyZXQgcmVzZXQgZnVuY3Rpb24uIEZvciBjaGVhdGVycyBvbmx5LlxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdDb250ZW50RGl2LmlkID0gXCJjb250ZW50XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChuZXdDb250ZW50RGl2KTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxufTtcblxuLy8gLS0tIEFERCBFVkVOVCBMSVNURU5FUlMgLS0tXG5cbi8qKlxuICogRXZlbnRMaXN0ZW5lciBmdW50aW9uLiBXaWxsIG1ha2UgXCJuZXh0QnV0dG9uXCIgdmlzaWJsZS5cbiAqL1xuZnVuY3Rpb24gc2hvd05leHRCdXR0b24gKCkge1xuICAgIG5leHRCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xufVxuXG4vKipcbiAqIEV2ZW50TGlzdGVuZXIgZnVudGlvbi4gV2lsbCBwcmVzZW50IG5leHQgc2VxdWVuY2Ugb2YgRml6eiBCdXp6LiBJZiB0aHJlZSBzZXF1ZW5jZXMgaGF2ZSBiZWVuIHByZXNlbnRlZCBpdCB3aWxsIGVuZCB0aGUgZ2FtZSBieSBjYWxsaW5nIGZpbmlzaFRlc3QgaW5zdGVhZC5cbiAqL1xuZnVuY3Rpb24gbmV4dFNlcXVlbmNlIChldmVudCkge1xuICAgIGNvdW50Kys7XG4gICAgdGVzdDIuZGVsZXRlRml6ekJ1enooKTtcbiAgICBpZiAoY291bnQgPD0gMikge1xuICAgICAgICB0ZXN0Mi5jcmVhdGVGaXp6QnV6eigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRlc3QyLmZpbmlzaFRlc3QoKTtcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xufVxuXG4vKipcbiAqIEV2ZW50TGlzdGVuZXIgZnVudGlvbi4gV2lsbCBjYWxsIGZ1bmN0aW9uIHRvIHJldmVhbCBjb3JyZWN0IGFuc0JveC5cbiAqL1xuZnVuY3Rpb24gcmV2ZWFsQ29ycmVjdCAoKSB7XG4gICAgdGVzdDIucmV2ZWFsQ29ycmVjdCgpO1xufVxuXG4vKipcbiAqIEV2ZW50TGlzdGVuZXIgZnVudGlvbi4gV2lsbCB0dXJuIG93biBlbGVtZW50IHJlZC5cbiAqL1xuZnVuY3Rpb24gdHVyblJlZCAoZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbn1cblxuLyoqXG4gKiBFdmVudExpc3RlbmVyIGZ1bnRpb24uIFdpbGwgYWRkIHNjb3JlIGJ5IGNhbGxpbmcgYWRkU2NvcmUgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gY2xpY2tlZENvcnJlY3QgKCkge1xuICAgIHRlc3QyLmFkZFNjb3JlKDMpO1xufVxuXG4vKipcbiAqIEV2ZW50TGlzdGVuZXIgZnVuY3Rpb24uIFJlbW92ZXMgc2V2ZXJhbCBFdmVudExpc3RlbmVycyAoXCJjbGlja2VkQ29ycmVjdFwiLCBcInR1cm5SZWRcIiBhbmQgXCJyZW1vdmVBbGxFTGlzdGVuZXJzXCIpIGZyb20gYWxsIHRoZSBhbnNCb3hlcy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQWxsRUxpc3Rlcm5lcnMgKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdDIuYW5zQm94TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0ZXN0Mi5hbnNCb3hMaXN0W2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja2VkQ29ycmVjdCk7XG4gICAgICAgIHRlc3QyLmFuc0JveExpc3RbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHR1cm5SZWQpO1xuICAgICAgICB0ZXN0Mi5hbnNCb3hMaXN0W2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVBbGxFTGlzdGVybmVycyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyB0ZXN0MiB9O1xuIiwiaW1wb3J0IHsgRmlnIH0gZnJvbSBcIi4vZmlnQ29uc3RydWN0XCI7XG5pbXBvcnQgeyBuZXh0U3RlcCB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IGFkZFRvTWV0YVNjb3JlIH0gZnJvbSBcIi4vbWV0YVNjb3JlXCI7XG5cbmxldCBxdWVzdGlvbiA9IG51bGw7XG5sZXQgY29ycmVjdE9yZGVyVHh0ID0gbnVsbDtcbmxldCBuZXh0QnV0dG9uID0gbnVsbDtcbmxldCBmaW5pc2hlZCA9IGZhbHNlO1xuXG5jb25zdCBmaWcxID0gbmV3IEZpZygwLCBcImJsdWVcIiwgXCJzcXVhcmVcIik7XG5jb25zdCBmaWcyID0gbmV3IEZpZygxLCBcImdvbGRcIiwgXCJjaXJjbGVcIik7XG5jb25zdCBmaWczID0gbmV3IEZpZygyLCBcIm1hZ2VudGFcIiwgXCJ0cmlhbmdsZVwiKTtcbmNvbnN0IGZpZzQgPSBuZXcgRmlnKDMsIFwiYnJvd25cIiwgXCJyZWN0YW5nbGVcIik7XG5jb25zdCBmaWc1ID0gbmV3IEZpZyg0LCBcImN5YW5cIiwgXCJ0cmlhbmdsZVwiKTtcbmNvbnN0IGZpZzYgPSBuZXcgRmlnKDUsIFwib3JhbmdlXCIsIFwic3F1YXJlXCIpO1xuY29uc3QgZmlnNyA9IG5ldyBGaWcoNiwgXCJyZWRcIiwgXCJ0cmlhbmdsZVwiKTtcbmNvbnN0IGZpZzggPSBuZXcgRmlnKDcsIFwicHVycGxlXCIsIFwic3F1YXJlXCIpO1xuY29uc3QgZmlnOSA9IG5ldyBGaWcoOCwgXCJncmVlblwiLCBcImNpcmNsZVwiKTtcbmNvbnN0IGZpZzEwID0gbmV3IEZpZyg5LCBcImxpbWVcIiwgXCJyZWN0YW5nbGVcIik7XG5cbmNvbnN0IGZpZ0xpc3QgPSBbZmlnMSwgZmlnMiwgZmlnMywgZmlnNCwgZmlnNSwgZmlnNiwgZmlnNywgZmlnOCwgZmlnOSwgZmlnMTBdO1xuXG5sZXQgY291bnQgPSAwO1xuXG5sZXQgc2NvcmUgPSAwO1xuXG4vKipcbiAqIE1lbW9yeSB0ZXN0XG4gKi9cbmNvbnN0IHRlc3QzID0ge1xuXG4gICAgYW5zQm94TGlzdDogW1xuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAyLFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICA3LFxuICAgICAgICA4LFxuICAgICAgICA5XG4gICAgXSxcblxuICAgIGNvcnJlY3RPcmRlcjogW1xuICAgICAgICA2LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICA0LFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICAyXG4gICAgXSxcblxuICAgIC8qKlxuICAgICAqIFdpbGwgZ2l2ZSBpbnRyb2R1Y3RvcnkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRlc3QuXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgYmVnaW5UZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUZXN0IDNcIjtcbiAgICAgICAgaW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gXCJZb3Ugd2lsbCBiZSBwcmVzZW50ZWQgd2l0aCAxMCBmaWd1cmVzLiBUaGUgZmlndXJlcyBkaWZmZXIgaW4gY29sb3IgYW5kIHNoYXBlLiBCZWxvdyB0aGUgZmlndXJlcyB5b3Ugd2lsbCBzZWUgYSBsaXN0LiBZb3VyIHRhc2sgaXMgdG8gY2xpY2sgb24gdGhlIGZpZ3VyZXMgaW4gb3JkZXIgYWNjb3JkaW5nIHRvIHRoYXQgbGlzdCwgZS5nLiAnMS4gQnJvd24gVHJpYW5nbGUsIDIuIFllbGxvdyBDaXJjbGUgLi4uJy5Zb3UgaGF2ZSAxNSBzZWNvbmRzIHRvIGZpbmlzaCB0aGUgdGVzdC4gSWYgeW91IGNsaWNrIG9uIHRoZSB3cm9uZyBmaWd1cmUgdGhlIHRlc3QgZW5kcy5cIjtcbiAgICAgICAgYmVnaW5UZXN0QnV0dG9uLmlubmVySFRNTCA9IFwiU1RBUlRcIjtcblxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QgPSBcInRpdGxlXCI7XG4gICAgICAgIGluc3RydWN0aW9uLmNsYXNzTGlzdCA9IFwiaW5zdHJ1Y3Rpb25cIjtcbiAgICAgICAgYmVnaW5UZXN0QnV0dG9uLmNsYXNzTGlzdCA9IFwiYnV0dG9uXCI7XG5cbiAgICAgICAgYmVnaW5UZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRlc3QzLmNyZWF0ZVRhYmxlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGVcIilbMF0ucmVtb3ZlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5zdHJ1Y3Rpb25cIilbMF0ucmVtb3ZlKCk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChiZWdpblRlc3RCdXR0b24pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSB0ZXN0LiBUaGUgdGFibGUgY29udGFpbnMgdGhlIHRlbiBmaWd1cmVzLiBBbHNvIGFkZHMgYSB0aW1lci5cbiAgICAgKi9cbiAgICBjcmVhdGVUYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUYWJsZVxuICAgICAgICBjb25zdCB0YmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgICAgIHRibC5pZCA9IFwiYW5zLXRhYmxlXCI7XG5cbiAgICAgICAgLy8gUXVlc3Rpb25cbiAgICAgICAgcXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IFwiVGltZXIgaGFzIHN0YXJ0ZWQ8YnI+PGJyPlwiO1xuICAgICAgICBxdWVzdGlvbi5pZCA9IFwicXVlc3Rpb25zLXRlc3QzXCI7XG5cbiAgICAgICAgLy8gSW5zZXJ0IHR3byByb3dzIHdpdGggZml2ZSBjb2x1bW5zIGVhY2hcbiAgICAgICAgY29uc3Qgcm93ID0gdGJsLmluc2VydFJvdygpO1xuICAgICAgICBjb25zdCByb3cyID0gdGJsLmluc2VydFJvdygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0gPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldLmNsYXNzTGlzdCA9IFwiYm94LXNxdWFyZSBjbGlja2FibGVcIjtcbiAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXS5pZCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDU7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0gPSByb3cyLmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXS5jbGFzc0xpc3QgPSBcImJveC1zcXVhcmUgY2xpY2thYmxlXCI7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uaWQgPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29ycmVjdCBPcmRlciBUeHRcbiAgICAgICAgY29ycmVjdE9yZGVyVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvcnJlY3RPcmRlclR4dC5pbm5lckhUTUwgPSBcIjEuIHJlZCB0cmlhbmdsZSwgMi4gYnJvd24gcmVjdGFuZ2xlLCAzLiB5ZWxsb3cgY2lyY2xlLCA0LiBibHVlIHNxdWFyZSwgNS4gY3lhbiB0cmlhbmdsZSwgNi4gb3JhbmdlIHNxdWFyZSwgNy4gZ3JlZW4gY2lyY2xlLCA4LiBwdXJwbGUgc3F1YXJlLCA5IGxpbWUgcmVjdGFuZ2xlXCI7XG4gICAgICAgIGNvcnJlY3RPcmRlclR4dC5pZCA9IFwiY29ycmVjdE9yZGVyVHh0XCI7XG5cbiAgICAgICAgLy8gTmV4dCBCdXR0b25cbiAgICAgICAgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdCA9IFwiYnV0dG9uXCI7XG4gICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZmluaXNoVGVzdCk7XG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJIVE1MID0gXCJORVhUXCI7XG4gICAgICAgIG5leHRCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgICAgICAgLy8gQ3JlYXRlXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0YmwpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb3JyZWN0T3JkZXJUeHQpO1xuXG4gICAgICAgIC8vIERyYXcgZmlndXJlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zQm94TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmlnTGlzdFtpXS5kcmF3KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgbGlzdGVuZXJzXG4gICAgICAgIHRoaXMuc2V0TGlzdGVybmVycygpO1xuXG4gICAgICAgIC8vIFRpbWVyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGZpbmlzaGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRlc3QzLmRlbGV0ZUFsbEZpZ3MoKTtcbiAgICAgICAgICAgICAgICB0ZXN0My50aW1lc1VwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDE1MDAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzYW1lIEV2ZW50TGlzdGVuZXJzIHRvIGFsbCBhbnNCb3hlcy5cbiAgICAgKi9cbiAgICBzZXRMaXN0ZXJuZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnNCb3hMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrSWZDb3JyZWN0KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYWxsIGZpZ3VyZXMuXG4gICAgICovXG4gICAgZGVsZXRlQWxsRmlnczogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBmaWdzVG9EZWxldGUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmaWdcIikpIHtcbiAgICAgICAgICAgIGZpZ3NUb0RlbGV0ZS5wdXNoKGkpO1xuICAgICAgICAgICAgLy8gaS5yZW1vdmUoKTsgLy8gZ8OlciBlaiwgZMOlIGbDtnJzdmlubmVyIGJhcmEgaMOkbGZ0ZW4hXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGZpZ3NUb0RlbGV0ZSkge1xuICAgICAgICAgICAgaS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHNjb3JlIHRoYXQgd2lsbCBiZSBhZGRlZCB0byBtZXRhIHNjb3JlIGF0IHRoZSBlbmQuXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBzY29yZVRvQWRkXG4gICAgICovXG4gICAgYWRkU2NvcmU6IGZ1bmN0aW9uIChzY29yZVRvQWRkKSB7XG4gICAgICAgIHNjb3JlICs9IHNjb3JlVG9BZGQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdhbWUgT3Zlci4gSXMgY2FsbGVkIHdoZW4gcGxheWVyIGNob29zZXMgYW4gaW5jb3JyZWN0IGFuc0JveC5cbiAgICAgKi9cbiAgICBsb3N0R2FtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBcIkdhbWUgT3Zlcjxicj48YnI+XCI7XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiB0aGlzLmFuc0JveExpc3QpIHtcbiAgICAgICAgICAgIGlmIChpLmlkICE9PSBcImNvcnJlY3RcIikge1xuICAgICAgICAgICAgICAgIGkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdCA9IFwiYm94LXNxdWFyZVwiOyAvLyBjdXJzb3JzdHlsZSBub3QgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgaS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tJZkNvcnJlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvcnJlY3RPcmRlclR4dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgbmV4dEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdhbWUgT3Zlci4gSXMgY2FsbGVkIGlmIHRpbWUgcnVucyBvdXQuXG4gICAgICovXG4gICAgdGltZXNVcDogZnVuY3Rpb24gKCkge1xuICAgICAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBcIlRpbWUgaXMgdXA8YnI+PGJyPlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy5hbnNCb3hMaXN0KSB7XG4gICAgICAgICAgICBpZiAoaS5pZCAhPT0gXCJjb3JyZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QgPSBcImJveC1zcXVhcmVcIjsgLy8gY3Vyc29yc3R5bGUgbm90IGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgIGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrSWZDb3JyZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb3JyZWN0T3JkZXJUeHQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIG5leHRCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHYW1lIE92ZXIuIElzIGNhbGxlZCBpZiBwbGF5ZXIgYWNlcyB0aGUgdGVzdC5cbiAgICAgKi9cbiAgICBjaGVhdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IFwiRmluaXNoZWQ8YnI+PGJyPlwiO1xuICAgICAgICBjb3JyZWN0T3JkZXJUeHQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIG5leHRCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuZHMgdGhlIHRlc3QgYW5kIHByZXNlbnRzIHRoZSBlbmRpbmcgc2NvcmUgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIG1ldGEgc2NvcmVcbiAgICAgKi9cbiAgICBmaW5pc2hUZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zLXRhYmxlXCIpLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9ucy10ZXN0M1wiKS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3JyZWN0T3JkZXJUeHRcIikucmVtb3ZlKCk7XG4gICAgICAgIG5leHRCdXR0b24ucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IGZpbmFsTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRlc3QgQ29tcGxldGVkXCI7XG4gICAgICAgIGZpbmFsTWVzc2FnZS5pbm5lckhUTUwgPSBcIlNjb3JlOiBcIiArIHNjb3JlICsgXCIvMTBcIjtcbiAgICAgICAgZmluaXNoQnV0dG9uLmlubmVySFRNTCA9IFwiRklOSVNIXCI7XG5cbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuICAgICAgICBmaW5hbE1lc3NhZ2UuY2xhc3NMaXN0ID0gXCJpbnN0cnVjdGlvblwiO1xuICAgICAgICBmaW5pc2hCdXR0b24uY2xhc3NMaXN0ID0gXCJidXR0b25cIjtcblxuICAgICAgICB0aXRsZS5pZCA9IFwidGl0bGUtdGVzdDNcIjtcbiAgICAgICAgZmluYWxNZXNzYWdlLmlkID0gXCJpbnN0cnVjdGlvbi10ZXN0M1wiO1xuICAgICAgICBmaW5pc2hCdXR0b24uaWQgPSBcImZpbmlzaGJ1dHRvbi10ZXN0M1wiO1xuXG4gICAgICAgIGZpbmlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBhZGRUb01ldGFTY29yZShzY29yZSk7XG4gICAgICAgICAgICBuZXh0U3RlcCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS10ZXN0M1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb24tdGVzdDNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChmaW5hbE1lc3NhZ2UpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZmluaXNoQnV0dG9uKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3VwZXIgc2VjcmV0IHJlc2V0IGZ1bmN0aW9uLiBGb3IgY2hlYXRlcnMgb25seS5cbiAgICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIHNjb3JlID0gMDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3Q29udGVudERpdi5pZCA9IFwiY29udGVudFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQobmV3Q29udGVudERpdik7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbn07XG5cbi8vIC0tLSBBREQgRVZFTlQgTElTVEVORVJTIC0tLVxuLyoqXG4gKiBFdmVudExpc3RlbmVyIGZ1bmN0aW9uLiBXaWxsIGNvbXBhcmUgd2l0aCBjb3JyZWN0T3JkZXJbY291bnRdIHRvIHNlZSBpZiBwbGF5ZXIgY2xpY2tlZCB0aGUgY29ycmVjdCBhbnNCb3guXG4gKi9cbmZ1bmN0aW9uIGNoZWNrSWZDb3JyZWN0IChldmVudCkge1xuICAgIGlmIChwYXJzZUludChldmVudC50YXJnZXQuaWQpID09PSB0ZXN0My5jb3JyZWN0T3JkZXJbY291bnRdKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0ID0gXCJib3gtc3F1YXJlXCI7IC8vIGN1cnNvcnN0eWxlIG5vdCBjbGlja2FibGUgYW55bW9yZVxuICAgICAgICBldmVudC50YXJnZXQuaWQgPSBcImNvcnJlY3RcIjsgLy8gd2lsbCBub3QgdHVybiByZWQgYXQgZ2FtZW92ZXIgKHNlZSBsb3N0R2FtZSgpKVxuICAgICAgICB0ZXN0My5hZGRTY29yZSgxKTtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0lmQ29ycmVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGVzdDMuZGVsZXRlQWxsRmlncygpO1xuICAgICAgICB0ZXN0My5sb3N0R2FtZSgpO1xuICAgIH1cbiAgICBpZiAoY291bnQgPT09IGZpZ0xpc3QubGVuZ3RoKSB7XG4gICAgICAgIHRlc3QzLmNoZWF0ZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHRlc3QzIH07XG4iLCJpbXBvcnQgeyBGaWcgfSBmcm9tIFwiLi9maWdDb25zdHJ1Y3RcIjtcbmltcG9ydCB7IG5leHRTdGVwIH0gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHsgYWRkVG9NZXRhU2NvcmUgfSBmcm9tIFwiLi9tZXRhU2NvcmVcIjtcblxubGV0IHF1ZXN0aW9uID0gbnVsbDtcbmxldCBjb3JyZWN0T3JkZXJUeHQgPSBudWxsO1xubGV0IG5leHRCdXR0b24gPSBudWxsO1xuXG5jb25zdCBmaWcxID0gbmV3IEZpZygwLCBcImJsdWVcIiwgXCJzcXVhcmVcIik7XG5jb25zdCBmaWcyID0gbmV3IEZpZygxLCBcImdvbGRcIiwgXCJjaXJjbGVcIik7XG5jb25zdCBmaWczID0gbmV3IEZpZygyLCBcIm1hZ2VudGFcIiwgXCJ0cmlhbmdsZVwiKTtcbmNvbnN0IGZpZzQgPSBuZXcgRmlnKDMsIFwiYnJvd25cIiwgXCJjaXJjbGVcIik7XG5jb25zdCBmaWc1ID0gbmV3IEZpZyg0LCBcImN5YW5cIiwgXCJ0cmlhbmdsZVwiKTtcbmNvbnN0IGZpZzYgPSBuZXcgRmlnKDUsIFwib3JhbmdlXCIsIFwic3F1YXJlXCIpO1xuY29uc3QgZmlnNyA9IG5ldyBGaWcoNiwgXCJyZWRcIiwgXCJ0cmlhbmdsZVwiKTtcbmNvbnN0IGZpZzggPSBuZXcgRmlnKDcsIFwicHVycGxlXCIsIFwic3F1YXJlXCIpO1xuY29uc3QgZmlnOSA9IG5ldyBGaWcoOCwgXCJncmVlblwiLCBcImNpcmNsZVwiKTtcblxuY29uc3QgZmlnTGlzdCA9IFtmaWcxLCBmaWcyLCBmaWczLCBmaWc0LCBmaWc1LCBmaWc2LCBmaWc3LCBmaWc4LCBmaWc5XTtcblxubGV0IGNvdW50ID0gMDtcblxubGV0IHNjb3JlID0gMDtcblxuLyoqXG4gKiBNZW1vcnkgdGVzdFxuICovXG5jb25zdCB0ZXN0NCA9IHtcblxuICAgIGFuc0JveExpc3Q6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgOFxuICAgIF0sXG5cbiAgICBjb3JyZWN0T3JkZXI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMixcbiAgICAgICAgOCxcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgMCxcbiAgICAgICAgNlxuICAgIF0sXG5cbiAgICAvKipcbiAgICAgKiBXaWxsIGdpdmUgaW50cm9kdWN0b3J5IGluZm9ybWF0aW9uIGFib3V0IHRoZSB0ZXN0LlxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGJlZ2luVGVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVGVzdCA0XCI7XG4gICAgICAgIGluc3RydWN0aW9uLmlubmVySFRNTCA9IFwiWW91IHdpbGwgYmUgcHJlc2VudGVkIHdpdGggOSBmaWd1cmVzLiBUaGUgZmlndXJlcyBkaWZmZXIgaW4gY29sb3IgYW5kIHNoYXBlLiBUcnkgdG8gcmVtZW1iZXIgdGhlaXIgcmVzcGVjdGl2ZSBwb3NpdGlvbnMuIEFmdGVyIDUgc2Vjb25kcyB0aGUgZmlndXJlcyB3aWxsIGRpc2FwcGVhci4gWW91IHdpbGwgYmUgYXNrZWQgdG8gY2xpY2sgb24gdGhlaXIgcG9zaXRpb25zIGluIGEgY2VydGFpbiBvcmRlciBiYXNlZCBvbiB3aGF0IGNvbG9yIGFuZCBzaGFwZSB0aGV5IGhhZC4gSWYgeW91IGNsaWNrIG9uIHRoZSB3cm9uZyBwb3NpdGlvbiB0aGUgdGVzdCBlbmRzLlwiO1xuICAgICAgICBiZWdpblRlc3RCdXR0b24uaW5uZXJIVE1MID0gXCJTVEFSVFwiO1xuXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdCA9IFwidGl0bGVcIjtcbiAgICAgICAgaW5zdHJ1Y3Rpb24uY2xhc3NMaXN0ID0gXCJpbnN0cnVjdGlvblwiO1xuICAgICAgICBiZWdpblRlc3RCdXR0b24uY2xhc3NMaXN0ID0gXCJidXR0b25cIjtcblxuICAgICAgICBiZWdpblRlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGVzdDQuY3JlYXRlVGFibGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZVwiKVswXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnN0cnVjdGlvblwiKVswXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGluc3RydWN0aW9uKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGJlZ2luVGVzdEJ1dHRvbik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHRlc3QuIFRoZSB0YWJsZSBjb250YWlucyB0aGUgbmluZSBmaWd1cmVzLiBBbHNvIGFkZHMgYSB0aW1lci5cbiAgICAgKi9cbiAgICBjcmVhdGVUYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUYWJsZVxuICAgICAgICBjb25zdCB0YmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgICAgIHRibC5pZCA9IFwiYW5zLXRhYmxlXCI7XG5cbiAgICAgICAgLy8gUXVlc3Rpb25cbiAgICAgICAgcXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IFwiUmVtZW1iZXIgcG9zaXRpb25zIDxicj48YnI+XCI7XG4gICAgICAgIHF1ZXN0aW9uLmlkID0gXCJxdWVzdGlvbnMtdGVzdDRcIjtcblxuICAgICAgICAvLyBJbnNlcnQgdGhyZWUgcm93cyB3aXRoIHRocmVlIGNvbHVtbnMgZWFjaFxuICAgICAgICBjb25zdCByb3cgPSB0YmwuaW5zZXJ0Um93KCk7XG4gICAgICAgIGNvbnN0IHJvdzIgPSB0YmwuaW5zZXJ0Um93KCk7XG4gICAgICAgIGNvbnN0IHJvdzMgPSB0YmwuaW5zZXJ0Um93KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXSA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uY2xhc3NMaXN0ID0gXCJib3gtc3F1YXJlXCI7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uaWQgPSBpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAzOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0gPSByb3cyLmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXS5jbGFzc0xpc3QgPSBcImJveC1zcXVhcmVcIjtcbiAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXS5pZCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDY7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYW5zQm94TGlzdFtpXSA9IHJvdzMuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldLmNsYXNzTGlzdCA9IFwiYm94LXNxdWFyZVwiO1xuICAgICAgICAgICAgdGhpcy5hbnNCb3hMaXN0W2ldLmlkID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcnJlY3QgT3JkZXIgVHh0XG4gICAgICAgIGNvcnJlY3RPcmRlclR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb3JyZWN0T3JkZXJUeHQuaW5uZXJIVE1MID0gXCI8YnI+PGJyPlwiOyAvLyB3aWxsIGJlIGNoYW5nZWQgbGF0ZXIsIG5vdyBpdCdzIGp1c3QgdG8gdGFrZSB1cCBzcGFjZVxuICAgICAgICBjb3JyZWN0T3JkZXJUeHQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGNvcnJlY3RPcmRlclR4dC5pZCA9IFwiY29ycmVjdE9yZGVyVHh0XCI7XG5cbiAgICAgICAgLy8gTmV4dCBCdXR0b25cbiAgICAgICAgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdCA9IFwiYnV0dG9uXCI7XG4gICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZmluaXNoVGVzdCk7XG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJIVE1MID0gXCJORVhUXCI7XG4gICAgICAgIG5leHRCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgICAgICAgLy8gQ3JlYXRlXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0YmwpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChjb3JyZWN0T3JkZXJUeHQpO1xuXG4gICAgICAgIC8vIERyYXcgZmlndXJlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW5zQm94TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmlnTGlzdFtpXS5kcmF3KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaW1lclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRlc3Q0LnNldExpc3Rlcm5lcnMoKTtcbiAgICAgICAgICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IFwiTm93IGNsaWNrIG9uIHRoZSBwb3NpdGlvbnMgYWNjb3JkaW5nIHRvIHRoZSBvcmRlciBiZWxvd1wiO1xuICAgICAgICAgICAgY29ycmVjdE9yZGVyVHh0LmlubmVySFRNTCA9IFwiMS4gQ3lhbiBUcmlhbmdsZSAyLiBQaW5rIFRyaWFuZ2xlIDMuIEdyZWVuIENpcmNsZSA0LiBQdXJwbGUgU3F1YXJlIDUuIFllbGxvdyBDaXJjbGUgNi4gQnJvd24gQ2lyY2xlIDcuIE9yYW5nZSBTcXVhcmUgOC4gQmx1ZSBTcXVhcmUgOS4gUmVkIFRyaWFuZ2xlXCI7XG4gICAgICAgICAgICBjb3JyZWN0T3JkZXJUeHQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0NC5hbnNCb3hMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGVzdDQuYW5zQm94TGlzdFtpXS5jbGFzc0xpc3QgKz0gXCIgY2xpY2thYmxlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmaWdzVG9EZWxldGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmlnXCIpKSB7XG4gICAgICAgICAgICAgICAgZmlnc1RvRGVsZXRlLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgLy8gaS5yZW1vdmUoKTsgLy8gZ8OlciBlaiwgZMOlIGbDtnJzdmlubmVyIGJhcmEgaMOkbGZ0ZW4hXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgb2YgZmlnc1RvRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgaS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2FtZSBFdmVudExpc3RlbmVycyB0byBhbGwgYW5zQm94ZXNcbiAgICAgKi9cbiAgICBzZXRMaXN0ZXJuZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbnNCb3hMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFuc0JveExpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrSWZDb3JyZWN0KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHNjb3JlIHRoYXQgd2lsbCBiZSBhZGRlZCB0byBtZXRhIHNjb3JlIGF0IHRoZSBlbmRcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHNjb3JlVG9BZGRcbiAgICAgKi9cbiAgICBhZGRTY29yZTogZnVuY3Rpb24gKHNjb3JlVG9BZGQpIHtcbiAgICAgICAgc2NvcmUgKz0gc2NvcmVUb0FkZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2FtZSBPdmVyLiBJcyBjYWxsZWQgd2hlbiBwbGF5ZXIgY2hvb3NlcyBhbiBpbmNvcnJlY3QgYW5zQm94LlxuICAgICAqL1xuICAgIGxvc3RHYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IFwiR2FtZSBvdmVyPGJyPjxicj5cIjtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIHRoaXMuYW5zQm94TGlzdCkge1xuICAgICAgICAgICAgaWYgKGkuaWQgIT09IFwiY29ycmVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0ID0gXCJib3gtc3F1YXJlXCI7IC8vIGN1cnNvcnN0eWxlIG5vdCBjbGlja2FibGVcbiAgICAgICAgICAgICAgICBpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0lmQ29ycmVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29ycmVjdE9yZGVyVHh0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBuZXh0QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2FtZSBPdmVyLiBJcyBjYWxsZWQgaWYgcGxheWVyIGFjZXMgdGhlIHRlc3QgKGFzIGlmKS5cbiAgICAgKi9cbiAgICBjaGVhdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IFwiQ2hlYXRlciBkZXRlY3RlZDxicj48YnI+XCI7XG4gICAgICAgIGNvcnJlY3RPcmRlclR4dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgbmV4dEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuZHMgdGhlIHRlc3QgYW5kIHByZXNlbnRzIHRoZSBlbmRpbmcgc2NvcmUgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIG1ldGEgc2NvcmVcbiAgICAgKi9cbiAgICBmaW5pc2hUZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zLXRhYmxlXCIpLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9ucy10ZXN0NFwiKS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3JyZWN0T3JkZXJUeHRcIikucmVtb3ZlKCk7XG4gICAgICAgIG5leHRCdXR0b24ucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IGZpbmFsTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRlc3QgQ29tcGxldGVkXCI7XG4gICAgICAgIGZpbmFsTWVzc2FnZS5pbm5lckhUTUwgPSBcIlNjb3JlOiBcIiArIHNjb3JlICsgXCIvOVwiO1xuICAgICAgICBmaW5pc2hCdXR0b24uaW5uZXJIVE1MID0gXCJGSU5JU0hcIjtcblxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QgPSBcInRpdGxlXCI7XG4gICAgICAgIGZpbmFsTWVzc2FnZS5jbGFzc0xpc3QgPSBcImluc3RydWN0aW9uXCI7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QgPSBcImJ1dHRvblwiO1xuXG4gICAgICAgIHRpdGxlLmlkID0gXCJ0aXRsZS10ZXN0NFwiO1xuICAgICAgICBmaW5hbE1lc3NhZ2UuaWQgPSBcImluc3RydWN0aW9uLXRlc3Q0XCI7XG4gICAgICAgIGZpbmlzaEJ1dHRvbi5pZCA9IFwiZmluaXNoYnV0dG9uLXRlc3Q0XCI7XG5cbiAgICAgICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGFkZFRvTWV0YVNjb3JlKHNjb3JlKTtcbiAgICAgICAgICAgIG5leHRTdGVwKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLXRlc3Q0XCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdGlvbi10ZXN0NFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGZpbmFsTWVzc2FnZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChmaW5pc2hCdXR0b24pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdXBlciBzZWNyZXQgcmVzZXQgZnVuY3Rpb24uIEZvciBjaGVhdGVycyBvbmx5LlxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdDb250ZW50RGl2LmlkID0gXCJjb250ZW50XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChuZXdDb250ZW50RGl2KTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxufTtcblxuLy8gLS0tIEFERCBFVkVOVCBMSVNURU5FUlMgLS0tXG4vKipcbiAqIEV2ZW50TGlzdGVuZXIgZnVuY3Rpb24uIFdpbGwgY29tcGFyZSB3aXRoIGNvcnJlY3RPcmRlcltjb3VudF0gdG8gc2VlIGlmIHBsYXllciBjbGlja2VkIHRoZSBjb3JyZWN0IGFuc0JveC5cbiAqL1xuZnVuY3Rpb24gY2hlY2tJZkNvcnJlY3QgKGV2ZW50KSB7XG4gICAgaWYgKHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZCkgPT09IHRlc3Q0LmNvcnJlY3RPcmRlcltjb3VudF0pIHtcbiAgICAgICAgZmlnTGlzdFtldmVudC50YXJnZXQuaWRdLmRyYXcoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCA9IFwiYm94LXNxdWFyZVwiOyAvLyBjdXJzb3JzdHlsZSBub3QgY2xpY2thYmxlIGFueW1vcmVcbiAgICAgICAgZXZlbnQudGFyZ2V0LmlkID0gXCJjb3JyZWN0XCI7IC8vIHdpbGwgbm90IHR1cm4gcmVkIGF0IGdhbWVvdmVyIChzZWUgbG9zdEdhbWUoKSlcbiAgICAgICAgdGVzdDQuYWRkU2NvcmUoMSk7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tJZkNvcnJlY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRlc3Q0Lmxvc3RHYW1lKCk7XG4gICAgfVxuICAgIGlmIChjb3VudCA9PT0gOSkge1xuICAgICAgICB0ZXN0NC5jaGVhdGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyB0ZXN0NCB9O1xuIiwiaW1wb3J0IHsgRmlnIH0gZnJvbSBcIi4vZmlnQ29uc3RydWN0XCI7XG5pbXBvcnQgeyBuZXh0U3RlcCB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IGFkZFRvTWV0YVNjb3JlIH0gZnJvbSBcIi4vbWV0YVNjb3JlXCI7XG5cbmxldCBxdWVzdGlvbiA9IG51bGw7XG5sZXQgYW5zQm94ID0gbnVsbDtcbmxldCBjaG9zZVRvQ2xpY2sgPSBmYWxzZTtcbmxldCBjYW5DbGljayA9IGZhbHNlO1xubGV0IHNob3dGaWdzSW50ZXJ2YWwgPSBudWxsO1xubGV0IHRpbWVyVG9JbnRlcnZhbCA9IG51bGw7XG5cbmNvbnN0IGZpZzEgPSBuZXcgRmlnKDAsIFwiYmx1ZVwiLCBcImNpcmNsZVwiKTtcbmNvbnN0IGZpZzIgPSBuZXcgRmlnKDAsIFwib3JhbmdlXCIsIFwic3F1YXJlXCIpO1xuY29uc3QgZmlnMyA9IG5ldyBGaWcoMCwgXCJtYWdlbnRhXCIsIFwidHJpYW5nbGVcIik7XG5jb25zdCBmaWc0ID0gbmV3IEZpZygwLCBcInJlZFwiLCBcInNxdWFyZVwiKTtcbmNvbnN0IGZpZzUgPSBuZXcgRmlnKDAsIFwiY3lhblwiLCBcInNxdWFyZVwiKTtcbmNvbnN0IGZpZzYgPSBuZXcgRmlnKDAsIFwicmVkXCIsIFwidHJpYW5nbGVcIik7XG5jb25zdCBmaWc3ID0gbmV3IEZpZygwLCBcImJsdWVcIiwgXCJzcXVhcmVcIik7XG5jb25zdCBmaWc4ID0gbmV3IEZpZygwLCBcInB1cnBsZVwiLCBcImNpcmNsZVwiKTtcbmNvbnN0IGZpZzkgPSBuZXcgRmlnKDAsIFwicmVkXCIsIFwidHJpYW5nbGVcIik7XG5jb25zdCBmaWcxMCA9IG5ldyBGaWcoMCwgXCJyZWRcIiwgXCJzcXVhcmVcIik7XG5cbmNvbnN0IGZpZ0xpc3QgPSBbZmlnMSwgZmlnMiwgZmlnMywgZmlnNCwgZmlnNSwgZmlnNiwgZmlnNywgZmlnOCwgZmlnOSwgZmlnMTBdO1xuXG5sZXQgY291bnQgPSAtMTtcblxubGV0IHNjb3JlID0gMDtcblxuLyoqXG4gKiBNZW1vcnkgdGVzdFxuICovXG5jb25zdCB0ZXN0NSA9IHtcblxuICAgIGNvcnJlY3RBbnM6IFtcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWUsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRydWUsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB0cnVlXG4gICAgXSxcblxuICAgIC8qKlxuICAgICAqIFdpbGwgZ2l2ZSBpbnRyb2R1Y3RvcnkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRlc3QuXG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgYmVnaW5UZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUZXN0IDVcIjtcbiAgICAgICAgaW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gXCJZb3Ugd2lsbCBiZSBwcmVzZW50ZWQgd2l0aCAxMCBmaWd1cmVzIHNlcXVlbnRpYWxseS4gWW91ciB0YXNrIGlzIHRvIGNsaWNrIG9uIHRoZSBmaWd1cmUgdW5sZXNzIGl0J3MgcmVkIG9yIGlzIHRoZSBzaGFwZSBvZiBhIHNxdWFyZS4gSG93ZXZlciBpZiB0aGUgZmlndXJlIGlzIDxlbT5ib3RoPC9lbT4gcmVkIGFuZCBhIHNxdWFyZSB5b3UgbXVzdCBhbHNvIGNsaWNrIG9uIGl0LiA8YnI+PGJyPiBGb3IgZXhhbXBsZSwgY2xpY2sgb24gdGhlIGZpZ3VyZSBpZiBpdCdzIGEgcHVycGxlIHRyaWFuZ2xlIG9yIGEgcmVkIHNxdWFyZS4gRG8gbm90IGNsaWNrIG9uIHRoZSBmaWd1cmUgaWYgaXQncyBhIHllbGxvdyBzcXVhcmUgb3IgYSByZWQgY2lyY2xlLjxicj48YnI+IFBsZWFzZSwgdGFrZSB0aGUgdGltZSB0byB1bmRlcnN0YW5kIHRoZSBpbnN0cnVjdGlvbiBhbmQgcmVtZW1iZXIgdGhlIHJ1bGVzIGJlZm9yZSB5b3Ugc3RhcnQuXCI7XG4gICAgICAgIGJlZ2luVGVzdEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNUQVJUXCI7XG5cbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuICAgICAgICBpbnN0cnVjdGlvbi5jbGFzc0xpc3QgPSBcImluc3RydWN0aW9uXCI7XG4gICAgICAgIGJlZ2luVGVzdEJ1dHRvbi5jbGFzc0xpc3QgPSBcImJ1dHRvblwiO1xuXG4gICAgICAgIGJlZ2luVGVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0ZXN0NS5jcmVhdGVUYWJsZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlXCIpWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImluc3RydWN0aW9uXCIpWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb24pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoYmVnaW5UZXN0QnV0dG9uKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgdGVzdC4gQWxzbyBzdGFydHMgYW4gaW50ZXJ2YWwgYW5kIGEgdGltZXIuXG4gICAgICovXG4gICAgY3JlYXRlVGFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVGFibGVcbiAgICAgICAgY29uc3QgdGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgICAgICB0YmwuaWQgPSBcImFucy10YWJsZVwiO1xuXG4gICAgICAgIC8vIFF1ZXN0aW9uXG4gICAgICAgIHF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBcIkdldCByZWFkeVwiO1xuICAgICAgICBxdWVzdGlvbi5pZCA9IFwicXVlc3Rpb25zLXRlc3Q1XCI7XG5cbiAgICAgICAgLy8gSW5zZXJ0IGEgcm93IHdpdGggb25seSBvbmUgY29sdW1uIGFuZCBhZGQgRXZlbnRMaXN0ZW5lclxuICAgICAgICBjb25zdCByb3cgPSB0YmwuaW5zZXJ0Um93KCk7XG4gICAgICAgIGFuc0JveCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGFuc0JveC5jbGFzc0xpc3QgPSBcImJveC1zcXVhcmVcIjtcbiAgICAgICAgYW5zQm94LmlkID0gMDtcbiAgICAgICAgYW5zQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1c2VyQ2xpY2tlZCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0YmwpO1xuXG4gICAgICAgIC8vIEludGVydmFsXG4gICAgICAgIHNob3dGaWdzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnNob3dOZXdGaWcsIDMwMDApO1xuXG4gICAgICAgIC8vIFRpbWVyIGJlZm9yZSBpbnRlcnZhbCBzdG9wc1xuICAgICAgICB0aW1lclRvSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KHRoaXMudGltZXIsIDMyOTk5KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2lsbCBzcGF3biBhIG5ldyBmaWd1cmUuXG4gICAgICovXG4gICAgc2hvd05ld0ZpZzogZnVuY3Rpb24gKCkge1xuICAgICAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBcIlRlc3QgdW5kZXIgc2Vzc2lvblwiO1xuICAgICAgICBjb3VudCsrO1xuXG4gICAgICAgIC8vIHJlc2V0IGJveFxuICAgICAgICBhbnNCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBhbnNCb3guY2xhc3NMaXN0ID0gXCJib3gtc3F1YXJlIGNsaWNrYWJsZVwiO1xuICAgICAgICBjaG9zZVRvQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgY2FuQ2xpY2sgPSB0cnVlO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBmaWdcbiAgICAgICAgZmlnTGlzdFtjb3VudF0uZHJhdygpO1xuXG4gICAgICAgIC8vIHNldCB0aW1lclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhbnNCb3guY2hpbGROb2Rlc1swXSkge1xuICAgICAgICAgICAgICAgIGFuc0JveC5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FuQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGFuc0JveC5jbGFzc0xpc3QgPSBcImJveC1zcXVhcmVcIjsgLy8gY3Vyc29yIG5vdCBjbGlja2FibGUgc3R5bGUgYW55bW9yZVxuICAgICAgICAgICAgaWYgKGNob3NlVG9DbGljayA9PT0gdGVzdDUuY29ycmVjdEFuc1tjb3VudF0pIHtcbiAgICAgICAgICAgICAgICB0ZXN0NS5hZGRTY29yZSgxKTtcbiAgICAgICAgICAgICAgICBhbnNCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbnNCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFuc0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGltZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGNhbmNlbCB0aGUgaW50ZXJ2YWxcbiAgICAgKi9cbiAgICB0aW1lcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHNob3dGaWdzSW50ZXJ2YWwpO1xuICAgICAgICB0ZXN0NS5maW5pc2hUZXN0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgc2NvcmUgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIG1ldGEgc2NvcmUgYXQgdGhlIGVuZFxuICAgICAqIEBwYXJhbSAge251bWJlcn0gc2NvcmVUb0FkZFxuICAgICAqL1xuICAgIGFkZFNjb3JlOiBmdW5jdGlvbiAoc2NvcmVUb0FkZCkge1xuICAgICAgICBzY29yZSArPSBzY29yZVRvQWRkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmRzIHRoZSB0ZXN0IGFuZCBwcmVzZW50cyB0aGUgZW5kaW5nIHNjb3JlIHRoYXQgd2lsbCBiZSBhZGRlZCB0byBtZXRhIHNjb3JlXG4gICAgICovXG4gICAgZmluaXNoVGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFucy10YWJsZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvbnMtdGVzdDVcIikucmVtb3ZlKCk7XG4gICAgICAgIC8vIG5leHRCdXR0b24ucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IGZpbmFsTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRlc3QgQ29tcGxldGVkXCI7XG4gICAgICAgIGZpbmFsTWVzc2FnZS5pbm5lckhUTUwgPSBcIlNjb3JlOiBcIiArIHNjb3JlICsgXCIvMTBcIjtcbiAgICAgICAgZmluaXNoQnV0dG9uLmlubmVySFRNTCA9IFwiRklOSVNIXCI7XG5cbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0ID0gXCJ0aXRsZVwiO1xuICAgICAgICBmaW5hbE1lc3NhZ2UuY2xhc3NMaXN0ID0gXCJpbnN0cnVjdGlvblwiO1xuICAgICAgICBmaW5pc2hCdXR0b24uY2xhc3NMaXN0ID0gXCJidXR0b25cIjtcblxuICAgICAgICB0aXRsZS5pZCA9IFwidGl0bGUtdGVzdDVcIjtcbiAgICAgICAgZmluYWxNZXNzYWdlLmlkID0gXCJpbnN0cnVjdGlvbi10ZXN0NVwiO1xuICAgICAgICBmaW5pc2hCdXR0b24uaWQgPSBcImZpbmlzaGJ1dHRvbi10ZXN0NVwiO1xuXG4gICAgICAgIGZpbmlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBhZGRUb01ldGFTY29yZShzY29yZSk7XG4gICAgICAgICAgICBuZXh0U3RlcCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS10ZXN0NVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb24tdGVzdDVcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChmaW5hbE1lc3NhZ2UpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZmluaXNoQnV0dG9uKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3VwZXIgc2VjcmV0IHJlc2V0IGZ1bmN0aW9uLiBGb3IgY2hlYXRlcnMgb25seS4gV2lsbCBjbGVhciBpbnRlcnZhbCBhbmQgdGltZXIuXG4gICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaG93Rmlnc0ludGVydmFsKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVG9JbnRlcnZhbCk7XG4gICAgICAgIGNvdW50ID0gLTE7XG4gICAgICAgIHNjb3JlID0gMDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3Q29udGVudERpdi5pZCA9IFwiY29udGVudFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQobmV3Q29udGVudERpdik7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxufTtcblxuLy8gLS0tIEFERCBFVkVOVCBMSVNURU5FUlMgLS0tXG4vKipcbiAqIEV2ZW50TGlzdGVuZXIgZnVuY3Rpb24uIFdpbGwgdHVybiBhbnNCb3ggZ3JleSBhbmQgdHVybiBjaG9zZVRvQ2xpY2sgdG8gdHJ1ZVxuICovXG5mdW5jdGlvbiB1c2VyQ2xpY2tlZCAoZXZlbnQpIHtcbiAgICBpZiAoY2FuQ2xpY2spIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiTGlnaHRHcmF5XCI7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QgPSBcImJveC1zcXVhcmVcIjsgLy8gY3Vyc29yc3R5bGUgbm90IGNsaWNrYWJsZSBhbnltb3JlXG4gICAgICAgIGNob3NlVG9DbGljayA9IHRydWU7XG4gICAgICAgIGNhbkNsaWNrID0gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgeyB0ZXN0NSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2ttb20xMC9qcy9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9