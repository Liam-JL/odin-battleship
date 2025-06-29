import { getGameState, getActivePlayer } from "../shared/gamecontroller";

export function reRenderInfoBar() {
    const infoBar = document.getElementById("infoBar");
    if (getActivePlayer() === "user") {
        infoBar.innerHTML = `
            <p>Make your move</p>
        `;
    } else {
        infoBar.innerHTML = `
            <p>Computer thinking...</p>
        `;
    }
}

