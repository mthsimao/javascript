let valorDigitado = document.querySelector('#inputReal')

let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let msg = document.querySelector('.message')

let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

// valores hoje 02/12/2023

let valorDolar = 4.92
let valorEuro = 5.35
let valorLibra = 6.25
let valorBitcoin = 194229.63
let valorReal = 0

let moedaEstrangeira = ''
let moedaConvertida = ''

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETÁRIOS

function mesagemFormata(moedaConvertida) {
    isNaN(valorReal) ? valorReal = 0 : ''
    console.log('Moeda convertida ' + moedaConvertida)
    msg.textContent = `O valor ${(valorReal).toLocaleString('pt-BR', {style : 'currency', currency: 'BRL' })} convertido em ${moedaEstrangeira} é ${moedaConvertida}`
}

// Bloquear botao 

function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado.value == '' || valorDigitado.value == null ) {
        btnConverter.style.cursor = 'not-allowed'
        btnConverter.classList.add('desativado')
    }
}

// Ativar botao

function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.classList.remove('desativado')
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Não ativou')
        btnConverter.style.cursor = 'not-allowed'
        btnConverter.classList.add('desativado')
    }
}

//Verificar qual input radio foi selecionado

btnConverter.addEventListener('click', () => {
    valorReal = parseFloat(valorDigitado.value)

    for(let i = 0; i < moedaEstrangeira.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }
})

switch(moedaEstrangeira) {
    case 'Dólar' :
        moedaConvertida = valorReal / valorDolar
        simboloMonetario = 'US$'
        mesagemFormata(moedaConvertida.toLocaleString('en-US', {style: 'currency', currency: 'USD' }))

    case 'Euro' :
        moedaConvertida = valorReal / valorEuro
        mesagemFormata(moedaConvertida.toLocaleString('de-DE', {style: 'currency', currency: 'EUR' }))
}