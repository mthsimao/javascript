const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')

const resultadoP = document.querySelector('.resultado-calc')

const clear = document.querySelector('#CL')

const resultadoCalc = document.querySelector('.res')

const tcpy = document.querySelector('#tcpy')

// const text = document.querySelector('#teste')

let sinal = false
let decimal = false

clear.addEventListener('click', () => {
    sinal = false
    decimal = false
    resultadoP.innerHTML = '0'
})

teclasNum.map((e)=> {
    e.addEventListener('click', (evt) => {
        sinal = false

        if( evt.target.innerHTML == '.') {
            if(!decimal) {
                decimal = true
                resultadoP.innerHTML += evt.target.innerHTML
            }

        } else {
            if ( resultadoP.innerHTML == '0') {
                resultadoP.innerHTML = ''
            }
            resultadoP.innerHTML += evt.target.innerHTML
        }

        

    })
})

teclasOp.map((e)=> {
    e.addEventListener('click', (evt) => {

        if(!sinal) {
            sinal = true
            if ( resultadoP.innerHTML == '0') {
                resultadoP.innerHTML = '0'
            } else {
                resultadoP.innerHTML += evt.target.innerHTML
            }
        }

    })
})

resultadoCalc.addEventListener('click', (evt) => {
    sinal = false
    decimal = false

    const res = eval(resultadoP.innerHTML )

    resultadoP.innerHTML = res
})

// botao para copiar 

tcpy.addEventListener('click', (evt) => {
    navigator.clipboard.writeText(resultadoP.innerHTML)
   
    // text.select() // mobile
    // text.setSelectionRange(0,999999) // mobile
    // navigator.clipboard.writeText(text.value)
})
