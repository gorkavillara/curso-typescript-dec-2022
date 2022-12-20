// function miFuncion(parametros: tipoParametros): tipoDevolucion {

// }

const miFuncion = (parametros: number[]): string => {
    // Ejecuta la función
    return "Hola"
}

type TipoFuncion = (p: number[]) => string

const miSegundaFuncion: TipoFuncion = (parametros: number[]) => {
    return "Hola"
}

const miTerceraFuncion: TipoFuncion = function(params: number[]) {
    return "Hola"
}

const miCuartaFuncion = function(params: number[]): string {
    return "Hola"
}

let nombre: string = "Rick"

const cambiaNombre = (nombre: string): string => { // Parámetro por valor
    nombre = "Morty"
    return nombre
}

cambiaNombre(nombre)

// console.log(nombre)

interface Person {
    name: string
    age: number
}

const person: Person = {
    name: "Rick",
    age: 51
}

const changeName = (character: Person): string => { // objetos, arrays => por referencia
    character.name = "Morty"
    return character.name
}

changeName(person)

// console.log(person.name)

const personList: Person[] = [
    {
        name: "Peter",
        age: 54
    },
    {
        name: "Manuel",
        age: 26
    },
    {
        name: "Gorka",
        age: 35
    }
]

const personNames: string[] = personList.map((person: Person) => person.name)
// console.log(personNames)

// (() => {console.log("Hola")})()
const saludar = () => {console.log("Hola")}
// saludar()

// const suma: (num1: number, num2: number) => number = (num1, num2) => {
//     return num1 + num2
// }

const suma = (...params: number[]): number => {
    const res: number = params.reduce((acc: number, cur: number) => acc + cur, 0)
    return res
}

console.log(suma(10, 2, 9, 23, 4, 6))