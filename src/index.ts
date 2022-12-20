import axios, { AxiosResponse } from "axios";

import Character from "./models/characters";
import { castCharacter } from "./controllers/characters.js";

const getCharacter = async (id: number): Promise<Character | void> => {
  const url: string = `https://swapi.dev/api/people/${id}`;
  // try {
  //     const { data }: AxiosResponse<any, any> = await axios.get(url)
  //     console.log(data)
  // } catch(e) {
  //     console.error("Error!!!")
  // }
  const res: AxiosResponse<any, any> | void = await axios
    .get(url)
    .catch((error) => console.error(error));
  return res && castCharacter(res.data);
};

const getSyncCharacter = async (id: number): Promise<void | Character> => {
  const url: string = `https://swapi.dev/api/people/${id}`;
  // Poner una animación de loading
  return axios.get(url)
    .then(res => castCharacter(res.data)) // .then(res => console.log(res))
    .catch(() => console.error("Ha habido un error")) // .catch(err => console.error(err))
    .finally(() => console.log("He terminado. Para bien, o para mal"))
}

// getCharacter(4)
// getSyncCharacter(2)

// Instrucción 1
// Instrucción 2
// async Instrucción 3
// Instrucción 4

const miPromesa = (): Promise<string> => new Promise((resolve, reject) => {
    const now = new Date()
    if (now.getTime() % 2 === 0) return resolve(`Par: Se ha ejecutado correctamente: ${now.getTime()}`)
    return reject(`Impar: Se ha ejecutado incorrectamente: ${now.getTime()}`)
})

miPromesa()
    .then(res => console.log(res))
    .catch(er => console.log(er))