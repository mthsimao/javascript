// for In

let num = [10,20,30,40,50]

console.log('For normal ');

for(let i =0; i < num.length; i++) {
    console.log(`Index: ${i}`) // index(posição) do array
    console.log(`Valor: ${num[i]}`) // valor de cada index do array
};

console.log('For in');

for(n in num) {
    console.log(`Index: ${n}`) // index(posição) do array
    console.log(`Valor: ${num[n]}`) // valor de cada index do array
};
console.log('=================');

console.log('For of')

// o for of, ele acessa diretamente o valor de cada index do array

for(n of num) console.log(`Valor: ${n}`) // valor de cada index
