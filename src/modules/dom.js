import { game } from "..";

const boardLeft = document.getElementById("boardLeft");
const boardRight = document.getElementById("boardRight");

function displayBoard(target) {
    let currentPlayer;
    target === boardLeft ? currentPlayer = game.player1 : currentPlayer = game.player2;
    target.textContent = '';

    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            const content = currentPlayer.accessContent(i,j);

            if (target === boardRight) {
                /*
                USING A WRAPPER DOESN'T WORK

                cell.addEventListener("click", attackWrapper);

                function attackWrapper() {
                    currentPlayer.board.receiveAttack(i, j);
                    cell.removeEventListener("click", attackWrapper);
                }*/

                cell.addEventListener("click", () => {
                    currentPlayer.board.receiveAttack(i, j);
                }, { once: true }); // USING { ONCE: TRUE } DOESN'T WORK EITHER
            }
            target.appendChild(cell);

            if (target === boardLeft && content === "ship") {
                cell.textContent = "S";
                cell.classList.add("ship");
            }

            if (content === "hit") {
                cell.textContent = "X";
                //cell.classList.remove("ship");
                cell.classList.add("hit");
            } else if (content === "sunk") {
                cell.textContent = "X";
                cell.classList.add("sunk");
            } else if (content === "miss") {
                cell.textContent = "~";
            }
        }
    }
}

export { displayBoard, boardLeft, boardRight };