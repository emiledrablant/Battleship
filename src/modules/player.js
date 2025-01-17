
import Gameboard from "./gameboard";
import { boardLeft, displayBoard } from "./dom";
import { randomNumbers } from "./global";

class Player {
    constructor(name) {
        this.board = new Gameboard();
        this.name = name;
        this.currentTurn = false;
        this.enemy;
    }

    deployFleet() {
        this.board.placeShipsRandomly();
    }

    accessContent(x, y) {
        return this.board.board.get(this.board.cells[`${x},${y}`]);
    }

    /*sendAttack(i, j) {
        this.enemy.receiveAttack(i, j);
        displayBoard()
    }*/
    
    sendAttackAI() {
        const r = randomNumbers();
        this.enemy.receiveAttack(r[0], r[1]);
        displayBoard(boardLeft);
        //this.currentTurn = false;
    }
}

export default Player;