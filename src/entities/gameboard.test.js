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