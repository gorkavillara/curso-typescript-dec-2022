export interface CustomCoin {
    network: "Eth" | "Btc" | "Bnb",
    contractUrl: string
}

export type Alumno = {
    nombre: string,
    apellido: string,
    edad: number,
    esDesarrollador?: boolean
}