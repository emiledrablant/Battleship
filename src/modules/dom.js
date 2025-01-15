
import Player from "./player";

const playerBoard = document.getElementById("playerBoard");
const opponentBoard = document.getElementById("opponentBoard");

function loadBoard(player) {
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            const content = player.accessContent(i,j);
            cell.textContent = content.charAt(0).toUpperCase();
/*
            cell.addEventListener("click", () => {
                const result = player.data.board.get(player.data.cells[`${i},${j}`]);
                console.log(result);
            });*/
            playerBoard.appendChild(cell);
        }
    }
}

function loadBoardOpponent(player) {
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            const content = player.accessContent(i,j);
            cell.textContent = content.charAt(0).toUpperCase();

            cell.addEventListener("click", () => {
                const result = player.data.board.get(player.data.cells[`${i},${j}`]);
                console.log(result);
            });
            opponentBoard.appendChild(cell);
        }
    }
}


export { loadBoard, loadBoardOpponent };