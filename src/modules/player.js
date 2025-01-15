
import Gameboard from "./gameboard";

class Player {
    constructor(human = true) {
        this.data = new Gameboard;
        this.isHuman = human;
    }

    accessContent(x, y) {
        return this.data.board.get(this.data.cells[`${x},${y}`]);
    }
}

export default Player;