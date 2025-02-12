function calcular (){
    var n1 = window.document.querySelector('input#txtn')
    var tab = window.document.querySelector('select#seltab')
    if (n1.value.length == 0){
        window.alert('ERRO: Favor informar um numero.')
    } else { 
        var num = Number(n1.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c += 1){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}