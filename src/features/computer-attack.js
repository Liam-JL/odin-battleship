import { getPlayers } from "../shared/gamecontroller";
import { nextTurn } from "./next-turn"


export function computerAttack() {
    console.log("computer attacks")
    const chosenCoords = generateRandomCoords();
    const user = getPlayers()[0];
    const userBoard = user.board;
    // nextTurn();
}

export function generateRandomCoords() {
    let row = Math.random() * 10;
    let col = Math.random() * 10;
    return[Math.floor(row), Math.floor(col)]
}