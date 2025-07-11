import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

describe("getBoard()", () => {
    test("getBoard returns board", () => {
        const board = new Gameboard();
        expect(board.getBoard()).toHaveLength(10)
    });
})

describe("_getShipCells()", () => {
    test("_getShipCells(2, [0,0]) returns coordinates [[0,0],[0,1]]", () => {
        const board = new Gameboard();
        expect(board._getShipCells(2,[0,0])).toEqual([[0, 0], [0, 1]]);
    })

    test("_getShipCells(2, [1,0]) returns coordiantes [[1,0],[1,1]]", () => {
        const board = new Gameboard();
        expect(board._getShipCells(2,[1,0])).toEqual([[1,0],[1,1]]);
    })

    test("_getShipCells(5, [5,5]) returns coordinates [[5,5],[5,6],[5,7],[5,8],[5,9]]", () => {
        const board = new Gameboard();
        expect(board._getShipCells(5,[5,5])).toEqual([[5,5],[5,6],[5,7],[5,8],[5,9]]);
    }) 

    test("Vertical placement works", () => {
        const board = new Gameboard();
        expect(board._getShipCells(3, [0,0], 'vertical')).toEqual([[0,0],[1,0],[2,0]]);
    })

    test("Erroneous driection supplied throws error", () => {
        const board = new Gameboard();
        expect(() => board._getShipCells(3, [0,0], "diagonal")).toThrow("diagonal is not a valid direction");
    })

})

describe("_isValidPlacement()", () => {
    test("valid cells return true", () => {
        const board = new Gameboard();
        expect(board._isValidPlacement([[0,0],[1,0],[2,0]])).toBe(true);
    })

    test("Invalid rows return false", () => {
        const board = new Gameboard();
        expect(board._isValidPlacement([[10,0],[11,0],[12,0]])).toBe(false);
    })

    test("column off the board returns false", () => {
        const board = new Gameboard();
        expect(board._isValidPlacement([[2,-2],[2,-1],[2,0],[2,1],[2,2]]))
    })

    test("_isValidPlacement() returns true for _getShipCells() when valid input is given", () => {
        const board = new Gameboard();
        const goodPlacement = board._getShipCells(5, [4,3], "horizontal");
        expect(board._isValidPlacement(goodPlacement)).toBe(true);
    })

    test("_isValidPlacement() returns false for _getShipCells() when invalid input is given", () => {
            const board = new Gameboard();
            const badPlacement = board._getShipCells(5, [6,6], "horizontal");
            expect(board._isValidPlacement(badPlacement)).toBe(false);
    })
})

describe("placeShip", () => {
    test('cell [0][0] contains a Ship object after placing a ship', () => {
        const board = new Gameboard();
        board.placeShip(2, [0, 0], 'horizontal');
        const cell = board.getBoard()[0][0];

        expect(cell).toBeInstanceOf(Ship);
    });

    test('all ship cells point to the same Ship instance', () => {
        const board = new Gameboard();
        const length = 3;
        const start = [2, 2];
        const direction = 'horizontal';

        board.placeShip(length, start, direction);
        const placedShip = board.getBoard()[2][2]; // reference to the first cell

        for (let i = 0; i < length; i++) {
            expect(board.getBoard()[2][2 + i]).toBe(placedShip);
        }

        expect(placedShip).toBeInstanceOf(Ship);
    });

    test('throws error when placing ship out of bounds (horizontal)', () => {
        const board = new Gameboard();
        expect(() => {
            board.placeShip(5, [0, 7], 'horizontal');
        }).toThrow('Invalid ship placement');
    });

    test('throws error when placing ship on top of another', () => {
        const board = new Gameboard();
        board.placeShip(3, [2, 2], 'horizontal'); // valid placement

        expect(() => {
            board.placeShip(4, [2, 1], 'horizontal'); // overlaps [2,2]
        }).toThrow('Invalid ship placement');
    });

    test('does not allow placing more than one ship of length 5, 4, or 2 — allows two 3s', () => {
        const board = new Gameboard();

        // Valid placements
        expect(() => board.placeShip(5, [0, 0], 'horizontal')).not.toThrow();
        expect(() => board.placeShip(4, [1, 0], 'horizontal')).not.toThrow();
        expect(() => board.placeShip(3, [2, 0], 'horizontal')).not.toThrow();
        expect(() => board.placeShip(3, [3, 0], 'horizontal')).not.toThrow();
        expect(() => board.placeShip(2, [4, 0], 'horizontal')).not.toThrow();

        // Invalid duplicates
        expect(() => board.placeShip(5, [5, 0], 'horizontal')).toThrow('Ship length 5 already placed');
        expect(() => board.placeShip(4, [6, 0], 'horizontal')).toThrow('Ship length 4 already placed');
        expect(() => board.placeShip(2, [7, 0], 'horizontal')).toThrow('Ship length 2 already placed');

        // Third 3-length ship is invalid
        expect(() => board.placeShip(3, [8, 0], 'horizontal')).toThrow('Ship length 3 already placed twice');
    });
})

