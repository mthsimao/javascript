let carros = ['fusca', 'brasilia', 'gol']

// FOR = para faça
// i = iterador, interação ou index

// FOR ( VÁRIAVEL PARA FAZER A REPETIÇÃO ; OPERAÇÃO ; INCREMENTO ++ OU DECREMENTO --)

for (let i=1; i<=5; i++) {
    document.write(i + " ")
}

for (let i=5; i>=1; i-- ) {
    document.write(i + "")
}

for (let i = 0; i<carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
} 
// Já que meu i é 0, enquanto o i for menor que a quantidade de carros, 
// escreva o nome do carro em cada posição [i]


// forEach = para cada (um outro método de array)

// nomeDaVariavel.forEach( 'function(parâmetros) ') sempre será função anônima

let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia']

frutas.forEach(function(fruta, i) {
    document.write(`${i} ${fruta} <br> `)
})

carros.forEach(function(carro){
    document.write(`${carro} <br>`)
})


//  WHILE
// sou obrigado a criar uma variável do lado de fora do bloco

let contador = 0

while (contador < frutas.length) {
    console.log(frutas[contador])
    contador++
}

// Do while
// também sou obrigado a criar uma variável fora do laço

let iterador = 0

do {
    console.log(carros[iterador])
    iterador++
} while(iterador < carros.length)

console.log(iterador)