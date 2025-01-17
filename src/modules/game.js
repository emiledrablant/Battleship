
import Player from "./player";
import { displayBoard } from "./dom";

class Game {
    constructor() {
        this.player1 = new Player("Human");
        this.player2 = new Player("Computer");

        this.player1.enemy = this.player2.board;
        this.player2.enemy = this.player1.board;
    }

    /*
    checkGameOver() {
        if (this.players[0].data.checkGameOver)
            alert("All your ships are down below the sea.");
        if (this.players[1].data.checkGameOver)
            alert("You win! All the enemy's ships are sunk!");
    }*/
}

export default Game;