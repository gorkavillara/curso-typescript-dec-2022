"use strict";
const tasksForm = document.querySelector("form#tasks-form");
const tasksList = document.querySelector("ul#tasks-list");
const clearListButton = document.querySelector("button#clear-list");
tasksForm === null || tasksForm === void 0 ? void 0 : tasksForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = document.querySelector("input[name=newtask]");
    if (!newTask)
        return;
    if (newTask.value === "")
        return;
    // Crea una nueva tarea
    const task = getNewTask(newTask.value);
    // Almacena esta nueva tarea en el local Storage
    storeNewTask(task);
    newTask.value = "";
    renderList();
});
const getNewTask = (taskText) => ({
    text: taskText,
    done: false,
});
const storeNewTask = (newTask) => {
    const localStorageTasks = localStorage.getItem("tasks");
    if (!localStorageTasks) {
        const newLocalStorageTasks = [newTask];
        return localStorage.setItem("tasks", JSON.stringify(newLocalStorageTasks));
    }
    const newLocalStorageTasks = [...JSON.parse(localStorageTasks), newTask];
    return localStorage.setItem("tasks", JSON.stringify(newLocalStorageTasks));
};
const renderList = () => {
    const localStorageTasks = localStorage.getItem("tasks");
    if (!localStorageTasks)
        return;
    const taskList = JSON.parse(localStorageTasks);
    if (tasksList)
        tasksList.innerHTML = "";
    taskList.forEach((task) => {
        const newLi = document.createElement('li');
        newLi.innerText = task.text;
        tasksList === null || tasksList === void 0 ? void 0 : tasksList.appendChild(newLi);
    });
};
const clearUl = () => {
    if (tasksList)
        tasksList.innerHTML = "";
};
const clearList = () => {
    // Eliminar el item "tasks" del localStorage
    localStorage.removeItem("tasks");
    // Renderizar de nuevo la lista
    clearUl();
};
clearListButton === null || clearListButton === void 0 ? void 0 : clearListButton.addEventListener("click", clearList);
renderList();
//# sourceMappingURL=tasks.js.map