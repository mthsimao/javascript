class Person {
    constructor(name) {
        this._name = this._capitalize(name)
        // _name = como valor interno, por isso o _ antes do nome
    }

    set name(string) {
        this._name = this._capitalize(string)
        // usando o this por ser uma classe interna
    }

    _capitalize(string) {   
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}` 
        // para deixar com a primeira letra maiúscula
    }

    get name() {
        return this._name
    }
}

var person = new Person('pedro')

// person.name = 'zezim'
console.log(person.name);

// Método extends para extender a classe Person


class Developer extends Person{
    constructor(name, codeLanguage) {
        super(name)
        // método super(): chamo o objeto ou construtor  pai da outra classe
        // passando o (name), terá acesso a tudo que já implementado na classe Person, relativo a name
        this._codeLanguage = codeLanguage
    }

    code() {
        return `${this._name} está codando em ${this._codeLanguage}.`
    }

    set nome(string) {
        this._name = string
    }

    get nome() {
        return this._name
    }
}

let bert = new Developer('Bert', 'PHP')
console.log(bert.code())

let amelia = new Developer('Amélia', 'JavaScript')
console.log(amelia.code())

Developer.nome = 'Lucas'
console.log(Developer.nome)

