var main = dom.createElement('main');
var nav = dom.createElement('nav');
var form = dom.createElement('form');
var editable = null;
form.setAttribute('name', 'formulario');
main.setAttribute('class', 'main');
nav.setAttribute('class', 'nav');
nav.innerHTML = '<div>Shop Manager</div>';

var Produtos = [];
var nomeProduto = dom.createElement('input');
var qtdProduto = dom.createElement('input');
var descProduto = dom.createElement('textarea');
var precoProduto = dom.createElement('input');
var botao = dom.createElement('button');
var botaoEdit = dom.createElement('button');

nomeProduto.setAttribute('name', 'nome'); 
nomeProduto.setAttribute('class', 'input'); 
nomeProduto.setAttribute('type', 'text'); 
nomeProduto.setAttribute('id', 'nome'); 
nomeProduto.setAttribute('placeholder', 'Nome produto'); 
nomeProduto.setAttribute('value', ''); 

qtdProduto.setAttribute('name', 'qtd');
qtdProduto.setAttribute('id', 'qtd');
qtdProduto.setAttribute('type', 'Number');
qtdProduto.setAttribute('value', '0');
qtdProduto.setAttribute('min', '0');
qtdProduto.setAttribute('class', 'input');

descProduto.setAttribute('name', 'descricao');
descProduto.setAttribute('placeholder', 'Descrição do produto');
descProduto.setAttribute('class', 'input');
descProduto.setAttribute('id', 'desc');
descProduto.setAttribute('cols', "30");

precoProduto.setAttribute('name', 'preco'); 
precoProduto.setAttribute('class', 'input'); 
precoProduto.setAttribute('id', 'preco'); 
precoProduto.setAttribute('type', 'Number'); 
precoProduto.setAttribute('placeholder', 'Preço produto'); 
precoProduto.setAttribute('value', '0'); 
precoProduto.setAttribute('min', '0');

botao.setAttribute('name', 'btn');
botao.setAttribute('id', 'btnInserir');
botaoEdit.setAttribute('id', 'btnEdit');
botaoEdit.textContent = "SALVAR";
botao.textContent = "INSERIR";
var labelNome = dom.createElement('label');
var labelQtd = dom.createElement('label');
var labelPreco = dom.createElement('label');
var labelDesc = dom.createElement('label');

labelNome.setAttribute('for', 'nome');
labelNome.textContent = "Nome do produto:";
labelQtd.setAttribute('for', 'qtd');
labelQtd.textContent = "Quantidade:";
labelPreco.setAttribute('for', 'preco');
labelPreco.textContent = "Preço";
labelDesc.setAttribute('for', 'desc');
labelDesc.textContent = "Descrição do produto:";

form.appendChild(labelNome);
form.appendChild(nomeProduto);
form.appendChild(labelQtd);
form.appendChild(qtdProduto);
form.appendChild(labelPreco);
form.appendChild(precoProduto);
form.appendChild(labelDesc);
form.appendChild(descProduto);
var container = dom.createElement('div');
container.setAttribute('id', 'container');
main.appendChild(nav);
main.appendChild(form);
main.appendChild(botao);
main.appendChild(botaoEdit);
main.appendChild(container);
body.appendChild(main);