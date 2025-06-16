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
 