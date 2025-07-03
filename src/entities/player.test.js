import {Player} from "./player";

describe("Player", () => {
    test("Returns instance of Player", () => {
        const player = new Player("User");
        expect(player).toBeInstanceOf(Player);
    }) 

    test("name property returns name", () => {
        const player = new Player("User");
        expect(player.name).toBe("User");
    }) 
})