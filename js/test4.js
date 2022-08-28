import { Fig } from "./figConstruct";
import { nextStep } from "./main";
import { addToMetaScore } from "./metaScore";

let question = null;
let correctOrderTxt = null;
let nextButton = null;

const fig1 = new Fig(0, "blue", "square");
const fig2 = new Fig(1, "gold", "circle");
const fig3 = new Fig(2, "magenta", "triangle");
const fig4 = new Fig(3, "brown", "circle");
const fig5 = new Fig(4, "cyan", "triangle");
const fig6 = new Fig(5, "orange", "square");
const fig7 = new Fig(6, "red", "triangle");
const fig8 = new Fig(7, "purple", "square");
const fig9 = new Fig(8, "green", "circle");

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
            addToMetaScore(score);
            nextStep();
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

export { test4 };
