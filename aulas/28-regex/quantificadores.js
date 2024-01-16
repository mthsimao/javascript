let nome = "Bruno Pinho Campos 1934"

let nome2 = new String('Brunoooooo Pinho Campoosss')

// Quantificadores

console.log(nome2.match(/o+/ig)); // todos os 'os'

console.log(nome2.match(/o+|s+/ig)); // todos os 'os' e também 's'

let numeros = "1, 10, 100, 1000, 10000100"

console.log(numeros.match(/10+/ig));
// + = todos os 10 ou mais caracter que tiver 1 ou 0

console.log(numeros.match(/10*/ig));
// * = exepressão que se repete 0 ou mais vezes
// 1 ou 10, mas se for 100, tb vai retornar
// caso seja um número 1010101010010010, ele sempre vai cortar no 1 

console.log(numeros.match(/10?/ig));
// 1 ou 10, nada mais que isso
// ? = expressão que pode se repetir 1 ou mais vezes