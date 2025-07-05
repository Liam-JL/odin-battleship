import { getPlayers, saveWinner } from "../shared/gamecontroller";
import { reRenderInfoBar } from "./rerender-infobar";

let winner = ''

export function checkWinCondition() {
    for(let player of getPlayers()) {
        if (player.board.allSunk()) {
            winner = player.name === "user" ? getPlayers()[1] : getPlayers()[0];
            saveWinner(winner);
            processWinner(winner);
        }
    }
}

function processWinner(winner) {
    reRenderInfoBar();
    const computerUiBoard = document.getElementById("computerUiBoard");
    computerUiBoard.classList.add("winner-declared");
    computerUiBoard.innerHTML = `
        <img src="" alt="game over image">
    `;
    const image = computerUiBoard.querySelector("img");
    image.src = winner.name === "user" ? "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo0czI5cTNmcGR1d3A5eGVzdnRoZnJ6cXg5ZHdmenUwM3k0eW80ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xThuWpoG470Q0stGmI/giphy.gif" : "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3NycHhxbjM3NGhvdGpjZGJybTNyempyNTB3MTlsMXE3b3lsaGppeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/klu2KSBQwdYA/giphy.gif";
}

