let numerosecreto = 0

let min = 1
let max = 10

let inputNumero = document.querySelector('#inputNumero')
let musica = document.querySelector('#musica')
let btnChute = document.querySelector('#btnChutar')
let aviso = document.querySelector('.aviso')


// FUNCTIN GENERATING SECRET NUMBER
function gerarNumero() {
    numerosecreto = Math.floor(Math.random() * (max - min + 1)) + min ;
    //console.log(numerosecreto)
}

function blockAttempt() {
    btnChute.setAttribute('disabled', 'disabled')
    btnChute.style.backgroundColor = ' #8a8a8a '
    btnChute.style.cursor = ' not-allowed '
}

// FUNCTION ENABLE ATTEMPT BTN
function enableBtnChutar() {
    btnChute.removeAttribute('disabled')
    btnChute.style.backgroundColor = ' #222 '
    btnChute.style.cursor = ' pointer '
}   

// FUNCTION NUMBER VALIDATION

function validationNumber() {
    let chute = parseInt(inputNumero.value)

    if ( chute <= 0 || chute > 10) {
        aviso.textContent = 'Por favor digite um número válido. Entre 1 e 10'
        aviso.classList.remove('quase')
        aviso.classList.remove('acertou')
        aviso.classList.add('errou')

    } else if (chute === numerosecreto) {
        aviso.textContent = 'Parabéns, você acertou o número!'
        aviso.classList.remove('errou')
        aviso.classList.remove('quase')
        aviso.classList.add('acertou')
        gerarNumero()
    } else {
        aviso.textContent = 'Não teve sorte, tente outra vez!'
        aviso.classList.remove('errou')
        aviso.classList.remove('acertou')
        aviso.classList.add('quase')
    }
}

function jogar() {
    console.log('Jogando')
    validationNumber()
}

function limpar() {
    inputNumero.value = ''
    aviso.textContent = ''
    aviso.classList.remove('errou')
    aviso.classList.remove('acertou')
    aviso.classList.remove('quase')
    musica.pause()
}

// musica

function playMsc() {
    musica.play()
}

function ativarDesativarMsc(){
    if( musica.muted ){
        musica.muted = false;
    }else{
        musica.muted = true;
    }
}

function pauseMsc() {
    musica.pause()
    musica.currentTime = 0;
}