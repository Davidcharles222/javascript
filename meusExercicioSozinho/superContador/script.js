function contar(){
    var i = document.getElementById('txti')
    var f = document.getElementById('txtf')
    var p = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossível contar!`
    }else{
        res.innerHTML = `Contando: <br>`

        inicio = Number(i.value)
        fim = Number(f.value)
        passo = Number(p.value)

        if (passo <= 0){
            window.alert('Número de passo inválido - passo será 1')
            passo = 1
        }

        if (inicio < fim){
            //ordem crescente
            for (c = inicio; c <= fim; c += passo){
                res.innerHTML += ` ${c} \u{1F609}`
            }
        }else{
            //ordem decrescente
            for (c = inicio; c >= fim; c -= passo){
                res.innerHTML += ` ${c} \u{1F609}`
            }
        }
        res.innerHTML += `>>>> \u{1F47E}`

    }
}