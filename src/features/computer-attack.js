import { nextTurn } from "./next-turn"

export function computerAttack() {
    console.log("computer attacks")
    nextTurn();
}

export function generateRandomCoords() {
    let row = Math.random() * 10;
    let col = Math.random() * 10;
    return[Math.floor(row), Math.floor(col)]
}



