

class Carro {
    constructor(nome, portas) {
        this._nome = nome
        this._portas = portas
        this._tipo = ''
    }

    set nome(string) {
        this._nome = nomeInput.value
    }

    get nome() {
        return this._nome
    }
}