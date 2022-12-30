
function verificar(){
var data = new Date()
var ano = data.getFullYear()
var Fano = document.getElementById("txtano")
var res = document.getElementById("res")
if(Fano.value.length == 0 || Fano.value > ano){
    window.alert("[ERRO] Verifique os dados e tente novamente")
}else {
    var fsex = document.getElementsByName("sexo")
    var idade = ano - Fano.value
    //    colocaando a teg <img> atravéz do JavaScript
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    // 
    if(fsex[0].checked){
        genero = "Homem"
        if(idade >=0 && idade <= 10){
            // criança
           img.setAttribute("src", "imagens/hnovo.png")   
        } else if(idade > 10 && idade <= 18) {
            // jovem
            img.setAttribute("src", "imagens/hjovem.png")   
        } else if(idade >18 && idade <= 40){
           // adulto
           img.setAttribute("src", "imagens/hjovem.png")   
        } else {
            // idoso
            img.setAttribute("src", "imagens/hvelho.png")   
        }
    } else if(fsex[1].checked){
        genero = "Mulher"
        if(idade >=0 && idade <= 10){
            // criança  
            img.setAttribute("src", "imagens/mnova.png")   
        } else if(idade > 10 && idade <= 18) {
            // jovem
            img.setAttribute("src", "imagens/mjovem.png")   
        } else if(idade >18 && idade <= 40){
           // adulto
           img.setAttribute("src", "imagens/mjovem.png")   
        } else {
            // Idoso
            img.setAttribute("src", "imagens/mvelha.png")   
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    // appendChild <- ADICIONAR ELEMENTO
    res.appendChild(img)
}



}