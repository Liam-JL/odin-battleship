import { savePlayer, getPlayers, getActivePlayer, toggleActivePlayer } from "./gamecontroller";
import { Player } from "../entities/player";

describe("savePlayer", () => {
    test("player is pushed to players", () => {
        const player = new Player("User");
        savePlayer(player);
        expect(getPlayers()[0]).toBeInstanceOf(Player)
    })
})

describe("get active player", () => {
    test("active player is returned", () => {
        const user = new Player("user");
        const computer = new Player("computer");
        savePlayer(user);
        savePlayer(computer);
        user.toggleActive();
        expect(getActivePlayer().name).toBe("user")
    } )
})