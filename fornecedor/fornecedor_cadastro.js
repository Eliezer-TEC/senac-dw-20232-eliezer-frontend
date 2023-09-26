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
    const nome = document.getElementById("nome").value;
    const cnpj = document.getElementById("cnpj").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;

    // Verifique se todos os campos estão preenchidos
    if (!nome || !cnpj || !cep || !cidade || !uf) {
        alert("Preencha todos os campos");
        return;
    }

    const response = await fetch("http://localhost:8080/api/fabricante/cadastrar", {
        method: "POST",
        body: JSON.stringify({
            nome,
            cnpj,
            cep,
            cidade,
            uf,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });

    if (response.ok) {
        // Se o cadastro foi bem-sucedido, exiba uma mensagem de sucesso
        alert("Cadastrado com sucesso!");
        limpar();
    } else {
        // Se ocorreu um erro, exiba uma mensagem de erro
        alert("Erro ao cadastrar. Verifique os campos e tente novamente.");
    }
}
