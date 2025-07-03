import { Gameboard } from "./gameboard";

export class Player {
    #active = false
    constructor(name) {
        this.name = name;
        this.board = new Gameboard;
    }

    isActive() {
        return this.#active;
    }

    toggleActive() {
        this.#active = this.#active === false ? true : false;
    }
}