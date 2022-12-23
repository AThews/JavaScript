let num = document.querySelector("input#inum");
let lista = document.querySelector("select#ilista");
let res = document.querySelector("div#res");
let valores = [];

function adicionar() { //adiciona o numero a lista.
  if (isNum(num.value) && !inLista(num.value, valores)) {
    
  } else {
    alert ('Valor invalido ou já encontrado na lista')
  }
}

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