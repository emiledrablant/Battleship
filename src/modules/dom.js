
import Player from "./player";

const playerBoard = document.getElementById("playerBoard");

function loadBoard(player) {
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            const content = player.board.board.get(player.board.cells[`${i},${j}`]);
            cell.textContent = content.charAt(0).toUpperCase();

            cell.addEventListener("click", () => {
                const result = player.board.board.get(player.board.cells[`${i},${j}`]);
                console.log(result);
            });
            playerBoard.appendChild(cell);
        }
    }
}


export { loadBoard };