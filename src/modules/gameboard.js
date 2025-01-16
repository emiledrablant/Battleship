
import Ship from "./ship";

class Gameboard {
    constructor(turn) {
        this.cells = {};
        this.board = new Map();
        this.registeredClicks = new Set();
        this.ships = [];
        this.buildBoard();
        //this.turnToPlay = turn;
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
                        //console.log("Error: another ship already in the way");
                        return false;
                    }
                }
                for (let k = 0; k < length; k++) {
                    this.board.set(this.cells[`${posX + k},${posY}`], "ship");
                    currentShip.position.push(`${posX + k},${posY}`);
                }
            } else {
                //console.log("Error: out of bounds");
                return false;
            }
        } else {
            if (posY + length < 11) {
                for (let k = 0; k < length; k++) {
                    if (this.board.get(this.cells[`${posX},${posY + k}`]) !== "empty") {
                        //console.log("Error: another ship already in the way");
                        return false;
                    }
                }
                for (let k = 0; k < length; k++) {
                    this.board.set(this.cells[`${posX},${posY + k}`], "ship");
                    currentShip.position.push(`${posX},${posY + k}`);
                }
            } else {
                //console.log("Error: out of bounds");
                return false;
            }
        }
        this.ships.push(currentShip);
        return true;
    }

    // Check the state of the board and update it accordingly.
    receiveAttack(posX, posY) {
        const coord = this.cells[`${posX},${posY}`];
        const status = this.board.get(coord);

        // Abord the function if the cell have already been clicked.
        if (this.registeredClicks.has(coord)) return;

        if (status === "empty") {
            this.board.set(coord, "miss");
        } else {
            for (const ship of this.ships) {
                if (ship.position.includes(`${posX},${posY}`)) {
                    ship.hit();
                    if (ship.isSunk()) {
                        this.changeStateOfSunkenShip(ship);
                    } else {
                        this.board.set(coord, "hit");
                    }
                }
            }
        }
        this.registeredClicks.add(coord);
    }

    // update the board map to mark the ships as sunk when it is the case.
    // Not meant to be called directly.
    changeStateOfSunkenShip(ship) {
        for (let part of ship.position) {
            this.board.set(this.cells[part], "sunk");
        }
    }

    // return true if all the ships contained in the board are sunk.
    checkForGameOver() {
        for (const ship of this.ships) {
            if (!ship.isSunk()) return false;
        }
        return true;
    }
}

export default Gameboard;