
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

export { Fig };
