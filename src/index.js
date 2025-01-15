
import "./style.css"
import Player from "./modules/player";
import { displayBoard, humanBoard, opponentBoard } from "./modules/dom";

let human = new Player();
let opponent = new Player();

//opponent.data.placeShip(0,0,false, 4);
//opponent.data.placeShip(0,3,true, 2);
displayBoard(opponent, opponentBoard);

//loadBoard(player);
human.data.placeShip(1,0,true,3);
displayBoard(human);

opponent.placeShipsRandomly();

// Todo:
// 1. Add random ships placement for the computer
// 2. Player and computer make a move, turn by turn
// 3. Check for game over and restart a new game
// 4. Allow custom ship placement for player by drag and drop
// 5. Better IA for the ship (aim near a hit rather than pure random)