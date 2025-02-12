var valores = [1,2,5,7,8,10,12,13,25]

console.log(valores)

for(var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //Percuso para exibição de vetores
}

for (var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //Comando for simplificado para vetores
}