function gerarTabuada() {

    var checkInput = document.querySelector('input#inumber').value
    var numeroInput = document.querySelector('input#inumber')
    var res = document.querySelector('div#res')

    var number = Number(numeroInput.value)

    if (checkInput === null || checkInput === "" ) {
        window.alert('Por favor digite um número.')
    } else {
        
    }

    // valores da tabuada
    var x2 = number * 2
    var x3 = number * 3
    var x4 = number * 4
    var x5 = number * 5
    var x6 = number * 6
    var x7 = number * 7
    var x8 = number * 8
    var x9 = number * 9
    var x10 = number * 10

    // resultado
    res.innerHTML = `${number} x 1 = ${number} <br>`
    res.innerHTML += `${number} x 2 = ${x2} <br>`
    res.innerHTML += `${number} x 3 = ${x3} <br>`
    res.innerHTML += `${number} x 4 = ${x4} <br>`
    res.innerHTML += `${number} x 5 = ${x5} <br>`
    res.innerHTML += `${number} x 6 = ${x6} <br>`
    res.innerHTML += `${number} x 7 = ${x7} <br>`
    res.innerHTML += `${number} x 8 = ${x8} <br>`
    res.innerHTML += `${number} x 9 = ${x9} <br>`
    res.innerHTML += `${number} x 10 = ${x10} <br>`
}