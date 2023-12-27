
/* Nullish Coalescing Operator

    let idade = null; 

    // 0, "", [], false, undefined, null ===> falsy ( valores não válidos )

    document.write('Sua idade é: ' + (idade ?? 'Não informado'))

//---------------------------------
*/


// OBJETOS

// Método in  

const user = {

    name: 'Diego',
    idade: 27,
    address: {
        rua: 'Rua valentina',
        numeroRua: 214,
    },
};

console.log( ('address' in user) )

// LEITURA DO MÉTODO in
// Existe 'address' dentro(in) de user ?

//---------------------------------------------

// Método object 

// object.keys = retornar um vetor com todos os nomes de propriedades dentro de tal object

console.log( ( Object.keys(user) ) )

// object.values = retornas todos os valores das propriedades dentro de tal object

console.log( ( Object.values(user) ) )

// JSON

console.log( JSON.stringify(user) )