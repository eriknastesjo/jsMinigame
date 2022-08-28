import { nextStep } from "./main";
import { addToMetaScore } from "./metaScore";

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
            addToMetaScore(score);
            nextStep();
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

export { test1 };
