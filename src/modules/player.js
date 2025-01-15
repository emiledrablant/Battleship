
import Gameboard from "./gameboard";

class Player {
    constructor() {
        this.data = new Gameboard;
    }

    accessContent(x, y) {
        return this.data.board.get(this.data.cells[`${x},${y}`]);
    }

    placeShipsRandomly() {
        let ships = [2, 3, 3, 4, 5];
        for (let i = 0; i < 5; i++) {
            let shipPlacement = false;
            while (!shipPlacement) {
                let random = this.randomNumbers();
                shipPlacement = this.data.placeShip(random[0], random[1], random[2] % 2, ships.pop());
            }
        }
    }

    randomNumbers() {
        let min = 0;
        let max = 9;
        let result = [];

        for (let i = 0; i < 3; i++) {
            let n = Math.floor(Math.random() * (max - min + 1)) + min;
            result.push(n);
        }
        return result;
    }
}

export default Player;