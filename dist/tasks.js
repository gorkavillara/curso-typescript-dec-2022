"use strict";
const tasksForm = document.querySelector("form#tasks-form");
const tasksList = document.querySelector("ul#tasks-list");
tasksForm === null || tasksForm === void 0 ? void 0 : tasksForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = document.querySelector("input[name=newtask]");
    if (!newTask)
        return;
    const newLi = document.createElement('li');
    newLi.innerText = newTask.value;
    tasksList === null || tasksList === void 0 ? void 0 : tasksList.appendChild(newLi);
    newTask.value = "";
});
// Cada vez que haya una entrada -> Pintamos appendChild un nuevo li
// Que contenga la información del input
//# sourceMappingURL=tasks.js.map