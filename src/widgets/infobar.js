export function infoBar() {
    const infoBar = document.createElement("div");
    infoBar.classList.add("infobar");
    infoBar.setAttribute("id", "infoBar");
    infoBar.innerHTML = `
        <p>Place your ships</p>
    `;
    return infoBar;
}