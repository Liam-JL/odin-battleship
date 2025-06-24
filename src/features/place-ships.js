export function placeShipsRandomly(gameboard) {
    let nextShip = gameboard.getAvailableShips()[0]
    let allPlacementCells = [];
    while(gameboard.getAvailableShips().length > 0) {
        try{
            let cells = gameboard.placeShip(nextShip, [getRandomInt(10), getRandomInt(10)], ["vertical", "horizontal"][getRandomInt(2)]);
            allPlacementCells.push(cells);
            nextShip = gameboard.getAvailableShips()[0];
        }catch{
            continue;
        }    
    }
    return allPlacementCells;
}

function getRandomInt(max) {
    const randomInt = Math.floor(Math.random() * max);
    return randomInt;
}

export function renderPlacedShips(shipCellData, uiBoard) {
    
}

function randomise() {

}