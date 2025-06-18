import { Gameboard } from "./gameboard";

export class Player {
    constructor() {
        this._active = false;
        this.board = new Gameboard;
    }

    Attack(coord) {
        
    }
}


export class Computer extends Player {
    chooseNextAttack() {

    }
}
