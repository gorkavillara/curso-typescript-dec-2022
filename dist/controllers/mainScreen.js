/* eslint-disable capitalized-comments,quotes */
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
import { createSpinner } from 'nanospinner';
import { choices } from '../assets/index.js';
import { Client } from '../models/index.js';
export const mainScreen = () => __awaiter(void 0, void 0, void 0, function* () {
    let loop = true;
    // Dar la bienvenida
    sayHello();
    // Preguntar el nombre
    const username = yield getUserName();
    while (loop) {
        // Mostrar las opciones
        loop = yield showOptions(username);
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
const showOptions = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const { optionSelected } = yield inquirer.prompt({
        message: `Hola ${name}, qué te gustaría hacer`,
        name: 'optionSelected',
        type: 'list',
        choices,
    });
    const resId = choices.indexOf(optionSelected);
    // const optionsArray: any[] = [await listClients(), await createClient(), true, true, false]
    // return optionsArray[resId]
    if (resId === 0)
        return yield listClients();
    if (resId === 1)
        return yield createClient();
    if (resId === 2)
        return yield deleteClient();
    if (resId === 3)
        return yield updateClient();
    if (resId === 4)
        return false;
    return false;
});
const listClients = () => __awaiter(void 0, void 0, void 0, function* () {
    // Inicia el spinner
    const spinnerNormal = createSpinner('Fetching clients...');
    spinnerNormal.start();
    const { clientes: clients } = yield Client.getAllClients();
    clients
        .map((client, index) => `\n${index + 1}. Name: ${client.nombre}, Email: ${client.email}`)
        .forEach((clientStr) => console.log(clientStr));
    spinnerNormal.success({ text: 'Clients successfully retrieved' });
    // Finaliza el spinner
    return true;
});
const createClient = () => __awaiter(void 0, void 0, void 0, function* () {
    // Mostrar el prompt de crear nuevo cliente
    const responses = yield inquirer.prompt([
        {
            message: "Client's name",
            name: 'clientName',
            default: 'Mario Casas',
        },
        {
            message: "Client's email",
            name: 'clientEmail',
            default: 'mario@casas.net',
        },
        {
            message: "Client's address",
            name: 'clientAddress',
            default: 'Casa 12',
        },
        {
            message: "Client's number",
            name: 'clientNumber',
            default: '666 10 10 10',
        },
    ]);
    const spinnerCreating = createSpinner('Creating clients...');
    spinnerCreating.start();
    const { clientName, clientEmail, clientAddress, clientNumber } = responses;
    // Con la info del prompt hacer una llamada con axios
    const newClient = new Client(clientName, clientAddress, clientEmail, clientNumber);
    const resMsg = yield newClient.pushClient();
    spinnerCreating.success({ text: resMsg });
    return true;
});
const deleteClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const { clientes: clients } = yield Client.getAllClients();
    const choices = clients.map((client, index) => `${index + 1}. ${client.nombre} - ${client.email} | ${client.id}`);
    const { selectedClient } = yield inquirer.prompt({
        message: '¿Qué cliente quieres eliminar?',
        type: 'list',
        choices,
        name: 'selectedClient',
    });
    const id = selectedClient
        .split('|')[selectedClient.split('|').length - 1]
        .trim();
    const resMsg = yield Client.deleteClient(id);
    console.log(resMsg);
    return true;
});
const updateClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const { clientes: clients } = yield Client.getAllClients();
    const choices = clients.map((client, index) => `${index + 1}. ${client.nombre} - ${client.email} | ${client.id}`);
    const { selectedClient } = yield inquirer.prompt({
        message: '¿Qué cliente quieres actualizar?',
        type: 'list',
        choices,
        name: 'selectedClient',
    });
    const clientIndex = choices.indexOf(selectedClient);
    const client = clients[clientIndex];
    const { newName, newEmail, newNum, newAddress } = yield inquirer.prompt([{
            message: 'Cuál es el nuevo nombre',
            type: 'input',
            name: 'newName',
            default: client.nombre,
        }, {
            message: 'Cuál es el nuevo email',
            type: 'input',
            name: 'newEmail',
            default: client.email,
        }, {
            message: 'Cuál es el nuevo número',
            type: 'input',
            name: 'newNum',
            default: client.numero,
        }, {
            message: 'Cuál es su nueva dirección',
            type: 'input',
            name: 'newAddress',
            default: client.direccion,
        }]);
    const formattedClient = { nombre: newName, email: newEmail, direccion: newAddress, numero_telefono: newNum, id: client.id };
    const resMsg = yield Client.updateClient(client.id, formattedClient);
    console.log(resMsg);
    return true;
});
