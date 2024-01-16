// Criação de objetos

let pessoa = {
    nome: 'Matheus',
    idade: 17,
    peso: 63.5,
    altura: 1.67,
    doador: false
}

let produtos = {
    descricao: [],
    preco: []
}

const carros = {
    marca: ['Ford', 'Nissan', 'Fiat'],
    modelo: ['Ka', 'GTR', 'Uno'],
    ano: [1999, 2001, 2005]
}

// Acessar uma propriedade usando .
/* 

pessoa.nome
pessoa.idade

E outra forma, é usando [' ']

pessoa.['nome']
pessoa.['idade]

*/

//  OPERAÇÃO IMC = peso / (altura * altura)

let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// para limitar o número de casas decimais, usamos o .toFixed(X)
console.log('IMC ' + imc.toFixed(2))

// Alterar/Atualizar o valor de uma propriedade

pessoa.nome = "Matheus Simão"
produtos.descricao = ["Arroz"]
produtos.preco = [4.99]

// Usando spreed operator

produtos.descricao = [... produtos.descricao,'Feijao']
produtos.preco = [... produtos.preco, 7.49]

// Usando spreed operator em const

carros.marca = [...carros.marca,'Toyota']
carros.modelo = [...carros.modelo,'Corola']
carros.ano = [...carros.ano, 2006]