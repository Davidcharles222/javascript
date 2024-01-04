function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hr = new Date()
    var hora = hr.getHours()
    var hora = 11

    msg.innerHTML = `Agora são exatamente ${hora} horas`

    if (hora >= 6 && hora <12){
        img.src = 'imgs/manha.jpg'
        document.body.style.background = 'green'
    } else if(hora >=12 && hora < 18){
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = 'beige'
    } else {
        img.src = 'imgs/noite.jpg'
        document.body.style.background = 'brown'
    }
}