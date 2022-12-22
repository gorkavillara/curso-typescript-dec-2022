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

const newStudent: Student = new Student("Ismael", 22, "Typescript", false) // Instanciar una clase
newStudent.newFavoriteLanguage = "Vue3"
// console.log(newStudent.nameAndAge())
console.log(newStudent.nameAndAge)

// newStudent.newFavoriteLanguage("Vue3")
console.log(newStudent.isDeveloper)
console.log(newStudent.getFavoriteLanguage())

console.log(Student.explain)
console.log(Student.whatIs())
