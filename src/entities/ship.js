export class Ship {
    constructor(length) {
        this._length = length;
        this._timesHit = 0;
        this._cells = [];
    } 

    getLength() {
        return this._length;
    }

    hit() {
        if(this._timesHit < this._length) {
            this._timesHit ++;
        }

       return this._timesHit;
    }

    isSunk() {
        return this._timesHit >= this._length;
    }

    setCells(cells) {
        this._cells = cells;
    }

    getCells() {
        return this._cells;
    }
 }