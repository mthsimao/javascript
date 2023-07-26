function carregar() {
    var msg = document.querySelector('div.msg')
    var msg2 = document.querySelector('div.msg2')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if ( hora >=5 && hora <= 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#F8D6A8'
        msg2.innerHTML = `Bom dia!`

    } else if (hora > 12 && hora <= 18){
        // boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#FCA884'
        msg2.innerHTML = `Boa tarde!`

    } else if (hora > 18){
        // boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#414B54'
        msg2.innerHTML = `Boa noite!`

    } else {
        //boa madrugada
        img.src = 'img/noite.png'
        document.body.style.background = '#414B54'
        msg2.innerHTML = `Boa madrugada!`
    }
}

