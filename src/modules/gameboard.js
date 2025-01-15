
import Ship from "./ship";

class Gameboard {
    constructor() {
        this.cells = {};
        this.board = new Map();
        this.ships = [];
        this.buildBoard();
    }

    buildBoard() {
        for (let j = 0; j < 10; j++) {
            for (let i = 0; i < 10; i++) {
                this.cells[`${i},${j}`] = [i, j];
                this.board.set(this.cells[`${i},${j}`], "empty");
            }
        }
        
    }

    placeShip(posX, posY, xAxis, length) {
        let currentShip = new Ship(length);
        
        // TODO : yAxis and check for when a ship is already in the way of another.
        
        if (xAxis) {
            if (posX + length < 11) {
                for (let k = 0; k < length; k++) {
                    this.board.set(this.cells[`${posX + k},${posY}`], "ship");
                    currentShip.position.push(`${posX + k},${posY}`);
                    //addCell(coord);
                }
            }
            this.ships.push(currentShip);
        }
        //console.log(this.ships);
    }

    receiveAttack(posX, posY) {
        const coord = this.cells[`${posX},${posY}`];
        const status = this.board.get(coord);

        if (status === "empty") {
            this.board.set(coord, "miss");
        } else {
            for (const ship of this.ships) {
                if (ship.position.includes(`${posX},${posY}`)) {
                    this.board.set(coord, "hit");
                    ship.hit();
                    ship.isSunk() ? console.log("Coulé !") : console.log("Touché !");
                    return;
                }
            }
        }
        //console.log(this.board.get(coord));
    }

    checkForGameOver() {
        for (const ship of this.ships) {
            if (!ship.isSunk()) return false;
        }
        console.log("Game Over! All ships are sunk!");
        return true;
    }
}

export default Gameboard;