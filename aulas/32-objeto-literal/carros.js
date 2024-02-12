let nomeInput = document.querySelector('#inome')
let portasInput = document.querySelector('#iportas')

let blindagemInput = document.querySelector('#iblindagem')
let municaoInput = document.querySelector('#imunicao')

let radioNormal = document.querySelector('#inormal')
let radioMilitar = document.querySelector('#imilitar')

let res = document.querySelector('.carros')

let btn = document.querySelector('button')

let carros = []

const removerCarro = (rcarro) => {
    carros = carros.filter( (el) => {
        return el._nome != rcarro
    })
}

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
        const btn = document.createElement('button')
       
        btn.addEventListener("click", (evt)=>{
            const remove = evt.target.parentNode.dataset.nome
            removerCarro(remove)

            gerenciarExibicaoDeCarros()
        })

        div.setAttribute('class', 'carro')
        div.setAttribute('data-nome', c._nome)
        div.innerHTML = `<p>Nome: ${c._nome}</p> <p>Portas: ${c._portas}</p> <p>Blindagem: ${c._blindagem}</p> <p>Munição: ${c._municao}</p>`
        btn.innerHTML = 'Remover'
        btn.setAttribute('class', 'remove')
        res.appendChild(div)
        div.appendChild(btn)
    })
}

btn.addEventListener('click', () => {
    if (nomeInput.value == '' || nomeInput.value == null ) {
        alert('Crie direito esse carro seu fela da puta')
    } else if(radioNormal.checked) {
        const c = new Carro(nomeInput.value, portasInput.value)
        carros.push(c)
    } else if(radioMilitar.checked) {
        const c = new Militar(nomeInput.value, portasInput.value, blindagemInput.value, municaoInput.value)
        carros.push(c)
    } else {
        alert('Crie direito esse carro seu fela da puta')
    }

    nomeInput.value = ''
    portasInput.value = 1
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
