
async function buscarTodosFabricantes(){
    fetch('http://localhost:8080/api/fabricante/todos')
    .then(resultado => resultado.json())
    .then(json => { 
        preencherTabela(json);
    });
  }


function preencherTabela(jsonFabricantes) {

    var dadosTabelaFabricantes = document.getElementById('corpoTabela');
  
    for (let i = 0; i < jsonFabricantes.length; i++) {
        let novaLinha = dadosTabelaFabricantes.insertRow();

        let celulaId = novaLinha.insertCell();
        celulaId.innerText = jsonFabricantes[i].id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = jsonFabricantes[i].nome;

        let celulaCnpj = novaLinha.insertCell();
        celulaCnpj.innerText = jsonFabricantes[i].cnpj;

        let celulaCep = novaLinha.insertCell();
        celulaCep.innerText = jsonFabricantes[i].cep;

        let celulaCidade = novaLinha.insertCell();
        celulaCidade.innerText = jsonFabricantes[i].cidade;

        let celulaEstado = novaLinha.insertCell();
        celulaEstado.innerText = jsonFabricantes[i].uf;

    }
}

function limpar() {
corpoTabela.innerHTML = "";
}






