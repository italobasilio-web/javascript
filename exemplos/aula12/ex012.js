var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora<12 && hora>=6){
    console.log('Olá, bom dia!')
} else if (hora>=0 && hora<6){
    console.log('Olá, boa madrugada!')
} else if (hora<18){
    console.log('Olá, boa tarde!')
} 
else {
    console.log('Olá, boa noite!')
}