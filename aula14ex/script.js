let clicar = document.querySelector("#button"); // botao
clicar.addEventListener("click", cliquei); //no clicar

function cliquei() {
  //ao clicar
  let come = document.getElementById("icome");
  let fim = document.querySelector("#ifim");
  let passo = document.querySelector("#ipasso");
  let resposta = document.getElementById("resposta");

  if (
    come.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("[ERRO] Faltam dados!");
  } else {
    resposta.innerHTML = "<strong>Contando:</strong> <br>";
    let i = Number(come.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0){
      alert('Passo invalido... considerando passo = 1')
      p = 1
    }
    if (i < f){
      while (i <= f) {
        resposta.innerHTML = `${i +=} ${p}`
      }
    } else {
      
    }











    // if (i < f) {
    //   for (let c = i; c <= f; c += p) {
    //     resposta.innerHTML += ` ${c} \u{1F449}`;
    //   }
    // } else {
    //   for (let c = i; c >= f; c -= p){
    //     resposta.innerHTML += `${c}\u{1F449}`;
    //   }
    // }
    resposta.innerHTML += `\u{1F3C1}`;
  }
}
