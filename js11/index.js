// Inicialização das variáveis do sistema
var _id = 0;
var id = 0;
let nome = '';
let descricao = '';
let valor = 0.0;
let incluidoEm = new Date();

var produto = {};
var produtos = []; //ARRAY DE TIPO PRODUTO

let produtoDetalhe = { msg: 'nada ainda' }; //inicializa/carrega os dados para editar e excluir

/**Elementos e variáveis para a Função Listar tabela dinâmica */
let tRowEl = [];
let trProduto = ``;
let tRow = document.querySelector('tr');
let tBody = document.querySelector('tbody');
let btnAtualizar = document.querySelector('#btn-atualizar');
let btnIncluir = document.querySelector('#btn-incluir');

//Selecionar elementos de formulário
let nomeForm = document.querySelector('#nome');
let descricaoForm = document.querySelector('#descricao');
let valorForm = document.querySelector('#valor');

//selecionar elementos do componente dinâmico produto-detalhe
let produtoDetalheContainer = document.querySelector('#produto-detalhe');
let detId = document.querySelector('#detalhe-id');
let detNome = document.querySelector('#detalhe-nome');
let detDescricao = document.querySelector('#detalhe-descricao');
let detValor = document.querySelector('#detalhe-valor');
let detIncluidoEm = document.querySelector('#detalhe-hora');

//Variaveis para a função buscar produtos
let btnBuscar = document.querySelector('#btn-busca');
let inputBuscar = document.querySelector('#input-busca').value;

iniciarDadosMock(); //Função que popula o Array de produtos com dados iniciais


/**Listerner para ouvir cliques sobre as trs */
let target = '';
tBody.addEventListener('click', function (evento) {
  evento.stopImmediatePropagation();
  evento.preventDefault();
  let idx

  target = evento.target.localName;

  try {
    if (target == 'td') {
      id = evento.target.parentElement.cells[0].textContent;
      produtos.find((prod, index, array) => {

        if( prod.id == id){
          idx = index
        }
        
      });
      produto = produtos[idx] // será recuperado pela função abaixo
      detalheProdutoDisplay();
    }else{
      console.log("Não clicou numa linha!")
    }
  } catch (erros) {
    console.log(`Erros encontrados: ${erros}`);
  }
});


function detalheProdutoDisplay() {
  detId.innerHTML = `<p>${produto.id}</p>`;
  detNome.innerHTML = `<p>${produto.nome}</p>`;
  detDescricao.innerHTML = `<p>${produto.descricao}</p>`;
  detValor.innerHTML = `<p>${produto.valor}</p>`;
  detIncluidoEm.innerHTML = `<p>${produto.incluidoEm}</p>`;
}


function listarTabelaDinamica() {
  tBody.innerHTML = ``; //Limpa o tbody

  let _id = 0;
  for (let idx = 0; idx < produtos.length; idx++) {
    _id = produtos[idx].id;

    tRowEl[idx] = document.createElement('tr');

    trProduto = `
      <td>${_id}</td>
      <td id='click'">${produtos[idx].nome}</td>
      <td>${produtos[idx].valor}</td>
      <td>
        <a href="#" >
          <span 
            class="fa-solid fa-pencil" 
            id="btn-editar" 
            onclick='editar( ${idx} )'>
          </span>
        </a>
      </td>
      <td>
        <a href="#">
          <span 
            class="fa-solid fa-trash-can" 
            id="btn-excluir"
            onclick='excluir( ${idx} )'>
          </span>
        </a>
      </td> 
    `;

    tRowEl[idx].innerHTML = trProduto;

    tBody.appendChild(tRowEl[idx]);
  }
}

//Troca os botões de salvar para atualizar
document.querySelector('.atualiza').addEventListener('click', function () {
  btnAtualizar.style.display = 'none';
  btnIncluir.style.display = 'block';
});


