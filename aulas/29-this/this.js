// This

function aluno(nome, nota) {

    // this.nome == como se fosse uma variável da função aluno que recebe o valor do parâmetro nome

    this.nome = nome
    this.nota = nota

    this.dados_anonimo2=function() {
        
        setTimeout( function() { 
            console.log(this.nome)
            console.log(this.nota)
        }, 900)
    }

    this.dados_anonimo=function() {

        setTimeout( () => { 
            console.log(this.nome)
            console.log(this.nota)
        }, 900)
    }
}

const al1 = new aluno('Mathues', 80)

al1.dados_anonimo2()
/* Por que undefined?
    porque quando eu uso a funcion no setTimeout
    o setTimeout meio que sombreia o this
    e consequentemente o this, não consegue pegar os valores dos parâmetros.
    ------------------------------------------
    Mas quando eu uso arrow function, não tenho esse problema
*/


al1.dados_anonimo()
