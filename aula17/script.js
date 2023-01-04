let num = document.querySelector("input#inum");
let lista = document.querySelector("select#lista");
let res = document.querySelector("div#resultado");
let valores = [];

function isNum(n) { //Identifica se é um numero
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //identifica se está na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() { //adiciona o numero a lista.
  if (isNum(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML=''
  } else {
    alert ('Valor invalido ou já encontrado na lista!')
  }
  num.value = ''
  num.focus()
}

function finalizar() {//mostra as respostas após a lista.
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML +=`<br><p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<br><p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<br><p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<br><p>Somando todos os valores,é igual a ${soma}.</p>`
        res.innerHTML += `<br><p>A média é de ${media}.</p>`
    }
}