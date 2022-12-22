interface Task {
  text: string;
  done: boolean;
}

const tasksForm: HTMLFormElement | null =
  document.querySelector("form#tasks-form");
const tasksList: HTMLUListElement | null =
  document.querySelector("ul#tasks-list");
const clearListButton: HTMLButtonElement | null = document.querySelector("button#clear-list")

tasksForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask: HTMLInputElement | null = document.querySelector(
    "input[name=newtask]"
  );

  if (!newTask) return;
  if (newTask.value === "") return;
  // Crea una nueva tarea
  const task: Task = getNewTask(newTask.value)
  // Almacena esta nueva tarea en el local Storage
  storeNewTask(task)
  newTask.value = "";
renderList()
});

const getNewTask = (taskText: string): Task => ({
  text: taskText,
  done: false,
});

const storeNewTask = (newTask: Task): void => {
    const localStorageTasks: string | null = localStorage.getItem("tasks")
    if (!localStorageTasks) {
        const newLocalStorageTasks = [newTask]
        return localStorage.setItem("tasks", JSON.stringify(newLocalStorageTasks))
    }
    const newLocalStorageTasks = [...JSON.parse(localStorageTasks), newTask]
    return localStorage.setItem("tasks", JSON.stringify(newLocalStorageTasks))
}

const renderList = (): void => {
    const localStorageTasks: string | null = localStorage.getItem("tasks")
    if (!localStorageTasks) return

    const taskList: Task[] = JSON.parse(localStorageTasks)
    if (tasksList) tasksList.innerHTML = ""
    taskList.forEach((task: Task) => {
        const newLi: HTMLLIElement = document.createElement('li')
        newLi.innerText = task.text
        tasksList?.appendChild(newLi)
    })
}
const clearUl = (): void => {
    if (tasksList) tasksList.innerHTML = ""
}

const clearList = (): void => {
    // Eliminar el item "tasks" del localStorage
    localStorage.removeItem("tasks")
    // Renderizar de nuevo la lista
    clearUl()
}
clearListButton?.addEventListener("click", clearList)

renderList()