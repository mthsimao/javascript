let titulo = document.querySelector('h1')

titulo.textContent = 'Class 09 - Manipulaing css'
//titulo.innerHTML = 'Class 09 - Manipulating css'
// innerHTML e textContent fazem a mesma função

let foto = document.querySelector('img#foto')
foto.setAttribute('src', 'img/foto2.jpg')

let box = document.querySelector('.box')

let image = new Image(256, 256) // Width / Height
image.src = 'img/foto1.jpg'

box.appendChild(image)