
import "./style.css"
import Player from "./modules/player";
import { loadBoard, loadBoardOpponent } from "./modules/dom";

let player = new Player();
let opponent = new Player();

loadBoardOpponent(opponent);

//loadBoard(player);
player.data.placeShip(1,0,true,3);
loadBoard(player);
