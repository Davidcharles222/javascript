function tabuada(){
    let num = document.getElementById('txtn')//let mesma funcionalidade do var 
    let tab = document.getElementById('seltab')//let mesma funcionalidade do var 

    if (num.value.length == 0){ //se comprimento da string num for igual a 0 ou seja vazio
        window.alert('Por favor, digite um número!')//mostre a mensagem
    }else {//caso contrario 
        let n = Number(num.value)//n recebe valor de number
        let c = 1//iniciando let c igual a 1

        tab.innerHTML = ''//sempre quando sair do loop limpar os dados se não um aparece debaixo do outro
        while (c <= 10){//enquando c menor ou igual a 10
            let item = document.createElement('option')// crie elemento option e incremente na let item
            item.text = `${n} x ${c} = ${n*c}`// no texto do item option apareca n x c = multiplicação
            item.value = `tab${c}`//não tem relevância no script, somente para php sinalizar item1, 2 etc
            tab.appendChild(item)//mostre o item filho 
            c++
        }
    }
}