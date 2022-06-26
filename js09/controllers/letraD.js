/*
Utilizando as funções do exercício 1, 2 e 3, crie uma função que exponencie dois valores inteiros positivos, 
de forma que:

 a) Não se deve utilizar estrutura de looping (for, while, do ...);
 b) Não se deve utilizar Math ou funções de terceiros;
 c) Não se deve utilizar operações de soma, subtração e multiplicação (‘+’ ou ‘-‘ ou ‘*’), isto é, 
 se desejar somar ou subtrair ou multiplicar, utilizar as funções criadas nos exercícios 1, 2 e 3; 
 d) Caso seja impossível realizar soma ou subtração (capturar o erro se existir), deve-se emitir um erro 
 (throw) do tipo `[multiply] Impossible to multiply ${num1} * ${num2}`
 e) Dica: utilizar chamada de função recursiva.
*/

/**
 * Questão D
 */

 let mostra = document.querySelector("#mostra");


function calcPotencia(num1,num2){

    if( typeof(num1)!= "number" || typeof(num2)!= "number" ){
  
        throw TypeError ( `[multiply] Impossible to multiply ${num1} * ${num2}` );
    
    }
    
    try{    
        if(num2 === 1){
            return num1;
        }else{
            return num1 * calcPotencia(num1, num2-1) ;
        }
    }catch(err){
        errors = err.mesage;
        console.log(errors);
    }
    
}

console.log(calcPotencia(4,2));

mostra.textContent = calcPotencia(4,2);

