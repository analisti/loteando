// Variáveis globais
let lotesVendidos = [];
let totalComissaoCorretores = 0;

// Função para alternar entre os modos claro e escuro
const themeIcon = document.querySelector('.styled__MenuBarItem-sc-1ita5x0-6');
themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Função para registrar uma venda
function registrarVenda(formaPagamento) {
    // Obter valores dos campos de entrada
    let comissaoCorretor = parseFloat(document.getElementById('comissaoCorretor').value);
    let comissaoImobiliaria = parseFloat(document.getElementById('comissaoImobiliaria').value);
    let numeroCorretores = parseInt(document.getElementById('numeroCorretores').value);
    let quadra = document.getElementById('quadra').value;
    let numeroLote = document.getElementById('numeroLote').value;

    // Criar objeto lote
    let lote = {
        comissaoCorretor,
        comissaoImobiliaria,
        numeroCorretores,
        quadra,
        numeroLote,
        formaPagamento
    };

    // Adicionar lote ao array e atualizar total de comissão dos corretores
    lotesVendidos.push(lote);
    totalComissaoCorretores += comissaoCorretor;

    // Alerta de sucesso
    alert("Venda de lote registrada com sucesso!");

    // Limpar os campos de entrada
    document.getElementById('comissaoCorretor').value = '';
    document.getElementById('comissaoImobiliaria').value = '';
    document.getElementById('numeroCorretores').value = '';
    document.getElementById('quadra').value = '';
    document.getElementById('numeroLote').value = '';
}

// Função para exibir o relatório
function exibirRelatorio() {
    let relatorio = "Relatório:\n";
    relatorio += "Quantidade de Lotes Vendidos: " + lotesVendidos.length + "\n";

    let totalComissaoImobiliaria = 0;

    // Iterar sobre os lotes vendidos
    for (let i = 0; i < lotesVendidos.length; i++) {
        totalComissaoImobiliaria += lotesVendidos[i].comissaoImobiliaria;

        // Adicionar detalhes da venda ao relatório
        relatorio += "\nVenda:\n";
        relatorio += "Forma de Pagamento: " + lotesVendidos[i].formaPagamento + "\n";
        relatorio += "Comissão do Corretor: " + lotesVendidos[i].comissaoCorretor + "\n";
        relatorio += "Comissão Imobiliária: " + lotesVendidos[i].comissaoImobiliaria + "\n";
        relatorio += "Número de Corretores: " + lotesVendidos[i].numeroCorretores + "\n";
        relatorio += "Comissão do Lote por Corretor: " + (lotesVendidos[i].comissaoCorretor / lotesVendidos[i].numeroCorretores) + "\n";
        relatorio += "Data da Venda: " + new Date().toLocaleDateString() + "\n";
        relatorio += "Quadra: " + lotesVendidos[i].quadra + "\n";
        relatorio += "Número do Lote: " + lotesVendidos[i].numeroLote + "\n";
    }

    // Adicionar total da comissão da imobiliária e total geral da comissão do corretor ao relatório
    relatorio += "Total Comissão da Imobiliária: " + totalComissaoImobiliaria + "\n";
    relatorio += "Total Geral da Comissão do Corretor: " + totalComissaoCorretores + "\n";

    // Adicionar forma de pagamento da última venda ao relatório
    relatorio += "Forma de Pagamento da última venda: " + lotesVendidos[lotesVendidos.length - 1].formaPagamento;

    // Atualizar o elemento de relatório no HTML
    document.getElementById('relatorio').innerText = relatorio;
}

// Função para remover o último registro de venda
function removerUltimoRegistro() {
    // Verificar se há registros para remover
    if (lotesVendidos.length > 0) {
        // Atualizar total de comissão dos corretores e remover o último registro
        totalComissaoCorretores -= lotesVendidos[lotesVendidos.length - 1].comissaoCorretor;
        lotesVendidos.pop();

        // Alerta de sucesso
        alert("Último registro removido com sucesso!");
    } else {
        // Alerta se não houver registros para remover
        alert("Não há registros para remover.");
    }
}

