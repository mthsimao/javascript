let nome = document.querySelector('#inome')
let altura = document.querySelector('#ialtura')
let peso = document.querySelector('#ipeso')

let btn_calcular = document.querySelector('button')
let res = document.querySelector('.resultado')

const imc = () => {

    let name = nome.value
    let height = altura.value
    let weight = peso.value

    if (name !== '' && height !== '' && weight !== '') {
        const calcImc = ( weight / (height * height )).toFixed(1);
        res.innerHTML = `Olá ${name} seu IMC é ${calcImc}`
    } else {
        res.innerHTML = 'Preencha todos os campos!'
    }
}


btn_calcular.addEventListener("click", () => {
    imc();

})