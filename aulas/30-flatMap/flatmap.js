// flat map

const arrayFudido = [
    1,
    2,
    ['teste 1', 'teste 2'],
    1,
    ['teste 5']
]

console.log(arrayFudido)

const array = arrayFudido.flatMap(array => array) 

// flat map serve para juntar todo um array fudido em um único array bonitinho

console.log('Após utilizar o método flatMap, eu consigo deixar com que o array fique em um único array');

console.log(array)