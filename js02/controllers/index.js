/**
 * Questão A
 */



let meuBotao = document.getElementById('btn')
let h2 = document.getElementById('mostra')
let valor1 = document.getElementById('valor1').value
let valor2 = document.getElementById('valor2').value




meuBotao.addEventListener('click', () => {
   if (valor1 < valor2){
    h2.innerHTML = "Menor"
   }else if (valor1 > valor2){
        h2.innerHTML = "Maior"
   }else{
    h2.innerHTML = "Igual"
   }
})