// Função para imprimir o relatório
function imprimirRelatorio() {
    // Obter o conteúdo do relatório
    let relatorio = document.getElementById('relatorio').innerText;

    // Abrir uma nova janela de impressão
    let printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<pre>' + relatorio + '</pre>');
    printWindow.document.close();
    printWindow.print();
}

// Função para salvar o relatório em um arquivo txt
function salvarRelatorio() {
    // Obter o conteúdo do relatório
    let relatorio = document.getElementById('relatorio').innerText;

    // Criar um elemento de link invisível
    let link = document.createElement('a');
    link.download = 'relatorio.txt';
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(relatorio);

    // Simular um clique no link para iniciar o download
    link.click();
}

// Adicionar um evento de antes de descarregar a página para salvar o relatório
window.addEventListener('beforeunload', salvarRelatorio);

// Função para coletar os dados do formulário
// Função utilitária para obter elemento pelo ID
// Função utilitária para obter elemento pelo ID
function getById(id) {
    return document.getElementById(id);
}

// Função para validar CPF (implementação fictícia, substitua conforme necessário)
function validarCPF(cpf) {
    // Implemente a lógica de validação do CPF
}

// Função para validar e-mail (implementação fictícia, substitua conforme necessário)
function validarEmail(email) {
    // Implemente a lógica de validação de e-mail
}

// Função para validar campos obrigatórios
function validarCamposObrigatorios() {
    const camposObrigatorios = ['nome', 'rg', 'cpf', 'data_nascimento'];

    for (const campo of camposObrigatorios) {
        const valorCampo = getById(campo).value.trim();
        if (!valorCampo) {
            alert(`Campo ${campo} é obrigatório.`);
            return false;
        }
    }

    return true;
}

// Função para coletar os dados do formulário
function coletarDadosFormulario() {
    var nome = getById('nome').value;
    var rg = getById('rg').value;
    var data_emissao_rg = getById('data_emissao_rg').value;
    var orgao_emissor = getById('orgao_emissor').value;
    var cpf = getById('cpf').value;
    var data_nascimento = getById('data_nascimento').value;
    var nome_pai = getById('nome_pai').value;
    var nome_mae = getById('nome_mae').value;
    var estado_civil = getById('estado_civil').value;
    var renda_mensal = getById('renda_mensal').value;
    var endereco = getById('endereco').value;
    var telefone = getById('telefone').value;
    var email = getById('email').value;
    var profissao = getById('profissao').value;

    // Criar um objeto para representar os dados do formulário
    var dadosFormulario = {
        nome: nome,
        rg: rg,
        data_emissao_rg: data_emissao_rg,
        orgao_emissor: orgao_emissor,
        cpf: cpf,
        data_nascimento: data_nascimento,
        nome_pai: nome_pai,
        nome_mae: nome_mae,
        estado_civil: estado_civil,
        renda_mensal: renda_mensal,
        endereco: endereco,
        telefone: telefone,
        email: email,
        profissao: profissao
    };

    return dadosFormulario;
}

// Função para salvar os dados em um arquivo de texto
function salvarDados(dados) {
    var link = document.createElement('a');
    link.download = 'cadastro.txt';
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(dados);
    link.click();
}

// Função para exibir os cadastros feitos
function exibirCadastros(cadastros) {
    // Mapear os dados do array e formatá-los para exibição
    const cadastrosFormatados = cadastros.map((cadastro, index) => {
        return `Cadastro ${index + 1}:\n${formatarDadosCadastro(cadastro)}`;
    });

    getById('relatorio').innerText = cadastrosFormatados.join('\n\n');
}

// Função para formatar os dados do cadastro
function formatarDadosCadastro(cadastro) {
    return Object.entries(cadastro)
        .map(([campo, valor]) => `${campo}: ${valor}`)
        .join('\n');
}

