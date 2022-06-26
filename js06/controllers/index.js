/**
 * Crie uma página web que ‘arme uma bomba’ (imagem de uma bomba) que ‘exploda’ em 10 segundos, 
 * considerando:
    a) Utilize o setTimeout para ‘armar a bomba’ (bomba com pavil aceso);
    b) Caso o usuário clique na bomba, utilize o clearTimeout para desarmar 
    a bomba (bomba com pavil apagado);
    c) Caso a bomba não seja desarmada, ao terminar o tempo, a bomba deve 
    explodir e um som de explosão deve ser tocado.
 */



/**
 * Questão A
 */


let img = document.getElementById("bomba").src="./assets/image/acesa.png";
let audio;

let explode = setTimeout(()=>{
    audio = new Audio("../assets/audio/bomb-02.wav");
    audio.play();
    img = document.getElementById("bomba").src="./assets/image/explosao.png";
    console.log("explodiu");
},10000);

function desarma(){
    clearTimeout(explode);
    img = document.getElementById("bomba").src="./assets/image/apagada.png";  
}





