"use strict";
var _a, _b, _c, _d;
// Create, Read, Update, Delete
const database = window.indexedDB;
let db;
// Chequear si el navegador actual admite indexedDB
if (database) {
    const request = database.open("taskDB", 1);
    console.log(request);
    request.onsuccess = () => {
        db = request.result;
        console.log("Success");
    };
    request.onupgradeneeded = () => {
        db = request.result;
        const objectStore = db.createObjectStore("tasks", { autoIncrement: true });
        console.log("Upgrade Needed");
    };
    request.onerror = (error) => {
        console.error("Error de IndexedDB", error);
    };
}
// CREATE
const addNewTask = (task, database) => {
    const transaction = database.transaction(['tasks'], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.add(task);
    console.log(request);
};
// READ
const logExistingTasks = (database) => {
    const transaction = database.transaction(["tasks"]);
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.getAll();
    request.onsuccess = () => console.log(request.result);
};
// UPDATE
const modifyExistingTask = (database, id, newText) => {
    const transaction = database.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.put(newText, id);
    request.onsuccess = () => console.log("Todo bien todo correcto", request.result);
};
// DELETE
const deleteExistingTask = (database, id) => {
    const transaction = database.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.delete(id);
    request.onsuccess = () => console.log(`Objeto con id ${id} correctamente eliminado`, request.result);
};
(_a = document.querySelector("button#new-db-task")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const student = { name: "Joaquin", surname: "Vicente" };
    addNewTask(student, db);
});
(_b = document.querySelector("button#log-tasks")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    logExistingTasks(db);
});
(_c = document.querySelector("button#task-update-button")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const textInput = document.querySelector("input#task-update");
    const idInput = document.querySelector("input#task-id-update");
    if (!textInput || !idInput)
        return;
    const newText = textInput ? textInput.value : "";
    const id = idInput ? +idInput.value : 0;
    if (newText === "" || id === 0)
        return;
    modifyExistingTask(db, id, newText);
});
(_d = document.querySelector("button#task-delete-button")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    const idInput = document.querySelector("input#task-id-delete");
    if (!idInput)
        return;
    const id = idInput ? +idInput.value : 0;
    if (id === 0)
        return;
    deleteExistingTask(db, id);
});
//# sourceMappingURL=idb.js.map