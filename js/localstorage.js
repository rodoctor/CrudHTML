function AdicionarPessoa()
{
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));

    let campos = {
        id: document.querySelector("#codigo").value,
        nome: document.querySelector("#nome").value,
        data: document.querySelector("#data").value,
        salario: document.querySelector("#salario").value
    }
        
    pessoas.push(campos);
    localStorage.setItem('pessoas',JSON.stringify(pessoas));

    return true
};

function AlterarPessoa()
{
    let id = this.value;

    let pessoas = JSON.parse(localStorage.getItem('pessoas'));
    let indice = pessoas.findIndex(obj => obj.id===id);

    pessoas[indice].nome    = prompt("Nome", pessoas[indice].nome);
    pessoas[indice].data    = prompt("Data", pessoas[indice].data);
    pessoas[indice].salario = prompt("Salario", pessoas[indice].salario);

    localStorage.setItem('pessoas',JSON.stringify(pessoas));

    LimparTabela();
    BuscarPessoa();
};

function ExcluirPessoa()
{
    let id = this.value;
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));
    let indice = pessoas.findIndex(obj => obj.id===id);

    //Remover item do Array
    pessoas.splice(indice,1);
    localStorage.setItem('pessoas',JSON.stringify(pessoas));

    LimparTabela();
    BuscarPessoa();
};

function BuscarPessoa()
{
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));

    let tbody = document.querySelector('tbody');
 
    pessoas.forEach(function(pessoa) {
        //Cria nova linha vazia
        let tr = document.createElement('tr');

        //Adiciona cada campo de pessoa em uma célula da tabela
        for( let key in pessoa ){
            let td = document.createElement('td');
            td.textContent  = pessoa[key];
            tr.appendChild(td);
        }

        //Botões de Ação [Alterar, Deletar]
        let td      = document.createElement('td');
        let alterar = document.createElement('button');
        let remover = document.createElement('button');

        //Classes dos botões
        alterar.classList.add('btn','btn-warning', 'btn-sm');
        remover.classList.add('btn','btn-danger', 'btn-sm');

        //Texto do botão
        alterar.innerText = "Alterar";
        remover.innerText = "Excluir";

        //Valor do botão
        alterar.value = pessoa["id"];
        remover.value = pessoa["id"];

        //Evento do botão
        alterar.addEventListener('click', AlterarPessoa);
        remover.addEventListener('click', ExcluirPessoa);
        
        //Adiciona botões na mesma TD
        td.appendChild(alterar);
        td.appendChild(remover);

        tr.appendChild(td);

        //Adiciona linha a tabela
        tbody.appendChild(tr);
    });
};

function LimparTabela()
{
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
};