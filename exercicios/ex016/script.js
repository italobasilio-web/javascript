function contar(){
    var inc = window.document.querySelector('input#inicio')
    var final = window.document.querySelector('input#fim')
    var pass = window.document.querySelector('input#passo')
    var res = window.document.querySelector('div#res')

    if(inc.value.length == 0 || final.value.length == 0 || pass.value.length == 0){
        res.innerHTML = 'Impossivel contar.'
    } else {  
        res.innerHTML = 'Contando: <br>'
        var i = Number(inc.value)
        var f = Number(final.value)
        var p = Number(pass.value)
        if (p <= 0){
            res.innerHTML = 'Passo Invalido.'
        } else if (i < f){
                while (i <= f){
                    res.innerHTML += `${i} \u{1f449}`
                    i += p    
                }
            } else {
                while (i >= f){
                    res.innerHTML += `${i} \u{1f449}`
                    i -= p
                }
            }
    }
}