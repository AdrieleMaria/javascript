// Inicialização das variáveis do sistema
let _id = 0;
let id;
let nome = '';
let descricao = '';
let valor = 0.0;
let incluidoEm = new Date();

let produto = {};
let produtos = []; //ARRAY DE TIPO PRODUTO

let produtoDetalhe = { msg: 'nada ainda' }; //inicializa/carrega os dados para editar e excluir

/**Função Listar tabela dinâmica */
let tRowEl = [];
let trProduto = ``;
let tRow = document.querySelector('tr');
let tBody = document.querySelector('tbody');
let btnAtualizar = document.querySelector('#btn-atualizar');
let btnIncluir = document.querySelector('#btn-incluir');
//displayBlock.style.display = 'block';
//displayNone.style.display = 'none';

iniciarDadosMock(); //Função que popula o Array de produtos com dados iniciais

let target = '';
tBody.addEventListener('click', function (evento) {
  evento.preventDefault();
  target = evento.target.localName;
  switch (target) {
    case 'td':
      let i = 0;
      let id = evento.target.parentElement.cells[0].textContent;

      //recuperar indice por id
      while (produtos[i].id != id) {
        ++i;
      }
      if (produtos[i].id == id) {
        console.log('click no tr: id encontrado! O INDICE DO PRODUTO É:', i);
        listarTabelaDinamica();
        detalheProdutoDisplay(produtos[i]);
      } else {
        console.log('click no tr: id NÃO encontrado!');
      }
      i = 0;
      break;
    case 'span':
      if (evento.path[0].id == 'btn-excluir') {
        //let idExcluir = evento.path[3].children[0].textContent;
      } else if (evento.path[0].id == 'btn-editar') {
        //let idEditar = evento.path[3].children[0].textContent;
        console.log(evento.path[0].id);
      } else {
        console.log('ERRO - Não foi possível Editar ou Excluir o Produto!');
      }

      break;
    default:
      console.log('ERRO de clique');
      break;

    //
  }
});

function detalheProdutoDisplay(obj) {
  //.innerhtml
  listarTabelaDinamica(); //Reobter a referência dos objetos no componente da tabela
  console.log('detalheProdutoDisplay:', obj);
  document.querySelector('.id').innerHTML = obj.id;
  document.querySelector('.nome').innerHTML = obj.nome;
  document.querySelector('.descricao').innerHTML = obj.descricao;
  document.querySelector('.valor').innerHTML = obj.valor;
  document.querySelector('#hora').innerHTML = obj.incluidoEm;
  listarTabelaDinamica(); //Reobter a referência dos objetos no componente da tabela
}

function listarTabelaDinamica() {
  tBody.innerHTML = ``; //Limpa o tbody

  indice = 0;
  let _id = 0;
  while (indice < produtos.length) {
    _id = produtos[indice].id;

    tRowEl[indice] = document.createElement('tr');

    trProduto = `
      <td>${_id}</td>
      <td id='click'">${produtos[indice].nome}</td>
      <td>${produtos[indice].valor}</td>
      <td>
        <a href="#" >
          <span 
            class="fa-solid fa-pencil" 
            id="btn-editar" 
            onclick='editar( ${indice} )'>
          </span>
        </a>
      </td>
      <td>
        <a href="#">
          <span 
            class="fa-solid fa-trash-can" 
            id="btn-excluir"
            onclick='excluir(${indice})'>
          </span>
        </a>
      </td> 
    `;

    tRowEl[indice].innerHTML = trProduto;

    tBody.appendChild(tRowEl[indice]);

    ++indice;
  }
}
document.querySelector('.atualiza').addEventListener('click', () => {
  btnAtualizar.style.display = 'none';
  btnIncluir.style.display = 'block';
});

function atualizarProduto() {
  //Reatribui as novas informações do produto
  produtos[id].nome = document.querySelector('#nome').value;
  produtos[id].descricao = document.querySelector('#descricao').value;
  produtos[id].valor = document.querySelector('#valor').value;

  //Limpar os campos do formulário
  document.querySelector('#nome').value = '';
  document.querySelector('#descricao').value = '';
  document.querySelector('#valor').value = '';

  //Atualizar a lista
  listarTabelaDinamica();
}
function editar(indice) {
  btnAtualizar.style.display = 'block';
  btnIncluir.style.display = 'none';
  let objTmp = {};
  //Capturar id do tr
  objTmp = produtos[indice];

  //Exibir os valores
  document.querySelector('#nome').value = objTmp.nome;
  document.querySelector('#descricao').value = objTmp.descricao;
  document.querySelector('#valor').value = objTmp.valor;

  id = objTmp.id;
  //console.log('editar: ', produtos[id]);
}

let tamArr = produtos.length;
function excluir(indice) {
  //Recebe índice a partir do clique na tr, vide listarTabelaDinamica()

  tamArr = produtos.length;
  tamArr--; //tamanho do novo array de produtos
  let tmpArr = [];
  if (produtos.length == 1) {
    produtos = [];
  } else {
    produtos[indice] = produtos[tamArr]; //recebe o último elemento do array
    //Rotina que cria outro array de objetos tipo produtos
    let i = 0;
    while (i < tamArr) {
      tmpArr[i] = produtos[i];
      ++i;
    }

    produtos = tmpArr;
  }
  //console.log(produtos);
  listarTabelaDinamica();
}

function incluirProdutoAPartirDoFormulario() {
  //para salvar e atualizar
  nome = document.querySelector('#nome').value;
  descricao = document.querySelector('#descricao').value;
  valor = document.querySelector('#valor').value;
  console.log(typeof nome, typeof descricao, typeof valor);
  criarObjProduto(_id, nome, descricao, valor);

  listarTabelaDinamica(); //Atualiza componente Lista de produtos
  //Limpar os campos do formulário
  document.querySelector('#nome').value = '';
  document.querySelector('#descricao').value = '';
  document.querySelector('#valor').value = '';
  alert(`Produto: ${nome} incluído com sucesso!`);
}

//Abaixo estão as funções de criação e inserção do objeto produto
function criarObjProduto(id, nome, descricao, valor) {
  let produto = {
    id: id,
    nome: nome,
    descricao: descricao,
    valor: valor,
    incluidoEm: new Date().toUTCString(),
  };

  produtos.push(produto);

  _id++; //Após criar o objeto, a variável global é manipulada
}

// DADOS MOCK
function iniciarDadosMock() {
  nome = 'Alicate';
  descricao = 'cortador, decapador de fios';
  valor = 100.0;
  produto = criarObjProduto(_id, nome, descricao, valor);

  nome = 'Panela de Pressão';
  descricao = 'Mais eficiêcia para cozinhar!';
  valor = 200.0;
  produto = criarObjProduto(_id, nome, descricao, valor);

  nome = 'Cadeira Presidente';
  descricao = 'Conforto e sofisticação!';
  valor = 760.0;
  produto = criarObjProduto(_id, nome, descricao, valor);
}
