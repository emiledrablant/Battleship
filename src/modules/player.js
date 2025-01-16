
import { randomNumbers } from "./global";
import Gameboard from "./gameboard";

class Player {
    constructor(name,turn) {
        this.data = new Gameboard(turn);
        this.name = name;
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
                let r = randomNumbers();
                shipPlacement = this.data.placeShip(r[0], r[1], r[2] % 2, ship);
                safeCount++;
                if (safeCount >= 20) {
                    break;
                }
            }
        }
    }

    
}

export default Player;