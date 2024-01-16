// outra forma de usar symbol no js

const nome = Symbol("Nome")
const numero = Symbol("Numero")
const corUniforme = Symbol("Cor do Uniforme")

const pessoa = {
    nome: 'Marcelo'
}

pessoa[numero] = 10
pessoa[corUniforme] = "azul"


for(p in pessoa) {
    console.log(p)
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa[numero])
console.log(pessoa[corUniforme])

