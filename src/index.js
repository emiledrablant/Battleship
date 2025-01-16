
import "./style.css"

import Game from "./modules/game";
import Player from "./modules/player";
import { displayBoard, humanBoard, opponentBoard } from "./modules/dom";

let human = new Player("human", true);
let opponent = new Player("computer", false);

let game = new Game(human, opponent);

let isGameOver = false;

human.deployFleet();
opponent.deployFleet();

displayBoard(opponent, opponentBoard);
displayBoard(human);

console.log(human.name, human.board.turnToPlay);
console.log(opponent.name, opponent.board.turnToPlay);



/*
while (!isGameOver) {
    if (!human.turnToPlay) {
        console.log("test");
        human.turnToPlay = true;
    }
    
}*/



// Todo:
// 1. Player and computer make a move, turn by turn
// 2. Check for game over and restart a new game
// 3. Allow custom ship placement for player by drag and drop
// 4. Better IA for the ship (aim near a hit rather than pure random)