// Criei pessoas em formas de objetos

const maria = {
    name: 'Maria' ,
    lastName: 'Oliveira',
    age: 24
}

const joao = {
    name: 'João',
    lastName: 'Silva',
    age: 34
}

const ana = {
    name: 'Ana',
    lastName: 'Beatriz',
    age: 17
}

const lucas = {
    name: 'Lucas',
    lastName: 'Silveiro',
    age: 20
}

// Agrupei as pessoas dentro de um array

const people = [maria, joao, ana, lucas]

// Método find

const pessoa = people.find((value, index, array) => {
    const menorIdade = value.age < 18
    return menorIdade
})

console.log(pessoa)

// O metódo find irá parar de funcionar quando encontrar 1 único elemento que satisfaça a sua condição
// no caso é algm com a age < 18, ele parou na Ana, porque foi o primeiro que satisfez a condição.