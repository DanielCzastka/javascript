function carregar(){
var msg = document.getElementById("msg")
var imagem = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    imagem.src = "imagens/manha.png"
    document.body.style.background = "#e2cd9f"
}else if(hora >= 12 && hora < 18){
    imagem.src = "imagens/tarde.png"
    document.body.style.background = "#b9846f"

}else{
    imagem.src = "imagens/noite.png"
    document.body.style.background = "#625757"

}

}
