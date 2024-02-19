// Sempre que eu precisar adicionar uma nova propriedade
// ou método a um objeto, eu utilizo o prototype

class Nave {
    constructor(energia) {
        this.energia = energia
        this.disparos = 100
    }
}

let n1 = new Nave(100)

// adicionar uma nova propriedade a classe de objeto
Nave.prototype.vidas = 3

// adicionar uma nova função a classe de objeto com o prototype
Nave.prototype.disparar = function() { if (this.disparos > 0) { this.disparos--} }

console.log(n1)
console.log(`Munição total: ${n1.disparos}`)

// loop de repetição para executar a função de disparar
let max = 15 + 1
for (let i = 1; i < max ; i++) { n1.disparar() }

console.log(`Disparei`)
console.log(`Munição total: ${n1.disparos}`)