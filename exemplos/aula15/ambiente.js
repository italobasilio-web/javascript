var num = [5,8,9,2,3]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O valor na posição 0 do vetor é ${num[0]}`)
var pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
