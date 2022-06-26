/*
Utilizando as funções dos exercícios 1, 2 e 3, crie uma função exiba o valor inteiro da divisão de dois 
valores inteiros positivos, de forma que:

 a) Não se deve utilizar estrutura de looping (for, while, do ...);
 b) Não se deve utilizar Math ou funções de terceiros;
 c) Não se deve utilizar operações de soma, subtração e multiplicação (‘+’ ou ‘-‘ ou ‘*’), isto é, 
    se desejar somar ou subtrair ou multiplicar, utilizar as funções criadas nos exercícios 1, 2 e 3;
 d) Caso seja impossível realizar soma ou subtração (capturar o erro se existir), deve-se emitir um erro 
    (throw) do tipo `[divide] Impossible to divide ${num1} / ${num2}`, ou caso o denominador seja zero, 
    `[divide] Division by zero`.
 e) Dica: utilizar chamada de função recursiva.
*/

/**
 * Questão E
 */

 
 let mostra = document.querySelector("#mostra");


function divRecursiva(num1,num2){

    if( typeof(num1)!= "number" || typeof(num2)!= "number" ){
  
        throw TypeError ( `[divide] Impossible to divide ${num1} / ${num2}` );
    
    }
    
    try{    
        if(num1 ===0 || num2 ==0){
            return 0;
        }else if(num1 ===1){
            return num2;
        }else if(num2 ===1){
            return num1;
        }else{
            return  divRecursiva(num1-num2, num2) + 1;
        }
    }catch(err){
        errors = err.mesage;
        console.log(errors);
    }
    
}

console.log(divRecursiva(15,5));

mostra.textContent = divRecursiva(15,5);

