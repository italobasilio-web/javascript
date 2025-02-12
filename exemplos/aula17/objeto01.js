var amigo = {nome:'José',
    sexo: 'M',
    peso: 85,
    engordar (p=0){
        this.peso += p
    }
}
amigo.engordar(12)
console.log(`${amigo.nome}, pesa ${amigo.peso}KG`)