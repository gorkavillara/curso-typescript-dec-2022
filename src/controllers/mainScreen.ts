/* eslint-disable capitalized-comments,quotes */

import chalk from 'chalk'
import inquirer from 'inquirer'
import { createSpinner } from 'nanospinner'

import { choices } from '../assets/index.js'
import { Client, FirebaseClient } from '../models/index.js'

export const mainScreen = async (): Promise<void> => {
	let loop: boolean = true
	// Dar la bienvenida
	sayHello()
	// Preguntar el nombre
	const username: string = await getUserName()
	while (loop) {
		// Mostrar las opciones
		loop = await showOptions(username)
	}
}

const sayHello = (): void => {
	console.log(chalk.bgCyan('Bienvenid@ al CRM con Typescript'))
}

const getUserName = async (): Promise<string> => {
	const question = await inquirer.prompt({
		message: 'Cuál es tu nombre',
		name: 'user_name',
		type: 'input',
		default: 'Super Mario',
	})
	return question.user_name
}

interface IPromptOption {
	optionSelected: string
}
const showOptions = async (name: string): Promise<boolean> => {
	const { optionSelected }: IPromptOption = await inquirer.prompt({
		message: `Hola ${name}, qué te gustaría hacer`,
		name: 'optionSelected',
		type: 'list',
		choices,
	})

	const resId = choices.indexOf(optionSelected)
	// const optionsArray: any[] = [await listClients(), await createClient(), true, true, false]
	// return optionsArray[resId]
	if (resId === 0) return await listClients()
	if (resId === 1) return await createClient()
	if (resId === 2) return await deleteClient()
	if (resId === 3) return await updateClient()
	if (resId === 4) return false
	return false
}

const listClients = async (): Promise<true> => {
	// Inicia el spinner
	const spinnerNormal = createSpinner('Fetching clients...')
	spinnerNormal.start()

	const { clientes: clients } = await Client.getAllClients()
	clients
		.map(
			(client: Client, index: number) =>
				`\n${index + 1}. Name: ${client.nombre}, Email: ${client.email}`,
		)
		.forEach((clientStr: string) => console.log(clientStr))

	spinnerNormal.success({ text: 'Clients successfully retrieved' })
	// Finaliza el spinner
	return true
}

const createClient = async (): Promise<true> => {
	// Mostrar el prompt de crear nuevo cliente
	const responses = await inquirer.prompt([
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
	])
	const spinnerCreating = createSpinner('Creating clients...')
	spinnerCreating.start()
	const { clientName, clientEmail, clientAddress, clientNumber } = responses
	// Con la info del prompt hacer una llamada con axios
	const newClient = new Client(
		clientName,
		clientAddress,
		clientEmail,
		clientNumber,
	)
	const resMsg: string = await newClient.pushClient()
	spinnerCreating.success({ text: resMsg })
	return true
}

const deleteClient = async (): Promise<true> => {
	const { clientes: clients } = await Client.getAllClients()

	const choices: string[] = clients.map(
		(client: any, index: number) =>
			`${index + 1}. ${client.nombre} - ${client.email} | ${client.id}`,
	)

	const { selectedClient } = await inquirer.prompt({
		message: '¿Qué cliente quieres eliminar?',
		type: 'list',
		choices,
		name: 'selectedClient',
	})
	const id: string = selectedClient
		.split('|')[selectedClient.split('|').length - 1]
		.trim()

	const resMsg: string = await Client.deleteClient(id)
	console.log(resMsg)

	return true
}

const updateClient = async (): Promise<true> => {
	const { clientes: clients } = await Client.getAllClients()

	const choices: string[] = clients.map(
		(client: any, index: number) =>
			`${index + 1}. ${client.nombre} - ${client.email} | ${client.id}`,
	)

	const { selectedClient } = await inquirer.prompt({
		message: '¿Qué cliente quieres actualizar?',
		type: 'list',
		choices,
		name: 'selectedClient',
	})
	const clientIndex: number = choices.indexOf(selectedClient)
	const client: any = clients[clientIndex]

	const { newName, newEmail, newNum, newAddress } = await inquirer.prompt([{
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
	}])

	const formattedClient: FirebaseClient = { nombre: newName, email: newEmail, direccion: newAddress, numero_telefono: newNum, id: client.id }

	const resMsg: string = await Client.updateClient(client.id, formattedClient)
	console.log(resMsg)

	return true
}
