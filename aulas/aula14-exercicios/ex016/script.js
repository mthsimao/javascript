function contar() {

    let inicio = document.querySelector('input#iinicio')
    let fim = document.querySelector('input#ifim')
    let passo = document.querySelector('input#ipasso')

    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
        //alert('[ERROR] Impossível contar!')

    } else {
        res.innerHTML = 'Contando: <br>'
        // transformando strings para números
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if ( p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if ( i < f ) {
            // contagem crescente
            for(let contador = i; contador <= f; contador += p) {
                res.innerHTML += `${contador} \u{1F449} `
            }
        } else {
            // contagem decrescente
            for(let contador = i; contador >= f; contador -= p) {
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}