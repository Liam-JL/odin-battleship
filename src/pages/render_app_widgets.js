import { playerSection, computerSection} from "../widgets/sections";
import { infoBar } from "../widgets/infobar";

function renderHeaderWidgets(){
    const header = document.getElementById("header");
    header.appendChild(infoBar())
}

function renderSectionWidgets(){
    const app = document.getElementById("app");
    app.appendChild(playerSection());
    app.appendChild(computerSection());
}

export function renderAppWidgets() {
    renderHeaderWidgets();
    renderSectionWidgets();
}




