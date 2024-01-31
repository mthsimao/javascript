class Person {
    constructor(name) {
        this._name = this._capitalize(name)
    }

    set name(string) {
        this._name = this._capitalize(string)
    }

    _capitalize(string) {   
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}` // para deixar com a 1a letra maiuscula
    }

    get name() {
        return this._name
    }
}

var person = new Person('pedro')

// person.name = 'zezim'
console.log(person.name);

// Método extends para extender a classe Person
// método super para pegar as propriedades de outra classe

class Developer extends Person{
    constructor(name, codeLanguage) {
        super(name)
        this._codeLanguage = codeLanguage
    }

    code() {
        return `${this._name} está codando em ${this._codeLanguage}.`
    }
}

let bert = new Developer('Bert', 'PHP')
console.log(bert.code())

let amelia = new Developer('Amélia', 'JavaScript')
console.log(amelia.code())