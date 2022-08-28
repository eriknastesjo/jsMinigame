import { nextStep } from "./main";

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
        nextStep();
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

export { presentIntroduction };
