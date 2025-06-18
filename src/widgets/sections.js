import { Player } from "../entities/player";
import { generateBoard } from "../features/generate-board";

export function playerSection() {
    const player = new Player();
    const section = document.createElement("section");
    section.classList.add("player-section");
    section.innerHTML = `
        <div class="gameboard"></div>
        <span>Your grid</span>
    `;
    
    const gameboard = section.querySelector(".gameboard");
    generateBoard(gameboard);

    //Create highlight around section when player of that section is active
    //Pull in controls and make them work only when it is correct players turn.
    return section;
}

export function computerSection() {
    const section = document.createElement("section");
    section.classList.add("player-section");
    section.innerHTML = `
        <div class="gameboard"></div>
        <span>Computer grid</span>
    `;
    
    const gameboard = section.querySelector(".gameboard");
    generateBoard(gameboard);
    return section;
}

