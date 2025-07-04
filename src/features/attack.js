//User generates coords to attack through clicking cell on computer board. Computer generates random coords
export function attack(targetPlayer, coords) {
    const targetBoard = targetPlayer.board;
    const attackResult = targetBoard.receiveAttack(coords);
    renderAttackedCell(targetPlayer, coords, attackResult);
    if(attackResult === "hit") renderSunkShip(targetPlayer, targetBoard, coords);
    return attackResult;
}

function renderAttackedCell(targetPlayer, coords, attackResult) {
    const targetCell = getTargetUiCell(targetPlayer, coords)
    targetCell.classList.add(`${attackResult}`);
}

function renderSunkShip(targetPlayer, targetBoard, coords) {
    const targetCell = getTargetUiCell(targetPlayer, coords);
    const ship = targetBoard.getBoard()[targetCell.dataset.row][targetCell.dataset.col];
    if(!ship.isSunk()) return;
    // Render cells of ship if ship is sunk
    const shipCells = ship.getCells();
    shipCells.forEach(cell => {
        const uiCell = getTargetUiCell(targetPlayer, cell);
        uiCell.classList.add("sunk");
    })
}

function getTargetUiCell(targetPlayer, coords) {
    const targetUiBoard = document.getElementById(`${targetPlayer.name}UiBoard`);
    const targetCell = targetUiBoard.querySelectorAll(`[data-row="${coords[0]}"]`)[coords[1]];
    return targetCell;
}