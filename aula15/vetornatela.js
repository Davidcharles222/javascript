DIVERSAS MANEIRAS DE MOSTRAR NOSSO VETOR

let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

---------------------------------------

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

---------------------------------------

for (let pos = 0; pos < valores.lingth; pos++){//inicializando pos com 0, teste lógico: enquanto pos for menor que a quantidade de elemento do vetor valores; encremento: pos recebe 1
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)//irá mostrar as posições com os valores de cada posição
}


SIMPLIFICANDO ABAIXO
---------------------------------------

for (let pos in valores){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}