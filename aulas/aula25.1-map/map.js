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

// Método map

const lastNames = people.map(( person, index, array) => {

    console.log(person.name)
    return person.lastName
})

console.log(lastNames)

/* 
    Quase a mesma coisa que o forEach(), porém, usando o map() você tem um retorno de um valor
*/