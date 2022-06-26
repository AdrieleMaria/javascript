/**
 * Substitua o setTimeout do exercício anterior, aumente o tempo para 60 segundos e
 * adicione um setInterval que mostra os segundos decrementando de 1 em 1 segundo 
 * até a explosão caso não seja desarmada, considerando:
 *  a) A cada ‘tick’ de tempo decrescente, adicione um som de ‘tick’ curto para 
 * demonstrar que o tempo está acabando;
 *  b) Se o usuário clicar na bomba, utilizar o clearInterval para desarmar a bomba;
 *  c) Se o usuário não clicar na bomba, a bomba deve explodir (som de explosão) e a contagem deve parar.
 */


/**
 * Questão B
 */


 let img = document.getElementById("bomba").src="./assets/image/acesa.png";
 let audioBomba = new Audio("../assets/audio/bomb-02.wav");
 let audioTick = document.getElementById("tick");
 let h3 = document.getElementById("contador");

 contador = 59;



 let tempo = setInterval(()=>{
    contador -= 1;

    audioTick.play();
    h3.textContent = contador;

    if (contador<=5){
        h3.style.color = '#f00';
    }    
 }, 1000);

 
 let explode = setTimeout(()=>{
     audioBomba.play();
     clearInterval(tempo);
     img = document.getElementById("bomba").src="./assets/image/explosao.png";
     console.log("explodiu");
 },60000);
 
 function desarma(){
     clearTimeout(explode);
     clearInterval(tempo);
     img = document.getElementById("bomba").src="./assets/image/apagada.png";  
 }