describe("receiveAttack", () => {
    test("Board records cell that has been attacked", () => {
        const board = new Gameboard();
        board.receiveAttack([0, 0]);
        expect(board._cellsAttacked).toEqual(expect.arrayContaining([[0, 0]]));
    });

    test("Board records multiple attacked cells", () => {
        const board = new Gameboard();
        board.receiveAttack([0, 0]);
        board.receiveAttack([0, 1]);
        expect(board._cellsAttacked).toEqual(expect.arrayContaining([[0, 0], [0, 1]]));
    });

    test("Throw error if attacking same cell twice", () => {
        const board = new Gameboard();
        board.receiveAttack([1, 1]);
        expect(() => board.receiveAttack([1, 1])).toThrow("Cell has already been attacked");
    });

      test('returns "hit" if a ship is at the attacked coordinate', () => {
        const board = new Gameboard();
        board.placeShip(2, [0, 0], 'horizontal'); // places ship at [0,0] and [0,1]

        const result = board.receiveAttack([0, 0]);
        expect(result).toBe('hit');
    });

    test('returns "miss" if no ship is at the attacked coordinate', () => {
        const board = new Gameboard();
        board.placeShip(2, [0, 0], 'horizontal'); // but we attack a different cell

        const result = board.receiveAttack([5, 5]);
        expect(result).toBe('miss');
    });
})

describe('allSunk()', () => {
  test('returns false if not all ships are sunk', () => {
    const board = new Gameboard();
    board.placeShip(2, [0, 0], 'horizontal'); // Ship at [0,0] and [0,1]
    board.placeShip(3, [2, 0], 'horizontal'); // Ship at [2,0], [2,1], [2,2]

    // Only sink one ship
    board.receiveAttack([0, 0]);
    board.receiveAttack([0, 1]);

    expect(board.allSunk()).toBe(false);
  });

  test('returns true if all ships are sunk', () => {
    const board = new Gameboard();
    // Place all 5 ships (lengths: 5, 4, 3, 3, 2)
    board.placeShip(5, [0, 0], 'horizontal'); // [0,0] to [0,4]
    board.placeShip(4, [1, 0], 'horizontal'); // [1,0] to [1,3]
    board.placeShip(3, [2, 0], 'horizontal'); // [2,0] to [2,2]
    board.placeShip(3, [3, 0], 'horizontal'); // [3,0] to [3,2]
    board.placeShip(2, [4, 0], 'horizontal'); // [4,0] to [4,1]

    // Hit all cells of all ships
    for (let i = 0; i < 5; i++) board.receiveAttack([0, i]); // Ship 5
    for (let i = 0; i < 4; i++) board.receiveAttack([1, i]); // Ship 4
    for (let i = 0; i < 3; i++) board.receiveAttack([2, i]); // Ship 3a
    for (let i = 0; i < 3; i++) board.receiveAttack([3, i]); // Ship 3b
    for (let i = 0; i < 2; i++) board.receiveAttack([4, i]); // Ship 2

    expect(board.allSunk()).toBe(true);
  });
});