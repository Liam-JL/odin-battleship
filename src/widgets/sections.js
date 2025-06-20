import { Player } from "../entities/player";
import { generateBoard } from "../features/generate-board";
import { controlButtons } from "./controls";


export function playerSection() {
    const section = document.createElement("section");
    section.classList.add("player-section");
    section.innerHTML = `
        <div class="gameboard"></div>
        <span>Your grid</span>
    `;
    
    const gameboard = section.querySelector(".gameboard");
    generateBoard(gameboard);

    section.appendChild(controlButtons());
    return section;
}

export function computerSection() {
    const section = document.createElement("section");
    section.classList.add("player-section");
    section.innerHTML = `
        <div class="gameboard gameboard--computer"></div>
        <span>Computer grid</span>
    `;
    
    const gameboard = section.querySelector(".gameboard");
    generateBoard(gameboard);
    return section;
}



