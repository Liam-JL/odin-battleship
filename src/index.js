import "./shared/styles/app.css"
import "./shared/styles/widgets.css"
import "./shared/images/battleship-ss.png"
import { renderAppWidgets } from "./pages/render_app_widgets";
window.onload = (e) => {
    renderAppWidgets();
}