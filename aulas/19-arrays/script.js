// Criar array

let produtos = ['Arroz', "Feijão", `Leite`]

// Adicionar no final - push() 
produtos.push('Açúcar', 'Trigo')
console.log(produtos)

// Remover o último elemento - pop()
produtos.pop()
console.log(produtos)

// Adicionar elementos no início - unshift()
produtos.unshift('Uva', 'Maçã')
console.log(produtos)

// Remover elemento do inicio - shift()
produtos.shift()
console.log(produtos)

produtos.splice(1,3)
console.log(produtos)

// Spreed Operator 

// Serve para copiar arrays inteiros
let produtos2 = ['Pipoca', 'Suco', ...produtos, 'ovo', 'pera']

console.log(produtos2)