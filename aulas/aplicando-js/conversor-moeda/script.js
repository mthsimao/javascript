let inputReal = document.querySelector('#inputReal')

let moedasEstrangeiras = document.getElementsByName('moedaEstrangeira')

let btnconverter = document.querySelector('#btnConverter')
let btnlimpar = document.querySelector('#btnLimpar')

let resMsg = document.querySelector('#aviso')

let valorDolar = 4.94
let valorEuro = 5.36
let valorLibra = 6.24

btnconverter.addEventListener('click', () => {
    let numeroReal = parseFloat(inputReal.value)

    console.log(`O valor em reais: ${numeroReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
})