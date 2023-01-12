let num = document.querySelector('input#txtn1')
let lista = document.querySelector("select#select")
let res = document.querySelector("div#res")
let valores = []

function inNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num = document.getElementById("txtn1")
    let lista = document.getElementById("select")
    let res = document.getElementById("res")

    if (inNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        // lista.innerHTML += `<option>O valor ${num.value} foi adicionado</option>`
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert("Valor invalido ou já encontrado na lista.")
    }
    num.value = ``
    //Fazer o cursor voltar ao local da gif=gitação
    num.focus()
}

function finalizar() {
        let res = document.getElementById("res")
        
        if(valores.length == 0){
            window.alert("Adicione valor antes de finalizar. ")
        }else{
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior){
                    maior < valores[pos]
                }
                else if(valores[pos] < menor){
                    menor = valores[pos]
                }
            }
            media = soma / valores.length
            //media = soma / tot

            res.innerHTML = ``
            res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados </p>`
            res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
            res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
            res.innerHTML += `<p> Somando todos os valores temos ${soma}</p>`
            res.innerHTML += `<p> A médoa dos valores é ${Math.round(media) }</p>`

        }

    }