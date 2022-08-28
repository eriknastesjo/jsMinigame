import { nextStep } from "./main";
import { addToMetaScore } from "./metaScore";

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
            addToMetaScore(score);
            nextStep();
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

export { test2 };
