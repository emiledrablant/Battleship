
const boardLeft = document.getElementById("boardLeft");
const boardRight = document.getElementById("boardRight");

function displayBoard(player) {
    let target;
    player.name === "Human" ? target = boardLeft : target = boardRight;
    target.textContent = '';

    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            const content = player.accessContent(i,j);

            if (target === boardRight) {
                cell.addEventListener("click", () => {
                    player.board.receiveAttack(i, j, player);
                    //displayBoard(player);
                });
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

export { displayBoard };