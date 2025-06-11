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
 