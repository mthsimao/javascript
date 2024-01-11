let nome = "Bruno Pinho campos"

console.log(nome);

// Procure a palavra "pinho" e me retorne a posição inicial
console.log(nome.search(/pinho/i));

// Encontre todas as letras "o"
console.log(nome.match(/o/g));

// Reponha a palavra "pinho" por "Teste"
console.log(nome.replace(/pinho/i, 'Teste'));

// Reponha todas as letras "o" por "Teste"
console.log(nome.replace(/o/ig, 'Teste'));

// encontre todos os "o" e "h" 
console.log(nome.match(/[oh]/ig));