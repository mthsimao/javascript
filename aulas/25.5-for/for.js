// Loop - definido ( for )
// utilizar o for quando eu souber a quantidade de vezes que eu preciso iterar o bloco de comando

// estrutura for =>
// (inicialização; condição de execução; incremento ou decremento)

for(let i = 0; i<10; i++) {
    console.log(`i = ${i}`)
}

// i=0, verifica se i < 10, se for true, i++ e executa o comando(s)
// se a condição for false, ele para de executar o bloco de comando(s)

console.log('====================================');
console.log('Brincadeira de ímpar ou par');

// ip=0, verifica se ip < 20, se for, ip++

// se ip%2 == 0, ou seja, se o valor de ip/2 for igual a 0, é par

// mas se o valor de ip/2 for diferente de 0, é ímpar

for(let ip = 0; ip < 20; ip++) {
    if( ip%2==0) {
        console.log(`${ip} é par`)
    } else {
        console.log(`${ip} é ímpar`);
    }
}

console.log('====================================');

console.log('For em array')

let array = [11,21,31,41,51]

// x=0, verifica se o x é menor ou igual o comprimento do array
// se for menor, x++ => executa o comando

for(let x = 0; x<=array.length; x++) {
    console.log('====================================');
    console.log(`Posição ${x}`) // posição do array
    console.log(`Valor ${array[x]}`) // valor de cada posição do array
}

//output > 1,2,3,4,5
//-----------------------------------------------------------------
