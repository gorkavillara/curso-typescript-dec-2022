import chalk from "chalk"
import inquirer from "inquirer"

export const mainScreen = async (): Promise<void> => {
    let loop: boolean = true
    // Dar la bienvenida
    sayHello()
    // Preguntar el nombre
    const username = await getUserName()
    while (loop) {
        // Mostrar las opciones
        loop = showOptions()
    }
}

const sayHello = (): void => {
    console.log(chalk.bgCyan("Bienvenid@ al CRM con Typescript"))
}

const getUserName = async (): Promise<string> => {
    const question = await inquirer.prompt({
        message: "Cuál es tu nombre",
        name: "user_name",
        type: "input",
        default: "Super Mario"
    })
    return question.user_name
}

const showOptions = (): boolean => {
    return false
}