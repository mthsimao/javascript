const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')

const resultadoP = document.querySelector('.resultado-calc')

const clear = document.querySelector('#CL')

let sinal = false
let decimal = false

clear.addEventListener('click', () => {
    resultadoP.innerHTML = '0'
    sinal = true
    decimal = false
})

teclasNum.map((e)=> {
    e.addEventListener('click', (evt) => {
        sinal = false
        if ( resultadoP.innerHTML == '0') {
            resultadoP.innerHTML = ''
        } 
        resultadoP.innerHTML += evt.target.innerHTML

        if( evt.target.innerHTML == ',' ) {
            if (!decimal) {
                decimal = true
                resultadoP.innerHTML += evt.target.innerHTML
            }
        } else {
            resultadoP.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.map((e)=> {
    e.addEventListener('click', (evt) => {

        if(!sinal) {
            sinal = true
            if ( resultadoP.innerHTML == '0') {
                resultadoP.innerHTML = ''
            } else {
                resultadoP.innerHTML += evt.target.innerHTML
            }
        }

    })
})