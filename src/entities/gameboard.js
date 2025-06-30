import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        //10x10 grid traditionally
        this._board = Array(10).fill(null).map(() => Array(10).fill(null));
        this._availableShips = [5,4,3,3,2];
        this._sunkShips = [];
        this._cellsAttacked = [];
    }

    getBoard() {
        console.table(this._board);
        return this._board
    }

    getAvailableShips() {
        // console.log(this._availableShips)
        return this._availableShips;
    }

    resetBoard() {
        this._board = Array(10).fill(null).map(() => Array(10).fill(null));
        this._availableShips = [5,4,3,3,2];
        this._sunkShips = [];
        this._cellsAttacked = [];
    }
    
    getSunkShips() {
        return this._sunkShips;
    }

    _isValidPlacement(cells) {
        //return true or false
        for(let cell of cells) {
            for(let i of cell) {
                if(i < 0 || i > 9) {
                    return false
                }
            }

            if(this._board[cell[0]][cell[1]] instanceof Ship) {
                return false
            }
        }
        return true;
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
        const ship = new Ship(length);

        //Check ship is still available to place
        if(!this._availableShips.includes(ship._length)){
            switch(ship._length) {
                case 3:
                    throw new Error("Ship length 3 already placed twice");
                    break;
                default:
                    throw new Error(`Ship length ${ship._length} already placed`);
            } 
        }

        //Check validity of ship placement
        const placementCells = this._getShipCells(length,startCoord, direction);
        if(this._isValidPlacement(placementCells)) {
            for(let cell of placementCells){
                this._board[cell[0]][cell[1]] = ship;
            }

        } else {
            throw new Error("Invalid ship placement");
        }

        //Remove ship from available ships
        const availableShipIndex = this._availableShips.indexOf(ship._length);
        this._availableShips.splice(availableShipIndex, 1);
        
        //Add cells to ship
        ship.setCells(placementCells);

        //return cells of placed ship
        return placementCells;
    }

    receiveAttack(coord) {
        //Check if cell has been attacked before and throw error if has
        if(this._cellsAttacked.some(cell => cell[0] === coord[0] && cell[1] === coord[1])){
            throw new Error("Cell has already been attacked")
        }

        this._cellsAttacked.push(coord);

        //Check if ship or null
        const [row, col] = coord;
        const target = this._board[row][col];
        if(target instanceof Ship) {
            target.hit();
            if (target.isSunk()) {
                this._sunkShips.push(target.getLength());
            }
            return "hit";
        }

        return "miss";
    }

    allSunk() {
        //Assumes all ships are placed - write into game rules
        const sunkShips = this._sunkShips.sort();
        if(sunkShips.toString() === "2,3,3,4,5"){
            return true
        }
        return false
    }
}

//https://www.hasbro.com/common/instruct/battleship.pdf