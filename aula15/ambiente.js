let num = [5, 8, 2, 9, 3]

num.push(1)//adicione o númro 1 no vetor
num.sort()//alinhe o vetor em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)//mostra quantos elementos tem meu vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)//verificar primeiro valor do índice 0

--------------------------------------------

let pos = num.indexOf(8)//dentro do vetor num procure o valor 8 e adicione na let POS
console.log(`O valor 8 esta na posição ${pos}`)//mostre valor de pos

--------------------------------------------

let pos = num.indexOf(4)//quando não encontra o valor no vetor ele retorna -1
if (pos == -1){
    console.log(`O valor não foi entrontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}