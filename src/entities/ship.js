export class Ship {
    constructor(length) {
        this._length = length;
        this._timesHit = 0;
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
 }