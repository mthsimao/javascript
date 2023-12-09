let body = document.querySelector('body')

let btnTheme = document.querySelector('#theme')
let btnTheme2 = document.querySelector('#theme2')

btnTheme.addEventListener('click', () => {
    body.classList.toggle('dark')
})

btnTheme2.addEventListener('click', () => {
    body.classList.toggle('dark')
})