class Pessoa {
    constructor(pName, pAge) {
        this.name = pName
        this.age = pAge
    }

    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }

    setName(sName) {
        this.name = sName
    }
    setAge(sAge) {
        this.age = sAge
    }

    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`--------------------`);
    }
}

let pessoas = []

let btn = document.querySelector('button')
let res = document.querySelector('.res')

// função para adicionar a pessoa na tela

const addPessoa = () => { 
    res.innerHTML = ''
    pessoas.map((p) => {
        const div = document.createElement('div')
        div.setAttribute("class", "pessoa")
        div.innerHTML = `<p>Nome: ${p.getName()}</p> <p>Idade: ${p.getAge()}</p> `

        res.appendChild(div)
    })
}

btn.addEventListener('click', (evt) => {

    let inputName = document.querySelector('#iname')
    let inputAge = document.querySelector('#iage')

    let p = new Pessoa(inputName.value, inputAge.value) // criando nova classe de pessoa

    pessoas.push(p) // adicionar a pessoa ao array de pessoas

    inputName.value = "" // após clicar em adicionar, deixar o input vazio para digitar novamente
    inputAge.value = "" // após clicar em adicionar, deixar o input vazio para digitar novamente
    
    inputName.focus()

    addPessoa()

})
