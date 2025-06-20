//Randomise and reset buttons
export function controlButtons() {
    const controls = document.createElement("div");
    controls.classList.add("controls");

    const randomiseBtn = document.createElement("button");
    randomiseBtn.classList.add("controls__btn", "controls__btn--randomise");
    randomiseBtn.innerHTML = `
        Randomise
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z"/></svg>
    `;

    const playBtn = document.createElement("button");
    playBtn.classList.add("controls__btn", "controls__btn--play");
    playBtn.innerHTML = `
        Play
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M80-240v-480h80v480H80Zm560 0-57-56 144-144H240v-80h487L584-664l56-56 240 240-240 240Z"/></svg>
    `;

    controls.append(randomiseBtn, playBtn);
    return controls;  
}

//add icons and text into btns
