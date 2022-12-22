class Student { // Creación de una clase
    name: string
    age: number
    private favoriteLanguage?: string
    isDeveloper?: boolean

    constructor(n: string, a: number, fl?: string, isDev?: boolean) {
        // Inicializamos los atributos de este objeto
        this.name = n
        this.age = a
        if (fl) this.favoriteLanguage = fl
        if (isDev) this.isDeveloper = isDev
    }

    getFavoriteLanguage() {
        this.logFavoriteLanguage()
        return this.favoriteLanguage
    }

    private logFavoriteLanguage() {
        console.log(this.favoriteLanguage)
    }

    get nameAndAge() {
        return `${this.name}, is ${this.age} years old`
    }

    set newFavoriteLanguage(nfl: string) {
        this.favoriteLanguage = nfl
        this.isDeveloper = true
    }

    static whatIs() {
        return "La clase Student instancia objetos de tipo Student"
    }

    static explain: string = "La clase Student instancia objetos de tipo Student"
}

class GradStudent extends Student {
    grade: number

    constructor(n: string, a: number, grade: number, fl?: string, isDev?: boolean) {
        super(n, a, fl, isDev)
        this.grade = grade
    }

    get nameAndAge() {
        return `${this.name}, is ${this.age} years old, and obtained ${this.grade} points at the exam`
    }
}

const newStudent = new Student("Sergio", 21, "C#", true)
const newGradStudent = new GradStudent("Ernesto", 29, 10, "Typescript", true)

console.log(newStudent.nameAndAge)
console.log(newGradStudent.nameAndAge)

console.log(newStudent)
console.log(newGradStudent)
