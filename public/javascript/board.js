export class Board {
    constructor() {
        this.squares = 64;
        this.boardDisplay = document.getElementById("main-board");
    }

    createSquare(id) {
        const sqr = document.createElement("div");
        sqr.className = "square";
        sqr.id = `sq${id}`;
        this.boardDisplay.append(sqr);
    }

    createBoard() {
        for (let i = 1; i <= this.squares; i++) {
            this.createSquare(i);
        }
    }
}
