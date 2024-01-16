/*
console.log('Passo 1')
console.log('Passo 2')
console.log('Passo 3')
console.log('Passo 4')
console.log('Passo 5')
console.log('Passo 6')

Ao invés de eu fazer esse código gigante em cima, eu o faço utilizando
a estrutura do while que é mais fácil e simples, e também deixa o código
mais limpo.

*/


// Primeiro testa, depois faz o bloco.
var c = 1 
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++ 
} 

/* Primeiro faz o bloco, depois testa.

var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)

*/