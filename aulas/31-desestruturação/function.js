// functions

// Desestruturação de função com objeto

// desestruturação na função dentro do parâmetro
// dentro do parametro tem q ter a chave dentro do objeto

function liquidificador( { pera } ) {
    console.log(pera)
}

// nao adianta eu passar uva na desestruturação se não existir a propriedade uva no objeto

const fruta = {
    banana: "banana",
    pera: "pera"
}
// tenho que passar isso para que a desestruturação funcione
liquidificador(fruta)


// Desestruturação na função com objeto

const functionName = ( {name, ...rest} ) => { 
    console.log(rest) 
}

functionName({name: 'Pedro', age: 24, address: 'rua sao leopoldo'})



// Desestruturação de função com array

// desestruturo dentro do parametro

const mixDeFruta = ( [ fruta1 ] ) => {
    console.log(fruta1) 
}

mixDeFruta(["banana", "pera", "uva"])

// tambem posso usar o ...rest na function

const mixdefrutas = ([f1, ...rest]) => {
    console.log(rest)
}

mixdefrutas(['uva', 'pera', 'caqui'])