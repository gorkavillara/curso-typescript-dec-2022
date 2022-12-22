// Create, Read, Update, Delete
const database: IDBFactory = window.indexedDB
let db: IDBDatabase

// Chequear si el navegador actual admite indexedDB
if (database) {
    const request: IDBOpenDBRequest = database.open("taskDB", 1)
    console.log(request)

    request.onsuccess = () => {
        db = request.result
        console.log("Success")
    }
    request.onupgradeneeded = () => {
        db = request.result
        const objectStore = db.createObjectStore("tasks", { autoIncrement: true })
        console.log("Upgrade Needed")
    }
    request.onerror = (error) => {
        console.error("Error de IndexedDB", error)
    }
}

// CREATE
const addNewTask = (task: any, database: IDBDatabase): void => {
    const transaction: IDBTransaction = database.transaction(['tasks'], "readwrite")
    const objectStore: IDBObjectStore = transaction.objectStore("tasks")
    const request: IDBRequest = objectStore.add(task)
    console.log(request)
}

// READ
const logExistingTasks = (database: IDBDatabase): void => {
    const transaction: IDBTransaction = database.transaction(["tasks"])
    const objectStore: IDBObjectStore = transaction.objectStore("tasks")
    const request: IDBRequest = objectStore.getAll()
    request.onsuccess = () => console.log(request.result)
}

// UPDATE
const modifyExistingTask = (database: IDBDatabase, id: number, newText: string): void => {
    const transaction: IDBTransaction = database.transaction(["tasks"], "readwrite")
    const objectStore: IDBObjectStore = transaction.objectStore("tasks")
    const request: IDBRequest = objectStore.put(newText, id)
    request.onsuccess = () => console.log("Todo bien todo correcto", request.result)
}

// DELETE
const deleteExistingTask = (database: IDBDatabase, id: number): void => {
    const transaction: IDBTransaction = database.transaction(["tasks"], "readwrite")
    const objectStore: IDBObjectStore = transaction.objectStore("tasks")
    const request: IDBRequest = objectStore.delete(id)
    request.onsuccess = () => console.log(`Objeto con id ${id} correctamente eliminado`, request.result)
}

document.querySelector("button#new-db-task")?.addEventListener("click", () => {
    const student = { name: "Joaquin", surname: "Vicente" }
    addNewTask(student, db)
})

document.querySelector("button#log-tasks")?.addEventListener("click", () => {
    logExistingTasks(db)
})

document.querySelector("button#task-update-button")?.addEventListener("click", () => {
    const textInput: HTMLInputElement | null = document.querySelector("input#task-update")
    const idInput: HTMLInputElement | null = document.querySelector("input#task-id-update")
    if (!textInput || !idInput) return

    const newText = textInput ? textInput.value : ""
    const id = idInput ? +idInput.value : 0
    if (newText === "" || id === 0) return

    modifyExistingTask(db, id, newText)
})

document.querySelector("button#task-delete-button")?.addEventListener("click", () => {
    const idInput: HTMLInputElement | null = document.querySelector("input#task-id-delete")
    if (!idInput) return

    const id = idInput ? +idInput.value : 0
    if (id === 0) return

    deleteExistingTask(db, id)
})