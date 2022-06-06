/**
 * Questão A
 */

/*

let meuBotao = document.getElementById('btn')
let h2 = document.getElementById('mostra')
let valor1 = document.getElementById('valor1').value
let valor2 = document.getElementById('valor2').value


meuBotao.addEventListener('click', () => {
   if (valor1 < valor2){
    h2.innerHTML = "Menor"
   }else if (valor1 > valor2){
        h2.innerHTML = "Maior"
   }else{
    h2.innerHTML = "Igual"
   }
})
*/

/**
 * Questão B
 */
/*

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
 
*/



/**
 * Questão C
 */

 //let mostraC = document.getElementById('mostraC')




const diasFemi = new Number(29237)
const diasMasc = new Number(26682)










async function main() {  

    let rest = 0
    let genero = 'A'
    let mostraC

    let dataDeNascimento = await new Date(document.getElementById('nasc').value);



    let date1 = await new Date(dataDeNascimento)   
    let date2 = await new Date()
    

    date1 = await parseInt( await date1.getTime() )
    
    date2 = await date2.getTime()

    let timeDiff = await parseInt(date2 - date1)
    let diffDays = await parseInt( timeDiff/(1000 * 3600 * 24));   



    
    mostraC = await document.getElementById('mostraC')
    
    genero = await (document.querySelector('input[name="genero"]:checked').value).toString()
    
    switch( genero ){

        case 'feminino':
            rest = await diasFemi - diffDays
            mostraC.innerHTML = `${rest}`
            break
        case 'masculino':
            rest = await diasMasc - diffDays
            mostraC.innerHTML = `${rest}`
            break

        default:
            console.log("opção inválida!")
            break

    }
        

}