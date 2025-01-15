
import "./style.css"
import Player from "./modules/player";
import { displayBoard, humanBoard, opponentBoard } from "./modules/dom";

let human = new Player();
let opponent = new Player();

opponent.data.placeShip(0,0,false, 4);
opponent.data.placeShip(0,3,true, 2);
displayBoard(opponent, opponentBoard);

//loadBoard(player);
human.data.placeShip(1,0,true,3);
displayBoard(human);


// Todo:
// 1. Sunken ships are displayed accurately on the screen
// 2. Add random ships placement for the computer
// 3. Player and computer make a move, turn by turn
// 4. Check for game over and restart a new game
// 5. Allow custom ship placement for player by drag and drop
// 6. Better IA for the ship (aim near a hit rather than pure random)