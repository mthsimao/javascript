function contar() {
    var inicio = document.querySelector('input#iinicio')

    var fim = document.querySelector('input#ifim')

    var passo = document.querySelector('input#ipasso')

    var inicio1 = Number(inicio.value)
    var fim1 = Number(fim.value)
    var passo1 = Number(passo.value)

    var res = document.querySelector('div#res')

    if (inicio <= 0) {
        res.innerHTML = `Impossível contar.`
    }
}