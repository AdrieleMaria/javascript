
/**
 * Questão B
 */


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
