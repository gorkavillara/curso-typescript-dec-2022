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
    static whatIs() {
        return "La clase Student instancia objetos de tipo Student";
    }
}
Student.explain = "La clase Student instancia objetos de tipo Student";
class GradStudent extends Student {
    constructor(n, a, grade, fl, isDev) {
        super(n, a, fl, isDev);
        this.grade = grade;
    }
    get nameAndAge() {
        return `${this.name}, is ${this.age} years old, and obtained ${this.grade} points at the exam`;
    }
}
const newStudent = new Student("Sergio", 21, "C#", true);
const newGradStudent = new GradStudent("Ernesto", 29, 10, "Typescript", true);
console.log(newStudent.nameAndAge);
console.log(newGradStudent.nameAndAge);
console.log(newStudent);
console.log(newGradStudent);
//# sourceMappingURL=index.js.map