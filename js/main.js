import { showMetaScore } from "./metaScore";
import { presentIntroduction } from "./startmenu";
import { test1 } from "./test1";
import { test2 } from "./test2";
import { test3 } from "./test3";
import { test4 } from "./test4";
import { test5 } from "./test5";

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
        presentIntroduction();
        break;
    case 2:
        test1.init();
        break;
    case 3:
        test2.init();
        break;
    case 4:
        test3.init();
        break;
    case 5:
        test4.init();
        break;
    case 6:
        test5.init();
        break;
    case 7:
        showMetaScore();
        break;
    default:
        break;
    }
}

window.reset = function () {
    switch (count) {
    case 2:
        test1.reset();
        break;
    case 3:
        test2.reset();
        break;
    case 4:
        test3.reset();
        break;
    case 5:
        test4.reset();
        break;
    case 6:
        test5.reset();
        break;
    default:
        break;
    }
};

export { nextStep };
