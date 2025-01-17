
import "./style.css"

import Game from "./modules/game"
import { boardLeft, boardRight, displayBoard } from "./modules/dom";

const game = new Game();

game.player1.deployFleet();
game.player2.deployFleet();
displayBoard(boardLeft);
displayBoard(boardRight);
//game.player1.currentTurn = true;

export { game };

// Todo:
// 1. Player and computer make a move, turn by turn
// 2. Check for game over and restart a new game
// 3. Allow custom ship placement for player by drag and drop
// 4. Better IA for the ship (aim near a hit rather than pure random)