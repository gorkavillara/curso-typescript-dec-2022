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

export type Artista = {
    pintura: "Óleo" | "Acrílico" | "Spray"
}

export type AlumnoArtista = Alumno & Artista
