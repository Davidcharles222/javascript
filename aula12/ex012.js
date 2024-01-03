var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()
var hrs = `${hora}:${min}:${sec}`

console.log(`Agora são exatamente ${hrs}`)

if (hora < 12){
    console.log('Bom Dia!')
} else if(hora <= 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}
