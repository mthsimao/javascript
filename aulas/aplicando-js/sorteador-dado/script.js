let btnSortear = document.querySelector('#btnSortear')
let imgDado = document.querySelector('#img-dado')
let numSorteado = document.querySelector('#numSorteado')
let audioRolando = document.querySelector('#audioDado')

btnSortear.addEventListener("click", () => {

    //ADD ANIMATION
    imgDado.classList.add('animar')
    numSorteado.classList.add('aparecer')

    // PLAY THE SONG
    audioRolando.play()

    //HIDE BTN
    btnSortear.style.display = 'none'

    // setTimeout to execute the code after 1.75 seconds

    setTimeout(function() {

        //SAVE THE RANDOM NUMBER IN A VARIABLE
        let numeroSorteado = getRandomInt(1,6)
        //SHOW THIS NUMBER ON CONSOLE
        console.log(numeroSorteado)

        // IMAGE OF THE RANDOM NUMBER
        imgDado.setAttribute('src', 'img/dado/'+numeroSorteado+'.png')

        // SHOW BTN
        btnSortear.style.display = 'inline-block'

        // SHOW THE RANDOM NUMBER ON THE TOP
        numSorteado.textContent = numeroSorteado

        //REMOVE THE ANIMATION
        imgDado.classList.remove('animar')
        numSorteado.classList.remove('aparecer')

    }, 1750)
})

// FUNCTION RANDOM NUMBER
// INCLUDE MIN AND MAX NUMBER
function getRandomInt(min, max) {
    min = Math.ceil(min) 
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}