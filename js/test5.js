import { Fig } from "./figConstruct";
import { nextStep } from "./main";
import { addToMetaScore } from "./metaScore";

let question = null;
let ansBox = null;
let choseToClick = false;
let canClick = false;
let showFigsInterval = null;
let timerToInterval = null;

const fig1 = new Fig(0, "blue", "circle");
const fig2 = new Fig(0, "orange", "square");
const fig3 = new Fig(0, "magenta", "triangle");
const fig4 = new Fig(0, "red", "square");
const fig5 = new Fig(0, "cyan", "square");
const fig6 = new Fig(0, "red", "triangle");
const fig7 = new Fig(0, "blue", "square");
const fig8 = new Fig(0, "purple", "circle");
const fig9 = new Fig(0, "red", "triangle");
const fig10 = new Fig(0, "red", "square");

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
            addToMetaScore(score);
            nextStep();
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

export { test5 };
