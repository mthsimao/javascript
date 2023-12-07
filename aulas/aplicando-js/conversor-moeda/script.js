let inputReal = document.querySelector('#inputReal')

let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let btnconverter = document.querySelector('#btnConverter')
let btnlimpar = document.querySelector('#btnLimpar')

let resMsg = document.querySelector('.aviso')

let valorDolar = 4.94
let valorEuro = 5.36
let valorLibra = 6.24

let valorEmReal = ''
let moedaConvertida = ''
let moedaEstrangeira = ''

// BOTAO PARA LIMPAR TUDO
btnlimpar.addEventListener('click', () => {
    inputReal.focus()
    inputReal.value = ''

    resMsg.innerHTML = 'Digite o valor a ser convertido e selecione a moeda'

    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})


// MENSAGEM A APARECER NA TELA PARA O USUÁRIO
const mensagemFormatada = () => {
    isNaN(valorEmReal) ? valorEmReal = '' : 0

    resMsg.innerHTML =`O valor ${valorEmReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} convertido em ${moedaEstrangeira} é ${moedaConvertida} `
}

const converter = () => {

    // TRANSFORMANDO O NUMERO DO INPUT PARA FLOAT

    valorEmReal = parseFloat(inputReal.value)

    // verificar qual moeda foi selecionada

    for(let i = 0; i < moedaSelecionada.length; i++) { 
        if( moedaSelecionada[i].checked )  { 
            moedaEstrangeira = moedaSelecionada[i].value 
            console.log(moedaEstrangeira)
        }
    
        if( moedaEstrangeira == 0 || moedaEstrangeira == '' || moedaEstrangeira == null) {
            resMsg.textContent = 'Por favor, selecione alguma moeda.'
        }
    }

    /* oq eu fiz no for 
    
    I=0 ; ENQUANTO I FOR MENOR QUE O COMPRIMENTO; I + 1

    SE A MOEDASELECIONADA [I] ESTIVER CHECKED 

    ENTAO A MOEDA ESTRANGEIRA VAI RECEBER QUAL FOI A MOEDA SELECIONADA

    console.log(moedaEstrangeira)
    
    */
    
    // CASO O USÚARIO ESCOLHA TAL MOEDA


    if ( valorEmReal > 0) {
        switch(moedaEstrangeira) {

            case 'Dólar': 
                
                moedaConvertida = (valorEmReal / valorDolar).toFixed(2)

                mensagemFormatada(moedaConvertida.toLocaleString("en-US", {style : 'currency', currency: "USD"}))
                break

            case 'Euro' :
                moedaConvertida = (valorEmReal / valorEuro).toFixed(2)
                mensagemFormatada(moedaConvertida.toLocaleString("de-DE", { style: "currency", currency: "EUR" }))
                break

            case 'Libra' :
                moedaConvertida = (valorEmReal / valorLibra).toFixed(2)
                mensagemFormatada(moedaConvertida.toLocaleString('en-GB', {style:'currency', currency : 'GBP'}))
                break

            default :
                resMsg.textContent = 'Selecione uma moeda estrangeira.'
        }

    }

}