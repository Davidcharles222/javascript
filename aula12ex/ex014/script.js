function carregar(){
    var msg = window.document.getElementById('msg')//conectando div msg
    var img = window.document.getElementById('imagem')//conectando as imagens
    var data = new Date()//chamando função de tempo,horas....
    var hora = data.getHours()//pegando horas da função

    msg.innerHTML = `Agora são ${hora} horas.`//adicionando resultado na div msg
    
    if (hora >= 0 && hora < 12){//se hora for maior e igual 0 e hora for menor do que 12 faça
        // BOM DIA!
        img.src = 'imgs/manha.jpg'//apareceça esta foto na img
        document.body.style.background = '#e2cd9f'//pinte o fundo do body
    } else if(hora >= 12 && hora <=18){//se hora for maior e igual 12 e hora for menor e igual 18 faça
        // BOA TARDE!
        img.src = 'imgs/tarde.jpg'//apareça esta foto na img
        document.body.style.background = '#b9846f'//pinte o fundo do body
    } else{//se todos dados acima for falso faça
        // BOA NOITE!
        img.src = 'imgs/noite.jpg'//apareça esta foto na img
        document.body.style.background = '#515154'//pinte o fundo do body
    }
    
}