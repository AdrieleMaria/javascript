/**
Crie uma função em JavaScript que permita a soma de dois números inteiros
positivos. Caso não seja possível a soma, emitir um erro (throw) do tipo 
[sum] Impossible to sum ${num1} + ${num2}` (‘template string’ no qual 
num1 é o primeiro parâmetro e num2 é o segundo parâmetro);
*/


/**
 * Questão A
 */

 let mostra = document.querySelector("#mostra");

 function soma(num1, num2){

    if( typeof(num1)!= "number" || typeof(num2)!= "number" ){
  
      throw TypeError ( `[sum] Impossible to sum ${num1} + ${num2}` )
  
    }
   
    try{    
     
      if(num2 == 0){ //caso base
        return parseInt(num1)
      }else{
        return parseInt(1 + soma(num1, num2-1))
      }
     
    }catch(err){
      errors = err.mesage
      console.log(errors)
    }
     
  
  }
  mostra.textContent = soma(3,6)



    
   





