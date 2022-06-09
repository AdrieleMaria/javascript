
/**
 * Questão D
 */


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
