// import chalk from "chalk"

// {
//      Primero -> Librería para obtener datos del usuario (input)
//      Qué opción quieres elegir -> 
//          1. Listar los clientes
//          2. Nuevo cliente
//          3. Editar cliente
//          4. Eliminar cliente
//          5. SALIR
// }

console.log("Hola mundo desde Typescript")

// Ctrl + K - T
function checkEven(num: number): boolean {
    if (num % 2 === 0) { // Devuelve el resto de dividirlo entre 2
        return true
    } else {
        return false
    }
}
function checkEvenBetter(num: number): boolean {
    return num % 2 === 0
}

console.log(checkEvenBetter(1987180))

function devuelveEdad(edad: number): string {
    if (edad < 18) {
        return "Menor de edad"
    } else if (edad >= 18 && edad < 65) {
        return "Adulto"
    } else {
        return "Mayor"
    }
}
function devuelveEdadBetter(edad: number): string {
    if (edad < 18) return "Menor de edad"
    if (edad < 65) return "Adulto"
    return "Mayor"
}

console.log(devuelveEdadBetter(22))

type Nota = 0 | 1 | 2 | 3 | 4 | 5

function devuelveNota(nota: Nota): string {
    console.time("devolucionNota")
    let stringNota: string
    switch(nota) {
        case (0) :
            stringNota = "Debes estudiar más"
            break
        case (1) :
            stringNota = "Deja la switch"
            break
        case (2) :
            stringNota = "Tú puedes"
            break
        case (3) :
            stringNota = "No está mal"
            break
        case (4) :
            stringNota = "Bien hecho"
            break
        case (5) :
            stringNota = "🥳🥳🥳"
            break
        default:
            stringNota = "No has pasado bien la nota"
            break
    }
    for (let i = 0; i < 10000000; i++) {
        let a = true
    }
    console.timeEnd("devolucionNota")
    return stringNota
}

console.log(devuelveNota(1))

interface Student {
    name: string
    age: number
    isDeveloper?: boolean
}
const students: Student[] = [
    {
        name: "Sergio",
        age: 25,
        isDeveloper: true
    },
    {
        name: "Ismael",
        age: 22,
        isDeveloper: true
    },
    {
        name: "Laura",
        age: 27,
        isDeveloper: true
    }
]

console.table(students)

for (let i = 0; i < students.length; i++) {
    if (students[i].age < 23) continue
    console.log(students[i].name)
}

// Tier 1 : map, filter, forEach
// map -> array => array
const studentNames: string[] = students.map(
    (student: Student, index: number, arrayOriginal: Student[]) => {
        return student.name
    }
)
console.log({studentNames})

const youngStudents: Student[] = students.filter(
    (student: Student) => student.age < 23
)
console.log({youngStudents})

students.forEach((student: Student) => {
    if (student.age < 23) return console.log(`${student.name} es muy joven`)
    return console.log(`${student.name} es muy joven, pero no tanto`)
})

// const nombreFuncion = (parametros) => { /* Definimos la función */ }

// Tier 2 : some, every, reduce
const isThereAYoungStudent: boolean = students.some((student: Student) => student.age < 18) // false

console.log({isThereAYoungStudent})

const areAllStudentsAdults: boolean = students.every((student: Student) => student.age > 17) // true

console.log({areAllStudentsAdults})

const sumAllTheAges: number = students.reduce((acc: number, student: Student) => {
    return acc + student.age
}, 0)

console.log({ sumAllTheAges })

const validation: boolean = false

function checkValidation(val: boolean) {
    if (val) return console.log("Está correcto")
    console.error("Ha fallado la validación")
}

checkValidation(validation)

console.warn("Cuidado! Que la validación ha fallado")

console.assert(students.length < 10, "Cuidado, los estudiantes son menos que 10")