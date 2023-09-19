async function buscarCEP() {
    //'document' é uma variável global que representa todo o HTML e seus elementos (a árvore DOM - Document Object Model)
    var cep = document.getElementById('cep');
    var cepInformado = cep.value;
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(resultado => resultado.json())
        .then(json => {
            if (json.erro) {
                mostrarTelaErro();
            } else {
                preencherCamposComJSON(json);
            }
        })
    // .catch(erro => {
    //     mostrarTelaErro();
    // })
}

//Preencher os dados do endereço obtido na página HTML
function preencherCamposComJSON(json) {

    uf.value = json.uf;
    cidade.value = json.localidade;
    cidade.disabled = true;
    uf.disabled = true;
}

function limpar() {
    nome.value = '';
    cnpj.value = '';
    cep.value = '';
    cidade.value = '';
    uf.value = '';
    cidade.disabled = true;
    uf.disabled = true;
}


async function cadastrarFabricante() {
    fetch("http://localhost:8080/api/fabricante/cadastrar", {
        method: "POST",
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            cnpj: document.getElementById("cnpj").value,
            cep: document.getElementById("cep").value,
            cidade: document.getElementById("cidade").value,
            uf: document.getElementById("uf").value,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
      .then((resultado) => resultado.json())
        .then((json) => {
            console.log(json);
        });

        limpar();
     
}

function mostrarTelaErro() {
    limpar();
    alert('Todos os campos devem estar preenchidos!');
}