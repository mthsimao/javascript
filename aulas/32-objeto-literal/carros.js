let nomeInput = document.querySelector('#inome')
let portasInput = document.querySelector('#iportas')

let blindagemInput = document.querySelector('#iblindagem')
let municaoInput = document.querySelector('#imunicao')

let radioNormal = document.querySelector('#inormal')
let radioMilitar = document.querySelector('#imilitar')

let res = document.querySelector('.carros')

let btn = document.querySelector('button')

let carros = []

radioNormal.addEventListener('click', (evt) => {
    blindagemInput.setAttribute('disabled', 'disabled')
    municaoInput.setAttribute('disabled', 'disabled')
    blindagemInput.value = '0'
    municaoInput.value = '0'
})

radioMilitar.addEventListener('click', (evt) => {
    blindagemInput.removeAttribute('disabled')
    municaoInput.removeAttribute('disabled')
})

const gerenciarExibicaoDeCarros = () => {
    res.innerHTML = ''

    carros.map( (c) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')
        div.innerHTML = `<p>Nome: ${c._nome}</p> <p>Portas: ${c._portas}</p> <p>Blindagem: ${c._blindagem}</p> <p>Munição: ${c._municao}</p>`
        res.appendChild(div)
    })
}

btn.addEventListener('click', () => {
    if(radioNormal.checked) {
        const c = new Carro(nomeInput.value, portasInput.value)
        carros.push(c)
    } else if(radioMilitar.checked) {
        const c = new Militar(nomeInput.value, portasInput.value, blindagemInput.value, municaoInput.value)
        carros.push(c)
    } else {
        alert('Crie direito esse carro seu fela da puta')
    }
    gerenciarExibicaoDeCarros()
})



// herança

class Carro { // classe Pai
    constructor(nome, portas) {
        this._nome = nome
        this._portas = portas
        this._turnOn = false
        this._vel = 0
        this._cor = undefined 
    }

    ligar = function(){
        this._turnOn = true
    }
    desligar = function() {
        this._turnOn = false
    }

    set cor(color) {
        this._cor = color
    }
    get cor() {
        return this._cor
    }
}

const c1 = new Carro('Normal', 4) 

c1.ligar()
c1.cor =  'Preto'

console.log(`Nome: ${c1._nome}` );
console.log(`Portas: ${c1._portas}`);
console.log(`Ligado: ${ (c1._turnOn?'sim':'não') }`);
console.log(`Velocidade: ${c1._vel}`);
console.log(`Cor: ${c1._cor}`);
console.log('-------------------------');

 
class Militar extends Carro { // classe filho
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)

        this._blindagem = blindagem
        this._municao = municao
        this._cor = 'Verde'
    }

    atirar() {
        if(this._municao > 0) {
            this._municao--
        }
    }
}

const c2 = new Militar ('Tanque', 1, 100, 60)

c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c2._nome}` );
console.log(`Portas: ${c2._portas}`);
console.log(`Ligado: ${ (c2._turnOn?'sim':'não') }`);
console.log(`Velocidade: ${c2._vel}`);
console.log(`Blindagem: ${c2._blindagem}`);
console.log(`Munição: ${c2._municao}`);
console.log(`Cor: ${c2._cor}`);
console.log('-------------------------');

