// toda class tem um constructor

class Carro {
    constructor(paramNome, ptipo) {
        this.nome = paramNome
        
        if(ptipo == 1) {
            this.tipo = 'Esportivo'
            this.velmax = 300 + 'Km/h'
        } else if (ptipo== 2){
            this.tipo = 'Utilitário'
            this.velmax = 100 + 'Km/h'
        } else if (ptipo == 3) {
            this.tipo = 'Passeio'
            this.velmax = 160 + 'Km/h'
        } else {
            this.tipo = 'Militar'
            this.velmax = 180 + 'Km/h'
        }    
    }

    // funções com o nome 'get' para pegar

    getName() {
        return this.nome
    }
    getType() {
        return this.tipo
    }
    getVmax() {
        return this.velmax
    }

    // funções com o nome 'set' para setar 

    setNome(nome) {
        this.nome = nome
    }
    setType(tipo) {
        this.tipo = tipo
    }
    setVMax(Vmax) {
        this.velmax = `${Vmax} Km/h`
    }

    // pegar a info e juntar tudo em um único array

    getInfo() {
        return [this.nome, this.tipo, this.velmax]
    }

    // info para que seja tudo imprimido no console com template string

    info() {
            console.log(`Nome: ${this.nome}`)
            console.log(`Tipo: ${this.tipo}`)
            console.log(`V.Max: ${this.velmax}`)
            console.log('-------------------------')
        }
}

let c1 = new Carro('Rapidão', 1)
let c2 = new Carro('Corola', 3)
let c3 = new Carro('Uber', 2)

// usando a função setNome para mudar o nome

c1.setNome('albert')
// usando a função setVMax para mudar a velocidade máxima
c1.setVMax(500)

console.log(c1.getInfo())
