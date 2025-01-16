
import Gameboard from "./gameboard";

class Player {
    constructor(name,turn) {
        this.board = new Gameboard(turn);
        this.name = name;
    }

    deployFleet() {
        this.board.placeShipsRandomly();
    }

    accessContent(x, y) {
        return this.board.board.get(this.board.cells[`${x},${y}`]);
    }
    
}

export default Player;