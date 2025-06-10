export class Ship {
    constructor(length) {
        this._length = length;
        this._timesHit = 0;
    } 

    hit() {
       this._timesHit ++;
       return this._timesHit;
    }

    isSunk() {
    }
 }