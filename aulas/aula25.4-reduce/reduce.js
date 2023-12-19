// Criei pessoas em formas de objetos

const maria = {
    name: 'Maria' ,
    lastName: 'Oliveira',
    age: 22
}

const joao = {
    name: 'João',
    lastName: 'Silva',
    age: 18
}

const ana = {
    name: 'Ana',
    lastName: 'Beatriz',
    age: 16
}

const lucas = {
    name: 'Lucas',
    lastName: 'Silveiro',
    age: 22
}

// Agrupei as pessoas dentro de um array

const people = [maria, joao, ana, lucas]

// Método REDUCE

const idadeMedia = people.reduce((valorAnterior, valorAtual, indexAtual) => {
    console.log('valor atual: ', valorAtual)

    const mediaIdade = valorAnterior + valorAtual.age;
    return mediaIdade

}, 0)

console.log('Idade média: ', idadeMedia / people.length )

