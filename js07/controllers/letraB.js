/**
 * Crie uma página web que contenha um formulário que contenha um campo 
 * do tipo CEP (input type text), considerando:
    a) Capturar o evento de input para não permitir ao usuário a inserção 
    de um caractere que não seja numérico;
    b) Ao digitar o CEP, capturar o evento de keyup para poder preencher o 
    campo até o limite de tamanho de um CEP não permitindo mais números do
    que o permitido e adicionando, se necessário o ‘hífen’ natural de um CEP, 
    isto é, a medida que o usuário digita um número, o campo de CEP deve conter 
    o valor do CEP (incluindo o hífen).
    c) Se o usuário apertar a tecla ‘backspace’ (keydown) ele deve apagar o último número inserido.
 */


/**
 * Questão B
 */

let valor;

document.querySelector("input").addEventListener("keyup", (e)=>{    

    if(e.target.value.length <=9 && ((e.key >=0 && e.key<=9)|| e.key == "Backspace")){        
        
        if (e.target.value.length == 5) {
            e.target.value += "-";
        }        
        
        valor = e.target.value;
    }
    document.querySelector("input").value = valor;

})