/*
let produto = ['Arroz']
let quant = 2
let preco = 4.99
let precoTotal = quant * preco 

document.write(`Preço total ${precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <hr>`)

// Criar objeto

let pessoa = {
    nome: 'André',
    altura: 1.78,
    peso: 83.4
}

const imc = pessoa.peso / (pessoa.altura * pessoa.altura)

document.write(`IMC: ${imc.toFixed(2)}`)

// Média anual - Usando arrow function

const mediaFinal = (nota1, nota2 , nota3 , nota4) => {
    return (nota1 + nota2 + nota3 + nota4) / 4
}

console.log(mediaFinal(6,7,9,8))

*/

// Array

let meses = [ 'Janeiro', ' Fevereiro ',' Março' ]
document.write(`Array de meses <br> ${meses} ... <br> <br>`)

// Objeto

let jogo = {
    nomeJogo: 'League of Legends - LOL',
    madeBy: 'Riot Games',
    data: 2009
}

document.write(`Objeto Jogo <br> Jogo: ${jogo.nomeJogo} <br> Desenvolvido por: ${jogo.madeBy} <br> Ano de lançamento: ${jogo.data} <br> <br>`)

// data

let data = new Date()
let hoje = data.getDate()
let hojeMes = data.getMonth() + 1
let hojeAno = data.getFullYear()

document.write(`Data de hoje: <br>${hoje}/${hojeMes}/${hojeAno}`)