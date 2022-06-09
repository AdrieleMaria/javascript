/**
 * Questão A
 */

let h3 = document.getElementById('h3');
let p = document.getElementById('p');

let numero1 = parseFloat(document.getElementById('num1').value);
let numero2 = parseFloat(document.getElementById('num2').value);

let meuBotao = document.getElementById('btn')
let resultado;


meuBotao.addEventListener('click', () => {

    if(isNaN(numero1) || isNaN(numero2)){
        console.log("not a number!")
    }else{
        resultado = numero2/(numero1*numero1);
    }
   
    if(resultado < 18.5){
        p.textContent = "Abaixo do peso";
    }else if (resultado > 18.5 && resultado < 24.9){
        p.textContent = "Peso normal";
    }else if(resultado > 24.9 && resultado < 30){
        p.textContent = "acima do peso";
    }else{
        p.textContent = "Você está obeso";
    }

   h3.innerHTML = resultado;
})


