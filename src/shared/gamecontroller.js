let gameState = "inactive";
let activePlayer = "computer";

export function toggleGameState() {
    gameState = "inactive" ? "active" : "inactive";
}

export function getGameState() {
    return gameState;
}

export function toggleActivePlayer() {
    activePlayer = "computer" ? "user" : "computer";
}

export function getActivePlayer() {
    return activePlayer;
}




