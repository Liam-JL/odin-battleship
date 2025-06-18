import { playerSection, computerSection} from "../widgets/sections";

export function renderAppWidgets(){
    const app = document.getElementById("app");
    app.appendChild(playerSection());
    app.appendChild(computerSection());
}