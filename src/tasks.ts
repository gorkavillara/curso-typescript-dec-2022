const tasksForm: HTMLFormElement | null = document.querySelector("form#tasks-form")
const tasksList: HTMLUListElement | null = document.querySelector("ul#tasks-list")

tasksForm?.addEventListener("submit", (e) => {
    e.preventDefault()

    const newTask: HTMLInputElement | null = document.querySelector("input[name=newtask]")
    
    if (!newTask) return

    const newLi = document.createElement('li')
    newLi.innerText = newTask.value
    tasksList?.appendChild(newLi)

    newTask.value = ""
})

// Cada vez que haya una entrada -> Pintamos appendChild un nuevo li
// Que contenga la información del input