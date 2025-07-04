import { Player} from "../entities/player";
import { generateBoard } from "../features/generate-board";
import { controlButtons } from "./controls";
import { placeShipsRandomly, renderPlacedShips } from "../features/place-ships";
import { handleCellClick } from "../features/handle-cell-click";
import { savePlayer } from "../shared/gamecontroller";




export function playerSection() {
    const section = document.createElement("section");
    section.classList.add("player-section");
    section.innerHTML = `
        <div id="userUiBoard" class="ui-board ui-board--user"></div>
        <span>Your grid</span>
    `;
    
    const uiBoard = section.querySelector(".ui-board");
    generateBoard(uiBoard);

    const sectionPlayer = new Player("user");
    savePlayer(sectionPlayer);
    const cells = placeShipsRandomly(sectionPlayer.board);
    renderPlacedShips(cells, uiBoard);
    
    section.appendChild(controlButtons(sectionPlayer.board, uiBoard));

    return section;
}

export function computerSection() {
    const section = document.createElement("section");
    section.classList.add("player-section");
    section.innerHTML = `
        <div id="computerUiBoard" class="ui-board ui-board--computer"></div>
        <span>Computer grid</span>
    `;
    
    const uiBoard = section.querySelector(".ui-board");
    generateBoard(uiBoard);

    const sectionPlayer = new Player("computer");
    savePlayer(sectionPlayer);
    placeShipsRandomly(sectionPlayer.board);

    //Event listeners
    for (let cell of uiBoard.children) {
        cell.addEventListener("click", () => {
            handleCellClick();
        })
    }

    return section;
}



