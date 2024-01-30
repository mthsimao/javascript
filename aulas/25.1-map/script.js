const elementos = document.getElementsByTagName('div')

const valores = Array.prototype.map.call(elementos, ({innerHTML}) => innerHTML)

console.log(valores) 


// let el = document.getElementsByTagName('div')

// el = [...el] // transformar HTML collection em algo iterável usando o spreed operator

// el.map( (elemento, i) => {
//     console.log(i, elemento.innerHTML)
// })


const dobrar = (el) => el*2

let num = ['1','2','3','4','5'].map(dobrar)

console.log(num)