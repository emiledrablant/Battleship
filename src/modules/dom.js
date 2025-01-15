
const humanBoard = document.getElementById("humanBoard");
const opponentBoard = document.getElementById("opponentBoard");

function displayBoard(player, target = humanBoard) {
    target.textContent = '';

    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add("empty");

            const content = player.accessContent(i,j);

            if (target === opponentBoard) {
                cell.addEventListener("click", () => {
                    player.data.receiveAttack(i, j);
                    displayBoard(player, opponentBoard);
                });
            }
            target.appendChild(cell);

            if (content === "hit") {
                cell.textContent = "X";
                cell.classList.remove("empty");
                cell.classList.add("hit");
            } else if (content === "miss") {
                cell.textContent = "~";
            } else {
                cell.textContent = " ";
            }
        }
    }
}

export { displayBoard, humanBoard, opponentBoard };