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

// function para add a pessoa na tela

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

    const p = new Pessoa(name.value, age.value) // passando o nome e idade para a class Pessoa

    name.value = ''
    age.value = ''

    pessoas.push(p) // adicionar a pessoa no array das pessoas

    addPessoa() // chamar a function para add a pessoa
    name.focus() // focus após adicionar a pessoa
    
})