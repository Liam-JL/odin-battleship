import { getActivePlayer, toggleActivePlayer, toggleGameState, getGameState } from "../shared/gamecontroller";
import { reRenderInfoBar } from "./reRenderInfoBar";

export function handlePlayBtn() {
    toggleActivePlayer();
    toggleGameState();
    reRenderInfoBar();
}