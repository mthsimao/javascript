// DESESTRUTURAÇÃO DO JAVASCRIPT


/*

    Tirar um valor primitivo ou uma estrutura de dados
    de dentro de outra estrutura


    * Object
        - Renomenado proriedades
        - Colocando em variáves existentes


*/

//    Renomando propriedades

    const person = {
        name: 'Elton',
        age: 25
    }

    const { age: idade } = person

    console.log(idade)


/*
    Colocando em variáveis existentes

    Após declarar o objeto pessoa, é necessário colocar o ponto e vírgula
    para que funcione colocar o valor na variável já existente

*/

    let AnoDeNascimento;

    const pessoa = {
        name: 'Gabriel',
        nascimento: 1998
    };

    ({nascimento: AnoDeNascimento} = pessoa)

    console.log(AnoDeNascimento)


//----ARRAY

/*----No array, meio que não importa o nome, e sim a posição
    porem não posso colocar números, então pode ser letras iniciais
    ou outra coisa.
*/

    const fruits = ['banana', 'pera', 'uva']

    const [b, p] = fruits

    console.log(b, p)

/*
    
    O ...rest (resting operator) significa resto, ou seja, como no exemplo
    abaixo, to puxando o (c) q é o caqui e o ...resto ( oque importa é o ...)
    (pode ser qualquer nome)


*/

    const fruitas = ['caqui', 'pera', 'uva']

    const [c, ...rest] = fruitas

    console.log(rest)

/*
    Se eu tiver [ , b, p], como o começo é vazio, ele vai reposicionar os elementos 
    e não vai aparecer o 1 elemento

    const fruits = ['banana', 'pera', 'uva']

    const [ , b, p] = fruits

    console.log(b,p)

*/


/*
    Function

    Desestruturação dentro da função

    O valor dentro da desestruturação tem que existir no objeto (como propriedade) que 
    estou passando na funçãom, caso não tenha, o valor será undefined

*/

function liquidificador( {uva} ) {
    console.log(uva)
}

const frutas = {
    banana: 'Banana',
    pera: 'Pera',
    uva: 'Uva'
}

liquidificador(frutas)


//  Using resting operator inside of function


function liquidificador2( [f1, ...rest] ) {
    console.log(rest)
}

liquidificador2(["banana", "pera", 'uva', "maçã"])





