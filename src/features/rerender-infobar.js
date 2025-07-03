import { getActivePlayer } from "../shared/gamecontroller";

export function reRenderInfoBar() {
    const infoBar = document.getElementById("infoBar");
    const activePlayer = getActivePlayer();
    if (activePlayer.name  === "User") {
        infoBar.innerHTML = `
            <p>Make your move</p>
        `;
    } else {
        infoBar.innerHTML = `
            <p>Computer thinking...</p>
        `;
    }
}

