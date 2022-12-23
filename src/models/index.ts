/* eslint-disable */
import axios from 'axios'

const endpointUrl: string =
	'https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/clientes'

export interface FirebaseClient {
	nombre: string
	email: string
	direccion: string
	numero_telefono: string
	id: string
}

export class Client {
	nombre: string
	direccion: string
	email: string
	numero_telefono: string

	constructor(n: string, d: string, e: string, num: string) {
		this.nombre = n
		this.direccion = d
		this.email = e
		this.numero_telefono = num
	}

	// método estático con axios =>
	static async getAllClients() {
		const { data } = await axios.get(endpointUrl)
		return data
	}

    async pushClient() {
        const res = await axios.post(endpointUrl, {
            action: 'nuevoCliente',
            cliente: {
                nombre: this.nombre,
                email: this.email,
                direccion: this.direccion,
                numero: this.numero_telefono
            }
        })
        return res.data.message
    }

	static async deleteClient(id: string) {
		const res = await axios.post(endpointUrl, {
            action: 'eliminaCliente',
            id
        })
        return res.data.message
	}

	static async updateClient(id: string, cliente: FirebaseClient) {
		const res = await axios.post(endpointUrl, {
            action: 'actualizaCliente',
            id,
			cliente
        })
        return res.data.message
	}
}
