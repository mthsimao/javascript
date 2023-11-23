let formulario = document.querySelector('form')

let num1 = document.querySelector('#nota1')
let num2 = document.querySelector('#nota2')
let media = document.querySelector("#imedia")
let cxSituacao = document.querySelector('#ifinal')

let btnCalcular = document.querySelector('#btnCalc')
let btnReset = document.querySelector('#btnReset')

// VALIDAR OS NÚMEROS

function validarNumbers() {
    let nota1 = num1.value
    let nota2 = num2.value

    if(nota1 <= 0 || nota1 > 10 || nota2 <= 0 || nota2 >10) {
        formulario.reset()
        alert('Digite um número entre 0 e 10')
        situacaoFinal = ''
    }
}

// CALCULAR MEDIA 
const calcularMedia = (n1, n2) => {
    return (n1 + n2) / 2 
}

// DEFINIR SITUAÇÃO FINAL DO ALUNO COM BASE NA MEDIA 

function situacaoFinal(s1) {
    let situacaoText = ''

    if( s1 >= 7 ) {
        situacaoText = 'Aprovado(a)'
        cxSituacao.classList.remove('recuperacao')
        cxSituacao.classList.remove('reprovado')
        cxSituacao.classList.add('aprovado')
        console.log('add class aprovado')
    } else if ( s1 <=3 ) {
        situacaoText = 'Reprovado(a)'
        cxSituacao.classList.remove('recuperacao')
        cxSituacao.classList.add('reprovado')
        cxSituacao.classList.remove('aprovado')
        console.log('add class reprovado')

    } else {
        situacaoText = 'Recuperação'
        cxSituacao.classList.add('recuperacao')
        cxSituacao.classList.remove('reprovado')
        cxSituacao.classList.remove('aprovado')
        console.log('add class recuperação')
    }

    return situacaoText
}

btnCalcular.addEventListener("click", function(e) {
    validarNumbers()
    
    // CALCULANDO MEDIA FINAL
    let nota1F = parseFloat(num1.value)
    let nota2F = parseFloat(num2.value)

    let mediaFinal = calcularMedia(nota1F, nota2F)
    
    // MOSTRANDO MÉDIA FINAL
    let nota = parseFloat(mediaFinal)
    media.value = nota

    if(isNaN(nota) || nota == 0 ) {
        console.log('Não é um número')
        cxSituacao.classList.remove('recuperacao')
        cxSituacao.classList.remove('reprovado')
        cxSituacao.classList.remove('recuperacao')
    } else {
        //  MOSTRANDO TEXTO DE SITUAÇÃO FINAL
        let situacao = situacaoFinal(nota)
        cxSituacao.value = situacao
    }    

    e.preventDefault()
})

btnReset.addEventListener("click", () => {
    cxSituacao.classList.remove('recuperacao')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})