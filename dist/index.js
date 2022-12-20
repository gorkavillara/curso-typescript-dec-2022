"use strict";
console.log("Eventos con typescript");
// const button: HTMLElement | null = document.getElementById("click-button")
// const button = document.getElementById("click-button")! as HTMLButtonElement
const button = document.querySelector("button#click-button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (event) => {
    console.log(event);
    alert("Has hecho click");
});
//# sourceMappingURL=index.js.map