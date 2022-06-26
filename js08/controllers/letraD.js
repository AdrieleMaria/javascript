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


 let area = document.getElementById("area").value;
 let mostra = document.getElementById("mostra");
function enviar(){    
    
    try{

        JSON.parse(area, (key, value) => {
            console.log(key); // mostra o nome da propriedade atual, o último é "".
            return value;     // retorna o valor da propriedade inalterada.
        });
    
        //let obj = (JSON.parse(area));
       // mostra.textContent = 'Parsable JSON string!';
       
        //console.log(obj);
    } catch (e) {
        console.log(e.message);
    } 
}