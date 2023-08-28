var num = [5, 7, 3, 8, 1, 4]
num.push(9)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeirop valor é ${num[0]}`)

let pos = num.indexOf(4)

if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos}`)
}
