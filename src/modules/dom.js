
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
    opponentBoard.textContent = '';
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add("empty");

            const content = player.accessContent(i,j);
            if (content === "hit") {
                cell.textContent = "X";
                cell.classList.remove("empty");
                cell.classList.add("hit");
            } else if (content === "miss") {
                cell.textContent = "~";
            } else {
                cell.textContent = " ";
            }

            cell.addEventListener("click", () => {
                player.data.receiveAttack(i, j);
                loadBoardOpponent(player);
                //console.log(i,j);
            });
            opponentBoard.appendChild(cell);
        }
    }
}


export { loadBoard, loadBoardOpponent };