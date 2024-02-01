class Person {
    constructor(name) {
        this._name = name
    }

    set name(string) {
        this._name = string
    }

    get name() {
        return this._name
    }
}

var pessoa = new Person('Pedro')
console.log(pessoa.name)

// nova class Trabalho extends a class Person
class Trabalho extends Person {
    constructor(name, job) {
        super(name) // quero reutilizar o name

        this._job = job
    }

    set job(trabalho) {
        this._job = trabalho
    }

    get job() {
        return this._job
    }
}

var lucas = new Trabalho('Lucas', 'Software Engineer')

console.log(lucas.name, lucas.job)
