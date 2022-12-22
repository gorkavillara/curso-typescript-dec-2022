import chalk from "chalk";
import inquirer from "inquirer";
import { choices } from "../assets/index.js";
import { Client } from "../models/index.js";

export const mainScreen = async (): Promise<void> => {
  let loop: boolean = true;
  // Dar la bienvenida
  sayHello();
  // Preguntar el nombre
  const username = await getUserName();
  while (loop) {
    // Mostrar las opciones
    loop = await showOptions();
  }
};

const sayHello = (): void => {
  console.log(chalk.bgCyan("Bienvenid@ al CRM con Typescript"));
};

const getUserName = async (): Promise<string> => {
  const question = await inquirer.prompt({
    message: "Cuál es tu nombre",
    name: "user_name",
    type: "input",
    default: "Super Mario",
  });
  return question.user_name;
};

interface IPromptOption {
  option_selected: string
}
const showOptions = async (): Promise<boolean> => {
  const { option_selected }: IPromptOption = await inquirer.prompt({
    message: "Qué te gustaría hacer",
    name: "option_selected",
    type: "list",
    choices,
  });

  const resId = choices.indexOf(option_selected)
  if (resId === 0) return await listClients()
  if (resId === 4) return false

  return true
};

const listClients = async(): Promise<true> => {
  const { clientes: clients } = await Client.getAllClients()
  clients
    .map((client: Client) => `Name: ${client.nombre}, Email: ${client.email}`)
    .forEach((clientStr: string) => console.log(clientStr))
  return true
}