
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

export { addToMetaScore, showMetaScore };
