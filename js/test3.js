import { Fig } from "./figConstruct";
import { nextStep } from "./main";
import { addToMetaScore } from "./metaScore";

let question = null;
let correctOrderTxt = null;
let nextButton = null;
let finished = false;

const fig1 = new Fig(0, "blue", "square");
const fig2 = new Fig(1, "gold", "circle");
const fig3 = new Fig(2, "magenta", "triangle");
const fig4 = new Fig(3, "brown", "rectangle");
const fig5 = new Fig(4, "cyan", "triangle");
const fig6 = new Fig(5, "orange", "square");
const fig7 = new Fig(6, "red", "triangle");
const fig8 = new Fig(7, "purple", "square");
const fig9 = new Fig(8, "green", "circle");
const fig10 = new Fig(9, "lime", "rectangle");

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
            addToMetaScore(score);
            nextStep();
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

export { test3 };
