async function buscarTodosProdutos(){
    fetch('http://localhost:8080/api/produtos/todos')
    .then(resultado => resultado.json())
    .then(json => { 
        preencherTabela(json);
    });
}


function preencherTabela(jsonProdutos) {
    var dadosTabelaProdutos = document.getElementById("corpoTabela");
  
    for(let i = 0; i < jsonProdutos.length; i++){
        let novaLinha = dadosTabelaProdutos.insertRow();

        let celulaId = novaLinha.insertCell();
        celulaId.innerText = jsonProdutos[i].id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = jsonProdutos[i].nome;

        let celulaFabricante = novaLinha.insertCell();
        celulaFabricante.innerText = jsonProdutos[i].fabricanteDoProduto.nome;

        let celulaValor = novaLinha.insertCell();
        celulaValor.innerText = 'R$' + jsonProdutos[i].valor;

        let celulaPeso = novaLinha.insertCell();
        celulaPeso.innerText = jsonProdutos[i].peso;
    }
  }

  window.addEventListener('DOMContentLoaded', buscarProdutoSeletor());
  
  async function buscarProdutoSeletor() {
    fetch("http://localhost:8080/api/produtos/filtro", {
      method: "POST",
      body: JSON.stringify({
        nome: document.getElementById("produto").value,
        fabricante: document.getElementById("fabricante").value,
        cnpjFabricante: document.getElementById("cnpj").value,
        pesoMinimo: document.getElementById("pesoMin").value,
        pesoMaximo: document.getElementById("pesoMax").value,
        valorMinimo: document.getElementById("valor-min").value,
        valorMaximo: document.getElementById("valor-max").value,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((resultado) => resultado.json())
      .then((json) => {
        console.log(json);
        preencherTabela(json);
      });
  }
  
  function esconderFiltro() {
    document.getElementById('meuConteudo').classList.toggle('show');
  }
  

  buscarTodosProdutos();
