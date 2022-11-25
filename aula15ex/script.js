let gerar = document.getElementById("gerar");
let tab = document.querySelector("#itabuada");
gerar.addEventListener("click", cliquei);
let n0 = document.getElementById("n0");

function cliquei() {
  let num = document.querySelector("#inumero");

  if (num.value.length == 0) {
    alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value);
    tab.innerHTML = ''
    
    let c = 1
    while (c <= 10){
        let item = document.createElement('option')
        item.text =  `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
  }
}

//pegar a resposta

//mutiplicar a reposta de 0 a 9
