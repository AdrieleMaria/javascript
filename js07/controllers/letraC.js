/*
Crie uma página web que possua dois campos, um do tipo textarea, outro do tipo text e um botão de enviar, 
considerando:

 a) A página deve simular um chat, onde possibilite o envio de uma mensagem de forma que a mensagem digitada 
    no campo do tipo text, ao clicar no botão enviar, deve aparecer no campo do tipo textarea (sem apagar o 
    conteúdo do campo textarea adicionando uma linha a mais a cada inserção);
 b) O campo textarea deve ter uma largura e altura definida de forma a exibir aproximadamente as últimas 10 
    linhas e, caso possua mais linhas apareça uma barra de scroll para visualizar todas as mensagens que 
    excedam este limite;
 c) Se o usuário digitar a mensagem e apertar a tecla ‘enter’, a mensagem deve ser enviada como se o usuário 
    tivesse apertado o botão enviar;
 d) O campo textarea deve receber as mensagens e automaticamente fazer um scroll até a última mensagem 
    permitindo que a última mensagem seja sempre visualizada (utilizar o scrollTop para isso);
 e) Adicionar um botão para poder ‘limpar’ o conteúdo do campo textarea que ao ser clicado apague o conteúdo 
    do campo textarea.
*/


/**
 * Questão C
 */

/**
 * <textarea id="tela" class="tx-area"> </textarea>            
 * <input type="text" id="msg" class="tx-msg">                         
 * <input type="button" id="btn" class="btn banner-btn" value="Enviar"/>
 */



let botao = document.getElementById("btn");
let area = document.getElementById("tela");
let mensagem = document.getElementById("msg");



botao.addEventListener('keyup', enviar);

function enviar(e){
  console.log(e.target.value)
  area.textContent = ` ${e.target.value}`;
}