/**
 * Crie uma página web que possua um elemento HTML select que possa selecionar uma 
 * lista de carros esportivos, considerando:
   a) Identificar a mudança de carro selecionado e alterar a imagem associada;
   b) Exibir as informações referentes a este carro (dados do carro como nome, 
    fabricante, velocidade máxima, 0-100km e outras informações que julgar pertinente);
   c) A página web deve ser bem construída visualmente.
 */



/**
 * Questão A
 */


let img = document.getElementById("carros"); 
let marca = document.getElementById("marca");
let potencia = document.getElementById("potencia");
let velocidade = document.getElementById("velocidade");
let aceleracao = document.getElementById("aceleracao");
let motor = document.getElementById("motor");

addEventListener("change", ()=>{
    
    let escolha = document.getElementById("escolha").value;
    switch(escolha){
        case "ff":
            img.src="./assets/images/ferrari-f8.jpg";
            marca.innerHTML = "Marca: Ferrari";
            potencia.innerHTML = "Potência: 720 HP";
            velocidade.innerHTML = "Velocidade máxima: 340 km/h";
            aceleracao.innerHTML = "Aceleração de 0 a 100 km/h: 2,9 segundos";
            motor.innerHTML = "Motor: 3,9 | V8";
            break;
        case "p6":
            img.src="./assets/images/porsche-911.jpg";
            marca.innerHTML = "Marca: Porsche";
            potencia.innerHTML = "Potência: 385 - 650 HP";
            velocidade.innerHTML = "Velocidade máxima: 291 - 330 km/h";
            aceleracao.innerHTML = "Aceleração de 0 a 100 km/h: 2,7 - 4,4 segundos";
            motor.innerHTML = "Motor: 4,0 | 6 cilindros";
            break;
        case "la":
            img.src="./assets/images/lamborghini-aventador.png";
            marca.innerHTML = "Marca: Lamborghini ";
            potencia.innerHTML = "Potência: 770 HP";
            velocidade.innerHTML = "Velocidade máxima: 350 - 351 km/h";
            aceleracao.innerHTML = "Aceleração de 0 a 100 km/h: 2,8 - 2,9 segundos";
            motor.innerHTML = "Motor: 6,5 | V12";
            break;
        default:
            console.log("erro");
            break;

    }

})





