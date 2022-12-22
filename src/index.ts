// 1 - Si el usuario no está logueado -> mostramos (por defecto)
// 2 - Si el usuario se loguea -> lo eliminamos y lanzamos un saludo

const form: HTMLFormElement | null = document.querySelector("form#login-form")

form?.addEventListener("submit", (e) => {
    e.preventDefault()
    const input: HTMLInputElement | null = document.querySelector("form#login-form > input[name=nombre]")
    // const username: string | null = document.querySelector("form#login-form > input[name=nombre]")?.value
    const username: string | null = input ? input.value : null
    if (!username) return

    storeName(username)
    sayHello(username)
})

const sayHello = (name: string): void => {
    if (!form) return

    // Oculta el formulario
    form.style.display = "none"

    // Muestre el saludo
    const formDiv: HTMLDivElement | null = document.querySelector("div.formulario")
    if (!formDiv) return
    
    const helloSpan: HTMLSpanElement = document.createElement('span')
    helloSpan.innerText = `Hola ${name}`
    helloSpan.classList.add("hello")
    formDiv.appendChild(helloSpan)
}

const storeName = (username: string): void => {
    document.cookie = `username=${username}`
}

type CookiesType = string
const checkUserLoggedIn = (): void => {
    // Chequear si el usuario está logueado
    const username = getUsernameFromCookies()
    if (!username) return
    // Si está logueado -> Escondemos el formulario + Lanzamos un saludo
    sayHello(username)
}
const getUsernameFromCookies = (): string | null => {
    const cookies: CookiesType = document.cookie
    const cookiesArray: string[] = cookies.split(";")
    const userNameCookie: string | undefined = cookiesArray.find((cookie: string) => {
        const cookieName = cookie.split("=")[0]
        if (cookieName.trim() === "username") return true
    })
    if (userNameCookie) return userNameCookie.split("=")[1]
    return null
}

checkUserLoggedIn()