/**
 * Questão A
 */

let h3 = document.getElementById('h3');


let meuBotao = document.getElementById('btn');



meuBotao.addEventListener('click', () => {
    
   let numero1 = parseInt(document.getElementById('num1').value);

   switch(numero1){
        case 0:
            h3.innerHTML = "zero";
            break;
        case 1:
            h3.innerHTML = "Um";
            break;
        case 2:
            h3.innerHTML = "Dois";
            break;
        case 3:
            h3.innerHTML = "Três";
            break;
        case 4:
            h3.innerHTML = "Quatro";
            break;
        case 5:
            h3.innerHTML = "Cinco";
            break;
        case 6:
            h3.innerHTML = "Seis";
            break;
        case 7:
            h3.innerHTML = "Sete";
            break;
        case 8:
            h3.innerHTML = "Oito";
            break;
        case 9:
            h3.innerHTML = "Nove";
            break;
        case 10:
            h3.innerHTML = "Dez";
            break;
        default:
            h3.innerHTML = "digite um valor válido";
            break;
   }
})