function buscarprodutos(){

  let inputBuscar = document.querySelector('#input-busca').value;

  if (inputBuscar === "") {
    console.log("se vazio, lista a tabela");    
    listarTabelaDinamica();

  } else {

      let array = produtos.filter((value) => {
        console.log("passou por aqui filtrar")

        return value.nome.includes(inputBuscar) || value.descricao.includes(inputBuscar);      



      });

      tBody.innerHTML = ``; //Limpa o tbody

      let _id = 0;
      for (let idx = 0; idx < array.length; idx++) {
        _id = array[idx].id;
        nome = array[idx].nome;
        valor = array[idx].valor;

        array[idx] = document.createElement('tr');

        trProduto = `
          <td>${_id}</td>
          <td id='click'">${nome}</td>
          <td>${valor}</td>
          <td>
            <a href="#" >
              <span 
                class="fa-solid fa-pencil" 
                id="btn-editar" 
                onclick='editar( ${idx} )'>
              </span>
            </a>
          </td>
          <td>
            <a href="#">
              <span 
                class="fa-solid fa-trash-can" 
                id="btn-excluir"
                onclick='excluir( ${idx} )'>
              </span>
            </a>
          </td> 
        `;

        array[idx].innerHTML = trProduto;

        tBody.appendChild(array[idx]);   
      } 

        

      if (array.length === 0) {

        console.log(`Não foram encontrados produtos conforme chave de pesquisa!`);      

        throw new Error('Não foram encontrados produtos conforme chave de pesquisa!');

      } else {

        console.log(`Foram encontrado(s) ${array.length}`);
          
      }
     
  }  
  
  


}


function atualizarProduto() {
  console.log('A partir do metodo Atualizar: ', produtos[id]);
  //Reatribui as novas informações do produto
  produtos[id].nome = nomeForm.value;
  produtos[id].descricao = descricaoForm.value;
  produtos[id].valor = valorForm.value;
  console.log('A partir do metodo Atualizar: ', produtos[id]);
  listarTabelaDinamica();
  limparCamposFormulario();
  limparDisplayDetalheDoProduto();
}

/******FUNÇÃO EDITAR******* */
let objTmp = {};
function editar(indice) {
  console.log('a partir de Editar, indice:', indice, produtos[indice]);
  btnAtualizar.style.display = 'block';
  btnIncluir.style.display = 'none';

  //Capturar id do tr
  objTmp = produtos[indice];

  console.log(objTmp);

  //Exibir os valores
  nomeForm.value = objTmp.nome;
  descricaoForm.value = objTmp.descricao;
  valorForm.value = objTmp.valor;
  id = objTmp.id; //Redefine o id global
  limparDisplayDetalheDoProduto();
}

/**FUNÇÃO EXCLUIR */

function excluir(indice) {
  produtos.splice(indice, 1);
  listarTabelaDinamica()
  limparCamposFormulario()
  limparDisplayDetalheDoProduto()
}

/**FUNÇÃO PARA SALVAR/ATUALIZAR*/
function incluirProdutoAPartirDoFormulario() {
  nome = nomeForm.value;
  descricao = descricaoForm.value;
  valor = valorForm.value;
  criarObjProduto(_id, nome, descricao, valor);

  listarTabelaDinamica(); //Atualiza componente Lista de produtos
  limparCamposFormulario();
  limparDisplayDetalheDoProduto();
  alert(`Produto: ${nome} incluído com sucesso!`);
}

/**FUNÇÃO PARA LIMPAR O DISPLAY DE PRODUTOS */
function limparDisplayDetalheDoProduto() {
  detId.innerHTML = `<p>${''}</p>`;
  detNome.innerHTML = `<p>${''}</p>`;
  detDescricao.innerHTML = `<p>${''}</p>`;
  detValor.innerHTML = `<p>${''}</p>`;
  detIncluidoEm.innerHTML = `<p>${''}</p>`;
}

/**FUNÇÃO LIMPAR FORMULÁRIO */
function limparCamposFormulario() {
  nomeForm.value = `${''}`;
  descricaoForm.value = `${''}`;
  valorForm.value = `${''}`;
}

