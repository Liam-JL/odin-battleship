import { toggleActivePlayer, getActivePlayer, toggleGameState, getGameState } from "../shared/gamecontroller";
import { computerAttack } from "./computer-attack";
import { reRenderInfoBar } from "./rerender-infobar";

export function nextTurn() {
    toggleGameState();
    toggleActivePlayer();
    const activePlayer = getActivePlayer();
    console.log(activePlayer)
    if(activePlayer.name === "Computer") {
        reRenderInfoBar()
        computerAttack()
    } 

    toggleGameState()
}