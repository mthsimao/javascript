const Pessoa = {
    nome: 'Bruno',
    getNome:function() {
        return this.nome
    },
    setNome:function(string){
        this.nome = string
    }
}

// tenho uma variável que recebe o objeto Pessoa
let p3 = Pessoa

// Caso eu queria renomear o nome dessa Pessoa nessa outra váriavel
// Não consigo somente na variável, tb vai mudar o 'original'

p3.setNome('Lucas')

console.log(Pessoa.nome)
console.log(p3.nome)