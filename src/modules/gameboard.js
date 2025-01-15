
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
        
        if (xAxis) {
            if (posX + length < 11) {
                for (let k = 0; k < length; k++) {
                    if (this.board.get(this.cells[`${posX + k},${posY}`]) !== "empty") {
                        console.log("Error: another ship already in the way");
                        return;
                    }
                }
                for (let k = 0; k < length; k++) {
                    this.board.set(this.cells[`${posX + k},${posY}`], "ship");
                    currentShip.position.push(`${posX + k},${posY}`);
                }
            }
        } else {
            if (posY + length < 11) {
                for (let k = 0; k < length; k++) {
                    if (this.board.get(this.cells[`${posX},${posY + k}`]) !== "empty") {
                        console.log("Error: another ship already in the way");
                        return;
                    }
                }
                for (let k = 0; k < length; k++) {
                    this.board.set(this.cells[`${posX},${posY + k}`], "ship");
                    currentShip.position.push(`${posX},${posY + k}`);
                }
            }
        }
        this.ships.push(currentShip);
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