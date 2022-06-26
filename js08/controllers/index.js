/**
 * Crie uma página web que peça ao usuário que preencha 5 dados de usuário (‘Nome’, ’Data de Nascimento’, 
 * ’Peso’, ’Altura’ e ‘Gênero’) por meio de um formulário, sendo armazenado em um objeto JavaScript ‘user’ 
 * após clique de um botão, de forma que: 

 a) O campo do ‘Nome’ é do tipo string e será armazenado no formato string;
 b) A ‘Data de Nascimento’ deve ser inserida pelo usuário através de 3 campos (‘dia’, ‘mês’ e ‘ano’) de 
    forma que a seleção de não pode ser de data inexistente ou superior à data atual, sendo armazenada 
    no formato Date;
 c) O ‘Peso’ e ‘Altura’ embora seja inserido no formato string deve ser armazenado no formato numérico, 
    de forma que o peso (kg) é numérico de ponto flutuante e a altura (cm) em um numérico inteiro;
 d) O ‘Gênero’ deve ser capturado por meio de um campo do tipo select e armazenado em formato string;
 e) O objeto Javascript deve conter os seguintes atributos:
    1- name: que armazenará o nome do usuário (formato string);
    2- birthDate: que armazenará a data de nascimento (formato Date);
    3- weight: que armazenará o peso em quilogramas (formato numérico float);
    4- height: que armazenará a altura em centímetros (formato numérico int);
    5- gender: que armazenará o gênero (formato string).
 */



/**
 * Questão A
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

    // data de nascimento
    if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
        if (dia > 31){
        console.log("data inválida!");
        }  
    } else if (mes==4 || mes==6 || mes==9 || mes==11){
        if (dia > 30){
        console.log("data inválida!");
        }  
    } else {
        if (dia>29){
        console.log("data inválida!"); 
        } else if (dia==29 && mes%4>0){
        console.log("data inválida!");
        }
    }

    //validação
    const hoje = new Date;
    const atual = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const dtNasc = new Date(ano, mes-1, dia);  

    if (atual.getTime()<dtNasc.getTime()){
        console.log("data de nascimento superior a data atual");
    }

    pessoa = {
        name: nome,
        birthDate: dtNasc.toLocaleDateString(),
        weight: peso,
        height: altura,
        gender: genero
    }
    console.log(pessoa);




}));
 



    

   












