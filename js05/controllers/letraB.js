
/**
 * Questão B
 */
let botaoB = document.getElementById("btn");

let dt = document.getElementById('dt').value;

//mostra na tag p do html

//inicio
let diaM = document.getElementById("dia");

let mesM = document.getElementById("mes");

let anoM = document.getElementById("ano");

let diaS = document.getElementById("diaS");

let mesA = document.getElementById("mesA");

let tempoM = document.getElementById("tempo");
//fim

let data = new Date(dt);

data.toLocaleString();

let dia = data.getUTCDate();

let mes = data.getUTCMonth()+1;

let ano = data.getUTCFullYear();

let diaSemana = data.getDay();

let mesAno = data.getMonth()+1;

let tempo = data.getTime();

let resultadoDia;

let resultadoMes;

switch(diaSemana){
    
    case 0:
        resultadoDia = "segunda";
        break;
    case 1:
        resultadoDia = "terça";
        break;
    case 2:
        resultadoDia = "quarta";
        break;
    case 3:
        resultadoDia = "quinta";
        break;
    case 4:
        resultadoDia = "sexta";
        break;
    case 5:
        resultadoDia = "sábado";
        break;
    case 6:
        resultadoDia = "domingo";
        break;
    default:
        console.log("dia inválido");
        break;
}



switch(mesAno){
    case 1:
        resultadoMes = "Janeiro";
        break;
    case 2:
        resultadoMes = "Fevereiro";
        break;
    case 3:
        resultadoMes = "Março";
        break;
    case 4:
        resultadoMes = "Abril";
        break;
    case 5:
        resultadoMes = "Maio";
        break;
    case 6:
        resultadoMes = "Junho";
        break;
    case 7:
        resultadoMes = "Julho";
        break;
    case 8:
        resultadoMes = "Agosto";
        break;
    case 9:
        resultadoMes = "Setembro";
        break;
    case 10:
        resultadoMes = "Outubro";
        break;
    case 11:
        resultadoMes = "Novembro";
        break;
    case 12:
        resultadoMes = "Dezembro";
            break;
    default:
        console.log("Mes inválido");
        break;
}



botaoB.addEventListener('click', () => {
    
    diaM.innerHTML = "dia "+dia;  
    mesM.innerHTML = "mês "+mes;  
    anoM.innerHTML = "ano "+ano;  
    diaS.innerHTML = ""+resultadoDia;  
    mesA.innerHTML = ""+resultadoMes;  
    tempoM.innerHTML = tempo+" ms";  
})
