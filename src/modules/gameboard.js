
import Ship from "./ship";

class Gameboard {
    constructor() {
        this.cells = {};
        this.board = new Map();
        this.registeredClicks = new Set();
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
                        return false;
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
                        return false;
                    }
                }
                for (let k = 0; k < length; k++) {
                    this.board.set(this.cells[`${posX},${posY + k}`], "ship");
                    currentShip.position.push(`${posX},${posY + k}`);
                }
            }
        }
        this.ships.push(currentShip);
        return true;
    }

    receiveAttack(posX, posY) {
        const coord = this.cells[`${posX},${posY}`];
        const status = this.board.get(coord);

        if (status === "empty") {
            this.board.set(coord, "miss");
        } else {
            for (const ship of this.ships) {
                if (ship.position.includes(`${posX},${posY}`)) {
                    ship.hit();
                    if (ship.isSunk()) {
                        this.board.set(coord, "sunk");
                        this.changeStateOfSunkenShip(ship);
                    } else {
                        this.board.set(coord, "hit");
                    }
                }
            }
        }
        this.registeredClicks.add(coord);
        //console.log(this.registeredClicks);
    }

    changeStateOfSunkenShip(ship) {
        for (let part of ship.position) {
            this.board.set(this.cells[part], "sunk");
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