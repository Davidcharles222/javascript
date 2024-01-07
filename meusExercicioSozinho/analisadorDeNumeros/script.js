var num = document.getElementById('txtn')
var lista = document.getElementById('seltab')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if (n>=0 && n<=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumero(Number(num.value)) && !inLista(Number(num.value), valores)){
        valores.push(Number(num.value))

        var item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        lista.appendChild(item)

        num.value = ''
        num.focus()
        res.innerHTML = ''

    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (var pos in valores){
            soma += valores[pos]

            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
            media = soma / tot
        }

        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }
}

