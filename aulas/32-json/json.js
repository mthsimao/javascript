const pessoa = {
    nome: "Bruno",
    canal: 'Cfb cursos',
    curso: 'Javascript',
    aulas:{
        aula01: 'Intrudução',
        aula02: 'Variáveis',
        aula03: 'Condicional'
    }
}

// Transformar objeto literal em string JSON
// crio uma nova const, passo o JSON.stringigy()
// dentro dos parênteses, o objeto a ser transformado
// stringify converte o objeto em string JSON

const s_json = JSON.stringify(pessoa);
console.log(s_json)

// Transformar a string JSON em objeto literal novamente
// crio uma nova const, mas dessa vez, passando a propriedade PARSE
// dentro dos parênteses a string JSON a ser transformada
// parse converte string JSON em objeto

const o_json = JSON.parse(s_json);
console.log(o_json)
