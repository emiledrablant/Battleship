
import Gameboard from "./gameboard";

class Player {
    constructor() {
        this.data = new Gameboard;
    }

    accessContent(x, y) {
        return this.data.board.get(this.data.cells[`${x},${y}`]);
    }
}

export default Player;