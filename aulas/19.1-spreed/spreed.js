// Spreed operator

const jogador = { nome: 'burno', energia: 100, vidas:3}

const jogador2 = { nome: 'alberto', energia: 100, vidas:5, }

// Com o spreed operator, eu consigo fazer concatenação
// porém se tiver mesmas propriedades, ele vai pegar a do último

const juncao1 = {...jogador,...jogador2}
console.log(juncao1)

// mas se tiver propriedades incomuns, ele vai juntar elas

const jogador3 = { nome: 'lucas', energia: 100, vidas:3, velocidade: 80 }

const jogador4 = { nome: 'camarilo', energia: 100, vidas:5, resistencia: 90 }

const juncao2 = {...jogador3,...jogador4}
console.log(juncao2)

// usando spreed operator em functions

const soma = (v1,v2,v3) => {
    return v1+v2+v3
}

let valores = [2, 4, 5]
console.log(soma(...valores));
// se eu apenas colocasse no console.log(soma(valores))
// ele iria passar os 3 números dentro do v1, não conseguindo somar
//--------------------------------------------
// usando o spreed, ele consegue espalhar cada valor para cada parâmetro
// se eu tivesse mais valores, nada iria acontecer

const divs = document.getElementsByTagName('div') // retorna um HtmlCollection (aceita apenas elementos html)
const divs2 = [...document.getElementsByTagName('div')] // retorna um array de divs, consigo add, strings, valores, etc

divs2.forEach( Element => { console.log(Element) })

