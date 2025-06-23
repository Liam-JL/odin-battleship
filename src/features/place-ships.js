export function placeShipsRandomly(gameboard) {
    let nextShip = gameboard.getAvailableShips()[0]
    while(gameboard.getAvailableShips().length > 0) {
        try{
            gameboard.placeShip(nextShip, [getRandomInt(10), getRandomInt(10)], ["vertical", "horizontal"][getRandomInt(2)]);
            nextShip = gameboard.getAvailableShips()[0];
        }catch{
            continue;
        }    
    }
}

function getRandomInt(max) {
    const randomInt = Math.floor(Math.random() * max);
    return randomInt;
}

function addShipDataToCells(gameboard) {

}