let amigo = {nome: 'Daniel', sexo: 'M', peso: 70.00,engordar(p){
    console.log("Engordou")
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)