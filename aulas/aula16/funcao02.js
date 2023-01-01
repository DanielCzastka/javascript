function soma (n1, n2){
    return n1 + n2
}
console.log(soma(2,5))


// SE UM DOS PARAMETROS NÃO FOR PASSADO SERA CONSIDERADO (0)
function soma2 (n1=0, n2=0){
    return n1 + n2
}
console.log(soma2(5))
