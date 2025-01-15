
import "./style.css"
import Player from "./modules/player";
import { loadBoard, loadBoardOpponent } from "./modules/dom";

let player = new Player();
let opponent = new Player();

opponent.data.placeShip(0,0,true, 4);
loadBoardOpponent(opponent);

//loadBoard(player);
player.data.placeShip(1,0,true,3);
loadBoard(player);
