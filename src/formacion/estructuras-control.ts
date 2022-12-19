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

// while y do..while
let seguir: boolean = true
let i: number = 0
while(seguir) {
    console.log(students[i].name)
    i++
    // continue
    if (i === students.length) {
        seguir = false
        // break
    }
}

do {
    console.log("Estoy en el do...while")
} while(false)