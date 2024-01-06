function verificar(){
    var nasc = document.getElementById('nasc')
    var nsc = Number(nasc.value)
    var res = document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - nsc
    var genero_masculino = document.getElementById('masculino')
    var genero_feminino = document.getElementById('feminino')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (nsc <= 0 || nsc > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        if (genero_masculino.checked){
            gênero = 'Homem'
            if (idade < 10){
                //bebe
                img.setAttribute('src', 'imgs/bebe-m.jpg')
            }else if (idade < 20){
                //jovem
                img.setAttribute('src', 'imgs/jovem-m.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imgs/adulto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imgs/idoso-m.jpg')
            }
        }else if (genero_feminino.checked){
            gênero = 'Mulher'
            if (idade < 10){
                //bebe
                img.setAttribute('src', 'imgs/bebe-f.jpg')
            }else if (idade < 20){
                //jovem
                img.setAttribute('src', 'imgs/jovem-f.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imgs/adulto-f.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imgs/idoso-f.jpg')
            }
        }

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
        img.style.borderRadius = '50%'
        img.style.marginTop = '10px'
    }
    
}