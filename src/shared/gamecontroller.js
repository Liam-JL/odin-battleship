let gameState = "inactive";
let players = [];

export function toggleGameState() {
    gameState = gameState === "inactive" ? "active" : "inactive"
}

export function getGameState() {
    return gameState;
}

export function savePlayer(player) {
    players.push(player);
}

export function getPlayers() {
    return players;
}

export function getActivePlayer() {
    for(let player of players) {
        if(player.isActive()) {
            return player
        }
    }
}

export function toggleActivePlayer() {
    players.forEach(player => player.toggleActive())
}

