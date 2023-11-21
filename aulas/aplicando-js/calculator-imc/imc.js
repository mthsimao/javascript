let form = document.querySelector('#formulario')

let cXnome = document.querySelector('#inome')
let cXidade = document.querySelector('#iidade')
let cXpeso = document.querySelector('#ipeso')
let cXaltura = document.querySelector('#ialtura')
let cXimc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnSubmit = document.querySelector('#btn-submit')
let btnReset = document.querySelector('#btn-reset')

btnSubmit.addEventListener("click", function(e) {
    // pegar os dados de cada input
    let nome = cXnome.value
    let idade = cXidade.value
    let peso = cXpeso.value
    let altura = cXaltura.value

    let imc = (peso/(altura*altura)).toFixed(1)

    cXimc.value = imc // dizendo que o valor da cXimc é o mesmo que IMC
    let sit = situacaopeso(imc) // situação do peso
    aviso.textContent = sit

    
    // Criar objeto pessoa
    let pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc,
        sit: sit,
    }
    console.log(pessoa)
    
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + " Anos"
    dados[3].textContent = pessoa.peso + " Kg"
    dados[4].textContent = pessoa.altura + " m"
    dados[5].textContent = pessoa.imc + " " + pessoa.sit
    
    e.preventDefault()
})

function situacaopeso(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if ( imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if ( imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if ( imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if ( imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}