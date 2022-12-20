console.log("Eventos con typescript")

// const button: HTMLElement | null = document.getElementById("click-button")
// const button = document.getElementById("click-button")! as HTMLButtonElement
const button: HTMLButtonElement | null = document.querySelector("button#click-button")

button?.addEventListener("click", (event: MouseEvent) => {
    console.log(event)
    alert("Has hecho click")
})