let btnSidebar = document.querySelector('.toggle')

let sidebar = document.querySelector('.sidebar')
let container = document.querySelector('.container')

btnSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('close')
    container.classList.toggle('close')
})