/**
 *Estenda o exercício anterior agora ‘capturando’ e ‘emitindo’ erros (‘throw’), de forma que: 

 a) Emitir erro de ‘Field “name” is invalid!’ se o nome estiver sem valor preenchido ou tenha tamanho 
inferior a 5 caracteres;
 b) Emitir erro ‘Field “birthDate” is invalid!’ se a data de nascimento for superior a data atual ou se a
data for impossível (inválida);
 c) Emitir erro ‘Field “weight” is invalid!’, se não for do tipo numérico;
 d) Emitir erro ‘Field “height” is invalid!’, se não for do tipo numérico e não for inteiro; 
 e) Emitir erro ‘Field “gender” is invalid!’, caso não seja um dos gêneros possíveis determinados por 
você no formulário.
 */


/**
 * Questão B
 */


 let pessoa = {};
 

 let btn = document.querySelector('form');

 btn.addEventListener('submit', (e => {
 
     e.preventDefault();
    let nome = document.getElementById("nome").value;

    let dia = parseInt(document.getElementById("dia").value,10);
    let mes = parseInt(document.getElementById("mes").value,10);
    let ano = parseInt(document.getElementById("ano").value,10);

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseInt(document.getElementById('altura').value);

    let genero = document.getElementById("genero").value;

    // nome
    if(nome == "" || nome.length < 5){

        throw TypeError( `[Field] “name” is invalid!`);

    }
    

    // data de nascimento
    if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
        if (dia > 31){
            throw TypeError( `[Field] “birthDate” is invalid!`);
        }  
    } else if (mes==4 || mes==6 || mes==9 || mes==11){
        if (dia > 30){
            throw TypeError( `[Field] “birthDate” is invalid!`);
        }  
    } else {
        if (dia>29){
            throw TypeError( `[Field] “birthDate” is invalid!`); 
        } else if (dia==29 && mes%4>0){
            throw TypeError( `[Field] “birthDate” is invalid!`);
        }
    }

    //validação
    const hoje = new Date;
    const atual = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const dtNasc = new Date(ano, mes-1, dia);  

    if (atual.getTime()<dtNasc.getTime()){
        throw TypeError( `[Field] “birthDate” is invalid!`);
    }


    //peso
    if(isNaN(peso)){
        throw TypeError( `[Field] “weight” is invalid!`);
    }


    //altura
    if(isNaN(altura)){
        throw TypeError( `[Field] “height” is invalid!`);
    }


    //gênero
    if(genero != "masculino" && genero != "feminino"){
        throw TypeError( `[Field] “gender” is invalid!`);
    }

    pessoa = {
        name: nome,
        birthDate: dtNasc.toLocaleDateString(),
        weight: peso,
        height: altura,
        gender: genero
    }
    console.log(pessoa);
}))
