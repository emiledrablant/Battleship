
import "./style.css"
import Player from "./modules/player";
import { displayBoard, humanBoard, opponentBoard } from "./modules/dom";

let human = new Player();
let opponent = new Player(false);

opponent.data.placeShip(0,0,true, 4);
displayBoard(opponent, opponentBoard);

//loadBoard(player);
human.data.placeShip(1,0,true,3);
displayBoard(human);
