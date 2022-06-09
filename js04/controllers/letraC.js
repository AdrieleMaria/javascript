
/**
 * Questão C
 */

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
 
