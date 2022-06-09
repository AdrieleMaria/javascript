
/**
 * Questão B
 */


 let botaoB = document.getElementById('btn')
 let mostraB = document.getElementById('mostraB')

 let nome1 = document.getElementById('nome1').value
 let nome2 = document.getElementById('nome2').value

 let string1 = nome1.length
 let string2 = nome2.length
 
 botaoB.addEventListener('click', () => {

    if (string1 < string2){
        mostraB.innerHTML = "Menor"
    }else if(string1 > string2){
        mostraB.innerHTML = "Maior"
    }else{
        mostraB.innerHTML = "Igual"
    }

 })

