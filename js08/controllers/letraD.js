/*
Crie uma página web que possua um formulário com 2 campos, um do tipo textarea e um botão, de forma que: 

 a) A área de texto deve permitir ao usuário inserir um texto que posteriormente será convertido em um objeto;
 b) Ao clicar no botão deverá:
    1- Exibir um erro caso não seja possível converter o texto em um objeto JavaScript (JSON.parse), capturando o 
       erro por meio da estrutura ‘try...catch’;
    2- Caso seja possível a conversão:
        * Exibir uma mensagem ‘Parsable JSON string!’;
        * Mostrar no console o objeto.
*/


/**
 * Questão D
 */




document.getElementById("btn").addEventListener("click", (event)=>{    
    event.preventDefault();

    let mostra = document.getElementById("mostra");
    let area = document.getElementById("area").value;

    if(!isNaN(area)){
        throw "[Field] 'o texto' não é string"
    }  
    try{       
        let obj = {};

        obj = JSON.parse(area);
              
        mostra.textContent = `Parsable JSON string!`;
       
        console.log(obj);
       
        //console.log(obj);
    } catch (e) {
        console.log(e.message);
    } 
})

/**
 * 
 * var texto = '{"atributo1": "valor 1", "atributo2": 23}';

    var objeto = JSON.parse(texto);

    console.log(objeto);
 */