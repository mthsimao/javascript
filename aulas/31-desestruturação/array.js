// Desestruturação de array

// array

const fruits = [ 'banana', 'uva', 'pera', 'maçã', 'caqui']

// quero chamar a banana

// Como eu faria sem a desestruturação 
// const banana = fruits[0]


// Como eu faço com a desestruturação
const [ banana ] = fruits

// crio uma const, abro [] pq se trata de um array, coloco dentro do [] um nome,
// sempre vai retornar a 1a posição independe do nome
console.log(banana)

// Caso eu queira chamar mais de 1 item
// coloca uma , e o nome em q eu quiser, porém vai retonar a 2a posição

const [b, u] = fruits
console.log(b, u);

// Caso eu queria não mostrar a 1 posição
// adiciono uma virgula, deixando vazio, onde eu não quero mostrar

const [c, ,a, p] = fruits
console.log(c, a, p);

// resting operator
// ...resto - desde q tenha os ...
// posso colcoar qualquer nome
console.log( '\nResting operator')

const [bananaa, ...qualquerNome] = fruits
console.log(qualquerNome)

