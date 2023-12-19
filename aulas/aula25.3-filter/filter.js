// Criei pessoas em formas de objetos

const maria = {
    name: 'Maria' ,
    lastName: 'Oliveira',
    age: 24
}

const joao = {
    name: 'João',
    lastName: 'Silva',
    age: 18
}

const ana = {
    name: 'Ana',
    lastName: 'Beatriz',
    age: 17
}

const lucas = {
    name: 'Lucas',
    lastName: 'Silveiro',
    age: 21
}

// Agrupei as pessoas dentro de um array

const people = [maria, joao, ana, lucas]

// Método FILTER

// O metódo filter irá filtrar todos os elementos que satisfaça sua condição
// Sempre colocar um return no final para que seja um veradeiro ou falso

const pessoa = people.filter((value, index) => {
    const maiorIdade = value.age <= 8
    return maiorIdade
})

console.log(pessoa)

// CASO não satisfaça sua condição irá retornar um array vazio