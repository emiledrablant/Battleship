
//import Player from "./player";

class Game {
    constructor(human, computer) {
        this.isOver = false;
        this.players = [human, computer]
    }

    checkGameOver() {
        if (this.players[0].data.checkGameOver)
            alert("All your ships are down below the sea.");
        if (this.players[1].data.checkGameOver)
            alert("You win! All the enemy's ships are sunk!");
    }
}

export default Game;