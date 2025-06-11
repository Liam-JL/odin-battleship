import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        //10x10 grid traditionally
        this._board = Array(10).fill(null).map(() => Array(10).fill(null));
    }

    getBoard() {
        console.table(this._board);
        return this._board
    }

    _isValidPlacement() {
        //return true or false
    }

    _getShipCells(length, startCoord, direction = "horizontal") {
        const cells = [];
        const [row, col] = startCoord;
        if(direction === "horizontal") {
            for(let i = 0; i < length; i++) {
                cells.push([row, col + i]);
            }
        } else if(direction === "vertical") {
            for(let i = 0; i < length; i++) {
                cells.push([row + i, col])
            }
        } else {
            throw new Error(`${direction} is not a valid direction`)
        }
        return cells
    }


    placeShip(length, startCoord = [0,0], direction = "horizontal") {
        //Traditionally a player gets 5 ships
        //5,4,3,3,2 length ships

    }

    receiveAttack(coord) {

    }

    allSunk() {

    }
}

//https://www.hasbro.com/common/instruct/battleship.pdf