// Função para imprimir os cadastros feitos
function imprimirCadastros() {
    const relatorioFormatado = cadastros.map((cadastro, index) => {
        return `Cadastro ${index + 1}:\n${formatarDadosCadastro(cadastro)}`;
    }).join('\n\n');

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write('<html><head><title>Relatório de Cadastros</title></head><body>');
    janelaImpressao.document.write('<pre>' + relatorioFormatado + '</pre>');
    janelaImpressao.document.write('</body></html>');
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Função para limpar os campos do formulário
function limparCamposFormulario() {
    // Obter todos os elementos de input e select dentro do formulário
    var elementosFormulario = document.querySelectorAll('#cadastroForm input, #cadastroForm select');

    // Iterar sobre os elementos e limpar seus valores
    elementosFormulario.forEach(function (elemento) {
        elemento.value = '';
    });
}

// Array para armazenar os cadastros feitos
var cadastros = [];

// Adicionando evento de envio do formulário
getById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validando campos obrigatórios
    if (validarCamposObrigatorios()) {
        // Coletando dados do formulário
        var cadastro = coletarDadosFormulario();
        // Adicionando o cadastro ao array
        cadastros.push(cadastro);
        // Salvando dados em arquivo de texto
        salvarDados(JSON.stringify(cadastros, null, 2));
        // Exibindo alerta ao usuário
        alert('Cadastro realizado e enviado para um arquivo de texto!');
        // Limpar os campos do formulário após o cadastro
        limparCamposFormulario();
    }
});

// Adicionando eventos aos botões de relatório e impressão
getById('botaoRelatorio').addEventListener('click', function () {
    // Exibindo cadastros em forma de relatório
    exibirCadastros(cadastros);
});

getById('botaoImprimir').addEventListener('click', function () {
    // Imprimindo cadastros
    imprimirCadastros();
});

// Função para contar o número de contratos em uma linha
function countContractsInRow(row) {
    return Array.from(row.getElementsByTagName("td"), cell => cell.getElementsByTagName("input")[0])
        .filter(inputField => inputField && inputField.value.trim() !== "").length;
}

// Função para calcular o total de contratos
function calculateTotalContracts() {
    const rows = document.getElementById("contracts").getElementsByTagName("tr");
    const totalContracts = Array.from(rows, countContractsInRow).reduce((a, b) => a + b, 0);

    document.getElementById("total").textContent = "Total de contratos: " + totalContracts;
}

// Função para criar uma tabela HTML a partir dos dados da tabela
function createHtmlTable(tableData) {
    return tableData.reduce((html, row) => {
        const rowHtml = row.reduce((rowHtml, cell) => rowHtml + `<td>${cell}</td>`, '');
        return html + `<tr>${rowHtml}</tr>`;
    }, '<table>') + '</table>';
}

// Função para capturar os dados da tabela
function captureTableData() {
    const rows = document.getElementById("contracts").querySelectorAll("tr");
    return Array.from(rows, row => Array.from(row.querySelectorAll("td input"), cell => cell.value));
}

// Função para imprimir o documento
function printDocument() {
    // Remover botões
    document.querySelectorAll("button").forEach(button => button.style.display = "none");

    // Capturar o conteúdo da tabela
    const tableData = captureTableData();

    // Construir o HTML da tabela
    const tableHtml = createHtmlTable(tableData);

    // Criar elemento para impressão
    const printDiv = document.createElement("div");
    printDiv.classList.add("printable");
    printDiv.innerHTML = new Date().toLocaleDateString("pt-BR");

    // Adicionar o `div` ao documento e imprimir
    document.body.appendChild(printDiv);
    window.print();

    // Remover o `div` após a impressão
    document.body.removeChild(printDiv);
}
// Função para adicionar uma nova linha à tabela
function addRow() {
    var tableBody = document.getElementById("contracts-body");
    var newRow = document.createElement("tr");

    for (var i = 0; i < 3; i++) {  // Adiciona 3 células por padrão (ajuste conforme necessário)
        var cell = document.createElement("td");
        var input = document.createElement("input");
        input.type = "text";
        input.classList.add("contract-input");
        cell.appendChild(input);
        newRow.appendChild(cell);
    }

    tableBody.appendChild(newRow);
}

