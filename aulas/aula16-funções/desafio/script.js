let num = document.querySelector('input#inumero')
let tab = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function iNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (iNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado.')
    } 
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${total} número(s) cadastrados. </p> <br>`

        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p> <br>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p> <br>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p> <br>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p> <br>`

    }
}