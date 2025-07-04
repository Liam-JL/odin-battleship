import { toggleActivePlayer, getActivePlayer, toggleGameState, getGameState } from "../shared/gamecontroller";
import { computerAttack } from "./computer-attack";
import { reRenderInfoBar } from "./rerender-infobar";

export function nextTurn() {
    toggleGameState();
    toggleActivePlayer();
    reRenderInfoBar()
    const activePlayer = getActivePlayer();
    if(activePlayer.name === "computer") {
        computerAttack()
    } 
}