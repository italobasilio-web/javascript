function carregar (){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('ola')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>=0 && hora<12){
        foto.src = 'fotomanha.png'
        saudacao.innerHTML = 'Bom dia!'
        document.body.style.background = '#9B5902'
    } else if (hora>=12 && hora<18){
        foto.src = 'fototarde.png'
        saudacao.innerHTML = 'Boa tarde!'
        document.body.style.background = '#B3C5ED'
    } else {
        foto.src = 'fotonoite.png'
        saudacao.innerHTML = 'Boa noite!'
        document.body.style.background = '#071F43'
    }
}