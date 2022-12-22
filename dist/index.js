"use strict";
// 1 - Si el usuario no está logueado -> mostramos (por defecto)
// 2 - Si el usuario se loguea -> lo eliminamos y lanzamos un saludo
const form = document.querySelector("form#login-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("form#login-form > input[name=nombre]");
    // const username: string | null = document.querySelector("form#login-form > input[name=nombre]")?.value
    const username = input ? input.value : null;
    if (!username)
        return;
    storeName(username);
    sayHello(username);
});
const sayHello = (name) => {
    if (!form)
        return;
    // Oculta el formulario
    form.style.display = "none";
    // Muestre el saludo
    const formDiv = document.querySelector("div.formulario");
    if (!formDiv)
        return;
    const helloSpan = document.createElement('span');
    helloSpan.innerText = `Hola ${name}`;
    helloSpan.classList.add("hello");
    formDiv.appendChild(helloSpan);
};
const storeName = (username) => {
    document.cookie = `username=${username}`;
};
const checkUserLoggedIn = () => {
    // Chequear si el usuario está logueado
    const username = getUsernameFromCookies();
    if (!username)
        return;
    // Si está logueado -> Escondemos el formulario + Lanzamos un saludo
    sayHello(username);
};
const getUsernameFromCookies = () => {
    const cookies = document.cookie;
    const cookiesArray = cookies.split(";");
    const userNameCookie = cookiesArray.find((cookie) => {
        const cookieName = cookie.split("=")[0];
        if (cookieName.trim() === "username")
            return true;
    });
    if (userNameCookie)
        return userNameCookie.split("=")[1];
    return null;
};
checkUserLoggedIn();
//# sourceMappingURL=index.js.map