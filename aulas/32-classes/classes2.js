class Pessoa{
    constructor(pName, pAge) {
        this.nome = pName,
        this.idade = pAge
    }

    getNome() {
        return this.nome
    }
    getIdade() {
        return this.idade
    }

}

let btn = document.querySelector('button')
let res = document.querySelector('.res')

let pessoas = []

const addPessoa = () => {
    res.innerHTML = ''

    pessoas.map( (p) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `<p>Nome: ${p.getNome()}</p> <p>Idade: ${p.getIdade()}</p>`
        res.appendChild(div)
    })
}

btn.addEventListener('click', (evt) => {

    let name = document.querySelector('#iname')
    let age = document.querySelector('#iage')

    const p = new Pessoa(name.value, age.value)

    name.value = ''
    age.value = ''

    pessoas.push(p)

    addPessoa()
    name.focus()
    
})