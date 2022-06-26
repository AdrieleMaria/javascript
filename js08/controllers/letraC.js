/*
Estenda o exercício 1 e exiba o resultado após o clique no botão:

 a) Se houver erro, mostre o erro ‘capturado’ no formulário;
 b) Se não houver erro:
   1- mostre os dados com um label e valor a cada linha;
   2- mostre o resultado do objeto em formato string (JSON.stringify);
   3- mostre no console o objeto resultante.
*/

/**
 * Questão C
 */

/**
 * <textarea id="tela" class="tx-area"> </textarea>
 * <input type="text" id="msg" class="tx-msg">
 * <input type="button" id="btn" class="btn banner-btn" value="Enviar"/>
 */

let pessoa = {};

let btn = document.querySelector('form');

btn.addEventListener('submit', (e => {

    e.preventDefault();
   let nome = document.getElementById("nome").value;

   let dia = parseInt(document.getElementById("dia").value, 10);
   let mes = parseInt(document.getElementById("mes").value, 10);
   let ano = parseInt(document.getElementById("ano").value, 10);

   let peso = parseFloat(document.getElementById("peso").value);
   let altura = parseInt(document.getElementById("altura").value);

   let genero = document.getElementById("genero").value;

   // nome
   if (nome == "" || nome.length < 5) {
      throw TypeError(`[Field] “name” is invalid!`);
   }
   try {
      document.getElementById("l-nome").textContent = `Nome: ${nome}`;
   } catch (err) {
      errors = err.mesage;
      console.log(errors);
   }

   // data de nascimento
   if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
      if (dia > 31) {
         throw TypeError(`[Field] “birthDate” is invalid!`);
      }
   } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
      if (dia > 30) {
         throw TypeError(`[Field] “birthDate” is invalid!`);
      }
   } else {
      if (dia > 29) {
         throw TypeError(`[Field] “birthDate” is invalid!`);
      } else if (dia == 29 && mes % 4 > 0) {
         throw TypeError(`[Field] “birthDate” is invalid!`);
      }
   }

   //validação
   const hoje = new Date();
   const atual = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
   const dtNasc = new Date(ano, mes - 1, dia);

   if (atual.getTime() < dtNasc.getTime()) {
      throw TypeError(`[Field] “birthDate” is invalid!`);
   }
   try {
      document.getElementById("l-data").textContent = `Nascimento: ${dtNasc.toLocaleDateString()}`;
   } catch (err) {
      errors = err.mesage;
      console.log(errors);
   }

   //peso
   if (isNaN(peso)) {
      throw TypeError(`[Field] “weight” is invalid!`);
   }
   try {
      document.getElementById("l-peso").textContent = `Peso: ${peso}`;
   } catch (err) {
      errors = err.mesage;
      console.log(errors);
   }

   //altura
   if (isNaN(altura) ) {
      throw TypeError(`[Field] “height” is invalid!`);
   }
   try {
      document.getElementById("l-altura").textContent = `Altura: ${altura}`;
   } catch (err) {
      errors = err.mesage;
      console.log(errors);
   }

   //gênero
   if (genero != "masculino" && genero != "feminino") {
      throw TypeError(`[Field] “gender” is invalid!`);
   }
   try {
      document.getElementById("l-genero").textContent = `Gênero: ${genero}`;
   } catch (err) {
      errors = err.mesage;
      console.log(errors);
   }

   pessoa = {
      name: nome,
      birthDate: dtNasc.toLocaleDateString(),
      weight: peso,
      height: altura,
      gender: genero,
   };

   let result = JSON.stringify(pessoa);

   document.getElementById("resultado").textContent=result;
   console.log(pessoa);
}));
