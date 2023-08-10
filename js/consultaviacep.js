/////////   Versão 2: para chamar diretamente do HTML /////////
//O valor do cep digitado está no <input> com id "txtCep"
async function buscarCEP(){
  limpar();
  //'document' é uma variável global que representa todo o HTML e seus elementos (a árvore DOM - Document Object Model)
  var txtCep = document.getElementById('txtCep');
  var cepInformado = txtCep.value;

  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
  .then(resultado => resultado.json())
  .then(json => {
      if(json.erro){
          mostrarTelaErro();
      }else{
          preencherCamposComJSON(json);
      }
  })
  .catch(erro => {
      mostrarTelaErro();
  })
}

//Preencher os dados do endereço obtido na página HTML
function preencherCamposComJSON(json){
  //essa condição funciona em javascript, é o equivalente a 
  //if(json.bairro != undefined && json.bairro != '')
  if(json.bairro){ 
      //Obter o componente diretamente pelo id funciona (não sabia)
      txtBairro.value = json.bairro;
  }else{
      txtBairro.disabled = false;
  }

  //Versão 2 (mais antiga): obter o componente navegando na árvore DOM
  document.getElementById('txtUF').value = json.uf;
  txtCidade.value = json.localidade;
}

function limpar(){
  divDadosEndereco.style = 'background-color: aqua';
  txtBairro.value = '';
  txtCidade.value = '';
  txtUF.value = '';
  txtBairro.disabled = true;
}

function mostrarTelaErro(){
  limpar();
  divDadosEndereco.style = 'background-color: red';
  alert('CEP informado não existe');
}
///////////////////////////////////////////////////////////////