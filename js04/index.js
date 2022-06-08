/**
 * Questão A
 */
/*
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
*/

/**
 * Questão B
 */
/*

 let h3 = document.getElementById('h3');
 //let p = document.getElementById('p');
 
 let numero1 = parseInt(document.getElementById('num1').value);
 let numero2 = parseInt(document.getElementById('num2').value);
 
 let botaoB = document.getElementById('btn')
 let resultado;
 
 
 botaoB.addEventListener('click', () => {

    if(isNaN(numero1) || isNaN(numero2)){
        console.log("not a number!")
    }else{
        if(numero1 > numero2){
            console.log("erro");
        }else{
            resultado = Math.floor(Math.random() * (numero2 - numero1 + 1) + numero1);

            h3.innerHTML = resultado;
        }
        
    }   

 })
*/

/**
 * Questão C
 */
/*
 let h3 = document.getElementById('h3');
 let h = document.getElementById('h');
 //let p = document.getElementById('p');
 
 let numero1 = parseFloat(document.getElementById('num1').value); 
 let botaoC = document.getElementById('btn')
 let resultadoMenor;
 let resultadoMaior;
 
 
 botaoC.addEventListener('click', () => {

    console.log(typeof numero1)

    if(isNaN(numero1)){
        console.log("not a number!")
    }else{
        resultadoMenor = Math.floor(numero1);
        resultadoMaior = Math.ceil(numero1);         
    }   

    h3.innerHTML = resultadoMenor;
    h.innerHTML = resultadoMaior;

 })
 */

/**
 * Questão D
 */
/*

 let h3 = document.getElementById('h3');

 let botaoD = document.getElementById('btn')

 resultado = Math.floor(Math.random() * 1000 + 1);
 
 botaoD.addEventListener('click', () => {

    if(resultado > 0 && resultado < 87){
        h3.innerHTML = "mulher idosa";
        
    }else if(resultado > 86 && resultado < 518){
        h3.innerHTML = "mulher jovem";
        
    }else if(resultado > 517 && resultado < 600){
        h3.innerHTML = "homem idoso";
        
    }else if(resultado > 599 && resultado < 1001){
        h3.innerHTML = "homem jovem";
        
    }
    console.log(resultado);    

 })
*/