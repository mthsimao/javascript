let titulo = document.querySelector('h1')

titulo.textContent = 'Class 09 - Manipulaing css'

//titulo.innerHTML = 'Class Manipulating css'
// innerHTML e textContent fazem a mesma função

let foto = document.querySelector('img#foto')
foto.setAttribute('src', 'img/foto2.jpg')

// 'Criar' a imagem usando JS 

let box = document.querySelector('.box')

let image = new Image(256, 256) // 256 representam a Width e Height
image.src = 'img/foto1.jpg'

box.appendChild(image)

// Manipulando o CSS

// Valor setado para a propriedade sempre tem que vir entre aspas "" ou '

titulo.style.color = 'Red'

// Se a propriedade css for uma com nome composto, por exemplo background-color
// Deixa de existir o " - " e a próxima letra se junta maíuscula =  backgroundColor

titulo.style.backgroundColor = '#12fe82'
titulo.style.padding = "12px"

// Mais de 1 atributo ou propriedade

let allBox = document.querySelectorAll('.box')

allBox[1].setAttribute('class' , 'azul')

// Para remover o atributo classe = .removeAttribute
allBox[1].removeAttribute('class')


/////////// MODOS /////////////

let tela = document.querySelector('body')

let btndark = document.querySelector('#btndark')
let btnlight = document.querySelector('#btnlight')

btndark.addEventListener("click", modoDark)
btnlight.addEventListener("click", modoLight)

function modoDark() {
    tela.classList.add('dark')
    tela.classList.remove('light')
    console.log('dark')
}

function modoLight() {
    tela.classList.add('light')
    tela.classList.remove('dark')
    console.log('light')
}