/**
Utilizando a função do exercício 1, crie uma função em JavaScript que 
permita a subtração de dois números inteiros positivos, considerando:

 a) O primeiro número é maior ou igual ao segundo número;
 b) Não se deve utilizar estrutura de looping (for, while, do ...);
 c) Não se deve utilizar Math ou funções de terceiros;
 d) Não se deve utilizar operações de soma e subtração (‘+’ ou ‘-‘), 
 isto é, se desejar somar, utilizar a função de soma criada no exercício 1;
 e) Caso seja impossível realizar subtração (capturar o erro se existir), 
 deve-se emitir um erro (throw) do tipo `[subtract] Impossible to subtract ${num1} - ${num2}`;
 f) Dica: utilizar chamada de função recursiva.
*/


/**
 * Questão B
 */

 let mostra = document.querySelector("#mostra");

 function sub(num1, num2){

    if( typeof(num1)!= "number" || typeof(num2)!= "number" ){
  
      throw TypeError( `[subtract] Impossible to subtract ${num1} - ${num2}`);
  
    }
   
    try{    
     
      if(num2 == 0){ //caso base
        return num1;
      }else{
        return sub(num1, num2-1) -1;
      }
     
    }catch(err){
      errors = err.mesage;
      console.log(errors);
    }    
  
  }

  console.log(sub(6,5));
  mostra.textContent = sub(6,5);