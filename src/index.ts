console.log("Eventos con typescript")

// const button: HTMLElement | null = document.getElementById("click-button")
// const button = document.getElementById("click-button")! as HTMLButtonElement
const button: HTMLButtonElement | null = document.querySelector("button#click-button")

button?.addEventListener("click", (event: MouseEvent) => {
    console.log(event)
    alert("Has hecho click")
})

const form: HTMLFormElement | null = document.querySelector("form")

form?.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault()
    console.log(event)
})

const nameInput: HTMLInputElement = document.querySelector("input[name=nombre]")!

nameInput.addEventListener("input", (event) => console.log(event))
// nameInput.oninput = (event) => console.log(event)