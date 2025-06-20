export function infoBar() {
    const infoBar = document.createElement("div");
    infoBar.classList.add("infobar");
    infoBar.innerHTML = `
        <p>Place your ships</p>
    `;
    return infoBar;
}