let notaInput = document.querySelector('#inumber')
let res = document.querySelector('.res1>span')
let res2 = document.querySelector('.res2>span')
let res3 = document.querySelector('.res3>span')

// IF - else

const calcular = () => { notaInput.value >= 7 ? res.textContent =  'Aprovado' : res.textContent = 'Reprovado'}


// IF TERNÁRIO

// if ternário condição ? verdadeiro : falso

// notaInput.value >= 7 ? res.textContent =  'Aprovado' : res.textContent = 'Reprovado'


// IF ANINHADO OU ENCADEADO 

/*

function calcular() {
    if (notaInput.value >= 7) {
    res2.textContent = 'Aprovado'
} else if ( notaInput.value <= 3 ) {
    res2.textContent = 'Reprovado'
} else {
    res2.textContent = 'Recuperação'
}

*/


// Switch case 

let situacao = ''
//let situacao = 'Aprovado'
// let situacao = 'Reprovado'
// let situacao = 'Recuperação'

switch( situacao ) {
    case 'Aprovado' :
        res3.textContent = 'Passou de ano!'
        break
    case 'Reprovado' :
        res3.textContent = 'Não passou de ano!'
        break
    case 'Recuperação' :
        res3.textContent = 'Ainda tem uma chance.'
        break
    default :
        res3.textContent = 'Estude!'
}