"use strict";
class Student {
    constructor(n, a, fl, isDev) {
        // Inicializamos los atributos de este objeto
        this.name = n;
        this.age = a;
        if (fl)
            this.favoriteLanguage = fl;
        if (isDev)
            this.isDeveloper = isDev;
    }
    getFavoriteLanguage() {
        this.logFavoriteLanguage();
        return this.favoriteLanguage;
    }
    logFavoriteLanguage() {
        console.log(this.favoriteLanguage);
    }
    get nameAndAge() {
        return `${this.name}, is ${this.age} years old`;
    }
    set newFavoriteLanguage(nfl) {
        this.favoriteLanguage = nfl;
        this.isDeveloper = true;
    }
}
const newStudent = new Student("Ismael", 22, "Typescript", false); // Instanciar una clase
newStudent.newFavoriteLanguage = "Vue3";
// console.log(newStudent.nameAndAge())
console.log(newStudent.nameAndAge);
// newStudent.newFavoriteLanguage("Vue3")
console.log(newStudent.isDeveloper);
console.log(newStudent.getFavoriteLanguage());
//# sourceMappingURL=index.js.map