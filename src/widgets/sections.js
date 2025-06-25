import { Player } from "../entities/player";
import { generateBoard } from "../features/generate-board";
import { controlButtons } from "./controls";
import { placeShipsRandomly, renderPlacedShips} from "../features/place-ships";


export function playerSection() {
    const section = document.createElement("section");
    section.classList.add("player-section");
    section.innerHTML = `
        <div id="userGameboard" class="ui-board ui-board--user"></div>
        <span>Your grid</span>
    `;
    
    const uiBoard = section.querySelector(".ui-board");
    generateBoard(uiBoard);

    section.appendChild(controlButtons());

    const sectionPlayer = new Player();
    const cells = placeShipsRandomly(sectionPlayer.board);
    renderPlacedShips(cells, uiBoard);

    return section;

}

export function computerSection() {
    const section = document.createElement("section");
    section.classList.add("player-section");
    section.innerHTML = `
        <div class="ui-board ui-board--computer"></div>
        <span>Computer grid</span>
    `;
    
    const uiBoard = section.querySelector(".ui-board");
    generateBoard(uiBoard);

    const sectionPlayer = new Player();
    placeShipsRandomly(sectionPlayer.board);

    return section;
}



