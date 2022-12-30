//VETOR OU ARRAY
let num = [4,8,7,5]
// ADICIONANDO UN NUMERO NA VARIAVEL COMPOSTA
 num.push(1)
 //IMPRIMINDO QUANTOS NUMEROS TEM NA VARIAVEL
 console.log(num.length)
 //COLOCAR OS ELEMENTOS NA FORMA CRESCENTE 
 console.log(num.sort())
 //IMPRIMIR TODOS OS VALORES SEM CONCHETES
 for (let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos}, tem o valor ${num[pos]}`)
 }
 //SIMPLFICANDO 
 //PARA (for) CADA POSIÇÃO (pos) DENTRO DE (in) NUM(num) VOU MOSTRAR (console.log()) O NUM POSIÇÃO (num[pos])
 for (let pos in num){
    console.log(num[pos])
 }
 //BUSCAR UM VALOR DENTRO DO ARRAY (VAI DIZER A CHAVE QUE O VALOR SE ENCONTRA)
 console.log(num.indexOf(7))