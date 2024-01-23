// Desestruturação JavaScript

// Objetos

// -  Renomear propriedades

const pessoa = {
    name: 'Elton',
    age: 26,
};

// crio uma const, abro chaves por ser um objeto, pego a propriedade a ser alterada,
// utilizo os : para passar o novo nome da propriedade

const { age: idade } = pessoa

console.log(idade); 


// - Colocando em variável já existente

// onde o ; é necessário dps do objeto

let peso;

const player = {
    numberTshirt: 8,
    weight: '87kg',
};

// () são necessários para colocar em uma variável já existente

// { weight: peso } desestruturação

( {weight: peso} = player)

console.log(peso)