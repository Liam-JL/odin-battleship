import { getActivePlayer, getWinner } from "../shared/gamecontroller";

export function reRenderInfoBar() {
    const infoBar = document.getElementById("infoBar");
    const winner = getWinner();
    if(winner) {
        const message = winner.name === "user" ? "You win!" : "You lose";
        infoBar.innerHTML = `
            <p>${message}</p>
        `
        return;
    }


    const activePlayer = getActivePlayer();
    if (activePlayer.name  === "user") {
        infoBar.innerHTML = `
            <p>Make your move</p>
        `;
    } else {
        infoBar.innerHTML = `
            <p>Computer thinking...</p>
        `;
    }
}

