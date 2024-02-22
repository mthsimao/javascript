// class abstract

// só posso usar essa classe como base, não posso instanciar ela
// ou seja, eu só posso extender essa classe abstrata

class padraoCarro {
    constructor() {
        // caso eu chame essa classe, eu lanço um type error
        // ^^^ assim que defino se é uma classe abstrata ou não
        if(this.constructor === padraoCarro) {
            throw new TypeError('Esta classe não pode ser instânciada')
        }
        this.rodas = 4
        this.portas = 4
    }
}

// sempre extendendo a classe abstrata

class carro extends padraoCarro {
    constructor(cor, marca) {
        // chamando uma classe abstrata, é obrigado ter o Super()
        super() 
        this.cor = cor
        this.marca = marca

        if(this.cor == 1) {
            this.cor = 'Branco'
        } else if(this.cor == 2) {
            this.cor = 'Preto'
        } else if(this.cor == 3) {
            this.cor = 'Cinza'
        }

        if(this.marca == 1) {
            this.marca = 'Honda'
        } else if(this.marca == 2 ) {
            this.marca = 'Nissan'
        } else if(this.marca == 3 ) {
            this.marca = 'Mercedes'
        }
    }

    info(){
        console.log(`Cor : ${this.cor}`)
        console.log(`Marca : ${this.marca}`)
        console.log(`Rodas : ${this.rodas}`)
        console.log(`Portas : ${this.portas}`)
    }
}

const c1 = new carro(2,3)

c1.info()