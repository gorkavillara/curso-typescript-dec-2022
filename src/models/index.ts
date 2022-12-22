import axios from "axios"

const endpointUrl: string = "https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/clientes"

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
}