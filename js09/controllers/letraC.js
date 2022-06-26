/*
Utilizando as funções do exercício 1 e 2, crie uma função que multiplique dois valores inteiros positivos, 
de forma que:

 a) Não se deve utilizar estrutura de looping (for, while, do ...);
 b) Não se deve utilizar Math ou funções de terceiros;
 c) Não se deve utilizar operações de soma e subtração (‘+’ ou ‘-‘), isto é, se desejar somar ou subtrair, 
 utilizar as funções criadas nos exercícios 1 e 2;
 d) Caso seja impossível realizar soma ou subtração (capturar o erro se existir), deve-se emitir um erro 
 (throw) do tipo `[multiply] Impossible to multiply ${num1} * ${num2}`
 e) Dica: utilizar chamada de função recursiva.
*/

/**
 * Questão C
 */

 
 let mostra = document.querySelector("#mostra");


function multRecursiva(num1,num2){

    if( typeof(num1)!= "number" || typeof(num2)!= "number" ){
  
        throw TypeError ( `[multiply] Impossible to multiply ${num1} * ${num2}` );
    
    }
    
    try{    
        if(num1 ===0 || num2 ==0){
            return 0;
        }else if(num1 ===1){
            return num2;
        }else if(num2 ===1){
            return num1;
        }else{
            return num1 + multRecursiva(num1, num2-1);
        }
    }catch(err){
        errors = err.mesage;
        console.log(errors);
    }
    
}

console.log(multRecursiva(3,4));

mostra.textContent = multRecursiva(3,4);