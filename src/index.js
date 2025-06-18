import "./shared/styles/app.css"
import "./shared/styles/widgets.css"
import { renderAppWidgets } from "./pages/render_app_widgets";
window.onload = (e) => {
    renderAppWidgets();
}