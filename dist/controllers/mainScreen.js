var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from 'chalk';
import inquirer from 'inquirer';
import { choices } from '../assets/index.js';
import { Client } from '../models/index.js';
export const mainScreen = () => __awaiter(void 0, void 0, void 0, function* () {
    let loop = true;
    // Dar la bienvenida
    sayHello();
    // Preguntar el nombre
    const username = yield getUserName(); // eslint-disable-line
    while (loop) {
        // Mostrar las opciones
        loop = yield showOptions();
    }
});
const sayHello = () => {
    console.log(chalk.bgCyan('Bienvenid@ al CRM con Typescript'));
};
const getUserName = () => __awaiter(void 0, void 0, void 0, function* () {
    const question = yield inquirer.prompt({
        message: 'Cuál es tu nombre',
        name: 'user_name',
        type: 'input',
        default: 'Super Mario',
    });
    return question.user_name;
});
const showOptions = () => __awaiter(void 0, void 0, void 0, function* () {
    const { optionSelected } = yield inquirer.prompt({
        message: 'Qué te gustaría hacer',
        name: 'optionSelected',
        type: 'list',
        choices,
    });
    const resId = choices.indexOf(optionSelected);
    if (resId === 0)
        return yield listClients();
    if (resId === 4)
        return false;
    return true;
});
const listClients = () => __awaiter(void 0, void 0, void 0, function* () {
    const { clientes: clients } = yield Client.getAllClients();
    clients
        .map((client) => `Name: ${client.nombre}, Email: ${client.email}`)
        .forEach((clientStr) => console.log(clientStr));
    return true;
});
