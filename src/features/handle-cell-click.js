import { getGameState} from "../shared/gamecontroller"
import { nextTurn } from "./next-turn";

export function handleCellClick(board, uiBoard) {
    if( getGameState() === "active") {
        try {
            const cell = event.target;
            const attackResult = processAttack(cell, board);
            renderCellOnClick(cell, attackResult);
            if(attackResult === "hit") {
                renderSunkShip(cell, board, uiBoard);
            }

            if (attackResult === "miss") {
                nextTurn()
            }

        } catch(error) {
            console.error(error)
            //TODO Log error in info bar
        }
    }
}

function processAttack(cell, board) {
    const cellCoords = [cell.dataset.row, cell.dataset.col];
    const attackResult = board.receiveAttack(cellCoords);
    return attackResult;
}

function renderCellOnClick(cell, attackResult) {
    cell.classList.add(`${attackResult}`);
}

function renderSunkShip(cell, board, uiBoard) {
    const ship = board.getBoard()[cell.dataset.row][cell.dataset.col];
    if(ship.isSunk()) {
        const shipCells = ship.getCells();
        shipCells.forEach(cell => {
            let uiCell = uiBoard.querySelectorAll(`[data-row="${cell[0]}"]`)[cell[1]];
            uiCell.classList.add("sunk");
        });
    }
}