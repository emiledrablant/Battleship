
import { randomNumbers } from "./global";
import Ship from "./ship";
import { boardLeft, boardRight, displayBoard } from "./dom";
import { game } from "..";

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
            if (posX + length > 10) {
                return false; // Abort if the placement is out of bounds
            } else {
                for (let k = 0; k < length; k++) {
                    if (this.board.get(this.cells[`${posX + k},${posY}`]) !== "empty") {
                        return false; // Abord if there is already a ship in the way
                    }
                }
                for (let k = 0; k < length; k++) {
                    this.board.set(this.cells[`${posX + k},${posY}`], "ship");
                    currentShip.position.push(`${posX + k},${posY}`);
                }
            }
        } else { // Do the same kind of checks but for the Y axis.
            if (posY + length > 10) {
                return false;
            } else {
                for (let k = 0; k < length; k++) {
                    if (this.board.get(this.cells[`${posX},${posY + k}`]) !== "empty") {
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

    placeShipsRandomly() {
        let ships = [2, 3, 3, 4, 5];
        for (const ship of ships) {
            let shipPlacement = false;
            let safeCount = 0;
            while (!shipPlacement) {
                let r = randomNumbers();
                shipPlacement = this.placeShip(r[0], r[1], r[2] % 2, ship);
                safeCount++;
                if (safeCount >= 20) {
                    break;
                }
            }
        }
    }

    // Check the state of the board and update it accordingly.
    receiveAttack(posX, posY) {
        console.log("enter");
        const coord = this.cells[`${posX},${posY}`];
        const status = this.board.get(coord);

        // Abort the function if the cell have already been clicked.
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
        displayBoard(boardRight);
        
        //game.player2.currentTurn = true;
        game.player2.sendAttackAI();
    }

    // Update the board map to mark the ships as sunk when it is the case.
    // Not meant to be called directly.
    changeStateOfSunkenShip(ship) {
        for (let part of ship.position) {
            this.board.set(this.cells[part], "sunk");
        }
    }

    // Return true if all the ships contained in the board are sunk.
    checkForGameOver() {
        for (const ship of this.ships) {
            if (!ship.isSunk()) return false;
        }
        return true;
    }
}

export default Gameboard;