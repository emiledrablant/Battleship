
import "./style.css"
import Player from "./modules/player";
import { loadBoard } from "./modules/dom";

let player = new Player();
//loadBoard(player);
player.data.placeShip(1,0,true,3);
loadBoard(player);
console.log(player.data.board);

//addCell("abbbb");

//createBoard();

/*
let a = new Gameboard;
a.buildBoard();
a.placeShip(0,5,true,2);
a.placeShip(0,0,true,3);
//console.log(a.board);
a.receiveAttack(1,5);
a.receiveAttack(1,6);
a.receiveAttack(0,5);
a.checkForGameOver();
a.receiveAttack(0,0);
a.receiveAttack(1,0);
a.checkForGameOver();
a.receiveAttack(2,0);
a.checkForGameOver();
/*
let destroyer = new Ship(5);
destroyer.hit();
console.log(destroyer.numberOfHits);
console.log(destroyer.isSunk());*/