/**FUNÇÃO CRIA UM OBJETO TIPO PRODUTO E INSERE NO ARRAY GLOBAL DE PRODUTOS */
function criarObjProduto(id, nome, descricao, valor) {
  let produto = {
    id: id,
    nome: nome.toLowerCase(),
    descricao: descricao,
    valor: valor,
    incluidoEm: new Date().toUTCString(),
  };

  produtos.push(produto);

  _id++; //Após criar o objeto, a variável global é manipulada
}

//FUNÇÕES DE ORNAMENTO
function ordenarAlfabeticamente() {
  console.log('Ordenado Alfabeticamente!');

  let auxArr = new Array(); //Array auxiliar para armazenar a propriedade .nome de produtos[]
  let arrayOrdenado = [];

  //Cria um array auxiliar com nomes a ser ordenados
  for (let i = 0; i < produtos.length; i++) {
    auxArr[i] = produtos[i].nome;
  }
  auxArr = auxArr.sort(); // ordena o os nomes

  //Rotina para popular o array ordenadamente
  for (let i = 0; i < auxArr.length; i++) {
    produtos.find((prod, index, array) => {
      if (prod.nome == auxArr[i]) arrayOrdenado[i] = produtos[index];
    });
  }

  listarTabelaOrdenada(arrayOrdenado);
}
function ordenarPorValorCrescente() {
  //console.log('Ordenado por valor Crescentemente', produtos);
  let auxArr = new Array(); //Array auxiliar para armazenar a propriedade .valor de produtos[]
  let arrayOrdenado = new Array();

  //Cria um array auxiliar com nomes a ser ordenados
  for (let i = 0; i < produtos.length; i++) {
    auxArr[i] = parseFloat(produtos[i].valor);
  }
  auxArr = auxArr.sort(compare); // ordena os valores
  console.log( auxArr.sort( compare ) )
  //Rotina para popular o array ordenadamente
  for (let i = 0; i < auxArr.length; i++) {
    produtos.find((prod, index, array) => {
      if (parseFloat(prod.valor) === auxArr[i])
        arrayOrdenado[i] = produtos[index];
    });
  }

  listarTabelaOrdenada(arrayOrdenado);
}
function compare(a, b) { return a - b }//uso com o metedo sort()

//FUNÇÃO MOSTRAR AS LISTAS ORDENADADAS
function listarTabelaOrdenada(listaAOrdenar) {
  tBody.innerHTML = ``; //Limpa o tbody

  let _id = 0;
  for (let idx = 0; idx < listaAOrdenar.length; idx++) {
    _id = listaAOrdenar[idx].id;

    tRowEl[idx] = document.createElement('tr');

    trProduto = `
      <td>${_id}</td>
      <td id='click'">${listaAOrdenar[idx].nome}</td>
      <td>${listaAOrdenar[idx].valor}</td>
      <td>
        <a href="#" >
          <span
            class="fa-solid fa-pencil"
            id="btn-editar"
            onclick='editar( ${idx} )'>
          </span>
        </a>
      </td>
      <td>
        <a href="#">
          <span
            class="fa-solid fa-trash-can"
            id="btn-excluir"
            onclick='excluir( ${idx} )'>
          </span>
        </a>
      </td>
    `;

    tRowEl[idx].innerHTML = trProduto;

    tBody.appendChild(tRowEl[idx]);
  }
}


/**FUNÇÃO QUE INSERE OS DADOS DE INICIAIS PARA TESTES "MOCK" */
function iniciarDadosMock() {
  let produtosIniciais = [
    {
      nome: 'Alicate',
      descricao: 'cortador, decapador de fios',
      valor: 100.0,
    },
    {
      nome: 'Panela de Pressão',
      descricao: 'Mais eficiêcia para cozinhar!',
      valor: 200.0,
    },
    {
      nome: 'Cadeira Presidente',
      descricao: 'Conforto e sofisticação!',
      valor: 760.0,
    },
  ];
  for (let i = 0; i < produtosIniciais.length; ++i) {
    criarObjProduto(
      _id,
      produtosIniciais[i].nome,
      produtosIniciais[i].descricao,
      produtosIniciais[i].valor
    );
  }
}
