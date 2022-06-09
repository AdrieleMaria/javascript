
/**
 * Questão C
 */


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
            mostraC.innerHTML = `Você tem ${rest} dias de vida`
            break
        case 'masculino':
            rest = await diasMasc - diffDays
            mostraC.innerHTML = `Você tem ${rest} dias de vida`
            break

        default:
            console.log("opção inválida!")
            break

    }
    

}