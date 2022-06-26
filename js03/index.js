


const meuBotao = document.getElementById('btn');

let h3 = document.getElementById('h3');


meuBotao.addEventListener('click', () => {

    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);

    let escolha = document.querySelector('#calc').value;
    
    let resultado;
    console.log(escolha);

    switch(escolha){
        case "soma":
            resultado = numero1 + numero2;
            console.log(resultado);
            h3.innerHTML = resultado;
            break;

        case "subt":
            resultado = numero1 - numero2;
            console.log(resultado);
            h3.innerHTML = resultado;
            break;

        case "mult":
            resultado = numero1 * numero2;
            console.log(resultado);
            h3.innerHTML = resultado;
            break;

        case "divi":
            resultado = numero1 / numero2;
            console.log(resultado);
            h3.innerHTML = resultado;
            break;

        default :
            console.log(resultado);
            console.log("Opção inválida");
            break;
    }
    
    
})
