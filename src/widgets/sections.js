import { Player } from "../entities/player";
import { generateBoard } from "../features/generate-board";

export function playerSection() {
    const player = new Player();
    const section = document.createElement("section");
    section.classList.add("player-section");
    section.innerHTML = ```
        <div class="gameboard"></div>
        <span>Your grid</span>
    ```;
    
    const gameboard = section.querySelector(".gameboard");
    generateBoard(gameboard);
}