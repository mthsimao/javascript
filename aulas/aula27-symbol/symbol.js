// symbol

const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for('valorChave') // for: chave do symvbol ( registrador )
const s4 = Symbol.for('stringOp') 

// console.log(s1==s2);  -- false ( não são iguais)

// console.log(typeof(s1));  -- tipo = symbol

console.log(Symbol.keyFor(s2));  // string | undefined

console.log(Symbol.keyFor(s3)); 
