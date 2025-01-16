
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
        for (const ship of ships) {
            let shipPlacement = false;
            let safeCount = 0;
            while (!shipPlacement) {
                let r = this.randomNumbers();
                shipPlacement = this.data.placeShip(r[0], r[1], r[2] % 2, ship);
                safeCount++;
                console.log(r[0], r[1], r[2] % 2, ship);
                if (safeCount >= 20) {
                    break;
                }
            }
        }
        
        /*for (let i = 0; i < 5; i++) {
            let shipPlacement = false;
            while (!shipPlacement) {
                let r = this.randomNumbers();
                shipPlacement = this.data.placeShip(r[0], r[1], r[2] % 2, ships.pop());
                console.log(r[0], r[1], r[2] % 2, shipPlacement);
            }
        }*/
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