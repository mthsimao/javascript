function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var inputAno = document.getElementById('itxtano')
    var resultado = document.querySelector('div#resultado')

    if (inputAno.value == 0 || Number(inputAno.value) > ano ) {
        alert('[ERROR] Verifique os dados e tente novamente')

    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(inputAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10 ) {
                // criança
                img.setAttribute('src', 'img/bebe-homem.png')
            } else if (idade > 10 && idade <= 22) {
                //jovem
                img.setAttribute('src', 'img/jovem-homem.png')
            } else if (idade > 22 && idade < 55) {
                // adulto
                img.setAttribute('src', 'img/homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'img/homem-idoso.png')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade <=10) {
                //criança
                img.setAttribute('src', 'img/bebe-mulher.png')
            } else if (idade > 10 && idade <= 22) {
                //jovem
                img.setAttribute('src', 'img/jovem-mulher.png')
            } else if (idade > 22 && idade < 55) {
                // adulta
                img.setAttribute('src', 'img/mulher-adulta.png')
            } else {
                // idosa
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
        img.style.padding = '12px'
        img.style.width = '250px'
    }
}