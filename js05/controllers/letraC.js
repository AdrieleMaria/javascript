/*
Utilize a estrutura ‘switch’ e crie uma página web que contenha um formulário que possibilite:
    -O usuário selecionar um menu de opções (‘HTML select’) de produtos previamente cadastrados (mínimo 5 produtos);
    -Clicar em um botão ‘exibir’ que exibe a imagem do produto selecionado.
*/

/**
 * Questão C
 */


 
 let botaoC = document.getElementById('btn'); 
 
 botaoC.addEventListener('click', () => {
    let h3 = document.getElementById('h3'); 
    let produtos = document.querySelector("#products").value;

    let resultado = document.getElementById("flor");
    console.log(produtos);

    switch(produtos){
        case "geranio":
            console.log(resultado);
            resultado.src="../assets/image/geranios.jpg";
            break;

        case "girassol":
            console.log(resultado);
            resultado.src="../assets/image/girassois.jpg";
            break;

        case "lirio":
            console.log(resultado);
            resultado.src="../assets/image/lirios.jpg";
            break;

        case "margarida":
            console.log(resultado);
            resultado.src="../assets/image/margaridas.jpg";
            break;

        case "orquidea":
            console.log(resultado);
            resultado.src="../assets/image/orquideas.jpg";
            break;

        case "rosa":
            console.log(resultado);
            resultado.src="../assets/image/rosas.jpg";
            break;

        case "tulipa":
            console.log(resultado);
            resultado.src="../assets/image/tulipas.jpg";
            break;

        default :
            console.log(resultado);
            console.log("Opção inválida");
            break;
    }


 })
 
