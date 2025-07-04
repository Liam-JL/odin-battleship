import { getActivePlayer, getPlayers, getGameState} from "../shared/gamecontroller"
import { attack } from "./attack";
import { nextTurn } from "./next-turn";

//refactor so that handlecellclick just checks if user is active
//seperate out other functionality to create an attack feature that works for both players


export function handleCellClick() {
    if(getGameState() === "active") {
        try {
            console.log("User Attacks")
            const cell = event.target;
            const coords = [cell.dataset.row, cell.dataset.col];
            const computer = getPlayers()[1];
            const attackResult = attack(computer, coords);
            if (attackResult === "miss") nextTurn()
        } catch(error) {
            console.error(error)
            //TODO Log error in info bar
        }
    }
}


