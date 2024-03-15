export class Board {
    constructor() {
        this.squares = 64;
        this.ranks = {
            count: 8,
            firstRankIds: ["sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8"],
            secondRankIds: ["sq9", "sq10", "sq11", "sq12", "sq13", "sq14", "sq15", "sq16"],
            thirdRankIds: ["sq17", "sq18", "sq19", "sq20", "sq21", "sq22", "sq23", "sq24"],
            fourthRankIds: ["sq25", "sq26", "sq27", "sq28", "sq29", "sq30", "sq31", "sq32"],
            fifthRankIds: ["sq33", "sq34", "sq35", "sq36", "sq37", "sq38", "sq39", "sq40"],
            sixthRankIds: ["sq41", "sq42", "sq43", "sq44", "sq45", "sq46", "sq47", "sq48"],
            seventhRankIds: ["sq49", "sq50", "sq51", "sq52", "sq53", "sq54", "sq55", "sq56"],
            eighthRankIds: ["sq57", "sq58", "sq59", "sq60", "sq61", "sq62", "sq63", "sq64"],
        };
        this.files = {
            count: 8,
            firstFileIds: ["sq1", "sq9", "sq17", "sq25", "sq33", "sq41", "sq49", "sq57"],
            secondFileIds: ["sq2", "sq10", "sq18", "sq26", "sq34", "sq42", "sq50", "sq58"],
            thirdFileIds: ["sq3", "sq11", "sq19", "sq27", "sq35", "sq43", "sq51", "sq59"],
            fourthFileIds: ["sq4", "sq12", "sq20", "sq28", "sq36", "sq44", "sq52", "sq60"],
            fifthFileIds: ["sq5", "sq13", "sq21", "sq29", "sq37", "sq45", "sq53", "sq61"],
            sixthFileIds: ["sq6", "sq14", "sq22", "sq30", "sq38", "sq46", "sq54", "sq62"],
            seventhFileIds: ["sq7", "sq15", "sq23", "sq31", "sq39", "sq47", "sq55", "sq63"],
            eighthFileIds: ["sq8", "sq16", "sq24", "sq32", "sq40", "sq48", "s56", "sq64"],
        };
        this.this.boardDisplay = document.getElementById("main-board");
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

    createRank() {}
}
