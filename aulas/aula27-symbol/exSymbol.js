// exercício com symbol

class Jogador{
    constructor(nome) {
        this.nome = nome
        this.id = Symbol();
    }
}

let jogadores = [new Jogador("jogador 1"),new Jogador("jogador 2"),new Jogador("jogador 3"),new Jogador("jogador 4"), new Jogador("jogador 1"), new Jogador("jogador 3") ]


//remover algo do array pelo symbol 

let s1 = jogadores[1].id

// filtrou todos que são diferentes do id do s1, no caso, o jogador da posição 2 do array
/*

jogadores = jogadores.filter( (j)=> {
    return j.id!=s1
})

*/

let symbolos = []

// filter apenas os nomes == "jogador 1"

let s_jogadores = jogadores.filter((j) => {
    return j.nome=="jogador 1"
})

// depois, aqui eu obtive somente os id dos jogadores

symbolos = s_jogadores.map((j)=> {
    return j.id
})

console.log(jogadores); // todos os jogadores 

console.log(s_jogadores); // jogadores que tem nome "jogador 1"

console.log(symbolos); // simbolos dos jogadores que tem nome "jogador 1"