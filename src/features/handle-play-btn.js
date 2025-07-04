import { getActivePlayer, toggleActivePlayer, toggleGameState, getPlayers } from "../shared/gamecontroller";
import { reRenderInfoBar } from "./rerender-infobar";

export function handlePlayBtn() {
    const players = getPlayers();
    // User can go first. Make random later
    players[0].toggleActive();
    toggleGameState();
    reRenderInfoBar();
    //Change play btn to reset
    const playBtn = document.getElementById("playBtn");
    playBtn.style.display = "none";
}

