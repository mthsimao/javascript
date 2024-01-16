// for e forEach

// Chamando uma função de fora para dentro do forEach, caso essa função possa ser reutilizada

const socialNetworks = ['youtube' , 'discord', 'twitter', 'instagram' ]

const logArrayInfo =  (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)

// ---------------------------------------------

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
    age: 18
}

const lucas = {
    name: 'Lucas',
    lastName: 'Silveiro',
    age: 20
}

// Agrupei as pessoas dentro de um array

const people = [maria, joao, ana, lucas]

// para cada pessoa dentro do array, mostre-me o index(posição) e o objeto(person)

let paragrafo = document.querySelector('.textop')

people.forEach(( person, index) => {
    console.log('-------------------------')
    console.log('index: ', index)
    console.log('person: ', person)
})