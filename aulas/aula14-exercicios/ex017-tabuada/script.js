function gerarTabuada() {

    let numeroInput = document.querySelector('input#inumber')
    let tab = document.querySelector('select#iselect')

    if (numeroInput.value.length == 0 ) {
        window.alert('Por favor digite um número.')
    } else {

        let number = Number(numeroInput.value)
        tab.innerHTML = ''

        for (var x = 1; x <= 10 ; x++) {
            let item = document.createElement('option')
            item.text = `${number} x ${x} = ${number*x}`
            item.value = `tab${x}`
            tab.appendChild(item)
        }
    }
}