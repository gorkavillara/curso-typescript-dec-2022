"use strict";
console.log("Eventos con typescript");
// const button: HTMLElement | null = document.getElementById("click-button")
// const button = document.getElementById("click-button")! as HTMLButtonElement
const button = document.querySelector("button#click-button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (event) => {
    console.log(event);
    alert("Has hecho click");
});
const form = document.querySelector("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
});
const nameInput = document.querySelector("input[name=nombre]");
nameInput.addEventListener("input", (event) => console.log(event));
// nameInput.oninput = (event) => console.log(event)
//# sourceMappingURL=index.js.map