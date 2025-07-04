import { getPlayers } from "../shared/gamecontroller";
import { attack } from "./attack";
import { nextTurn } from "./next-turn"

export async function computerAttack() {
    const wait = await simulateThinking(1);
    console.log("Computer attacks");
    const user = getPlayers()[0];
    let attackCount = 0;
    let coords = [0, 0];

    //TODO track in Player object what last attackResult was to make better AI (and coords of last attack)

    while(true) {
        try {
            coords =   generateRandomCoords();
            const attackResult = attack(user, coords);
            if (attackResult === "miss") {
                nextTurn(); 
                break;
            } else {
                const wait = await simulateThinking(0.5);
                attackCount ++;
                continue;
            }
        } catch(error) {
            console.log(error);
            continue;
        }
    }
}

export function generateRandomCoords() {
    let row = Math.random() * 10;
    let col = Math.random() * 10;
    return[Math.floor(row), Math.floor(col)];
}


function simulateThinking(n) {
    return new Promise(resolve => setTimeout(resolve, n * 1000));
}

