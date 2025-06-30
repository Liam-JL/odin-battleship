import { toggleActivePlayer, toggleGameState } from "../shared/gamecontroller";
import { reRenderInfoBar } from "./rerender-infobar";

export function handlePlayBtn() {
    toggleActivePlayer();
    toggleGameState();
    reRenderInfoBar();
}

