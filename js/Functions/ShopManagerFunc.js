
function inserir()
{
	
	var formulario = dom.forms.formulario;
	spans = formulario.querySelectorAll('span');
	if(spans.length > 0)
	{
		var children = formulario.children;
		for(var i in children)
		{
			if(children[i].nodeName == 'SPAN')
			{
				children[i].remove();
			}
		}
	}
	var span = dom.createElement('span');
	
		if(validar(formulario).length > 0)
			{
				label = formulario.nome;
				
				var ul = dom.createElement('ul');
				var msgs = validar(formulario);
				for(var i in msgs)
				{
					var li = dom.createElement('li');
					li.textContent = msgs[i];
					ul.appendChild(li);
					
				}
				span.appendChild(ul);
				formulario.appendChild(span);
				destacaLi();
				

				

		}else
			{

				Produtos.push({nome: formulario.nome.value, qtd: formulario.qtd.value, preco: formulario.preco.value, descricao: formulario.descricao.value});
				updateDados();
				estilizaTabela("#table");
				mostraTabela();
				formulario.reset();
			}
		
}

function validar(formulario)
{
	var nome = formulario.nome.value;
	var qtd = formulario.qtd.value;
	var preco = formulario.preco.value;
	var desc = formulario.descricao.value;
	var msgs = [];
	var mensagem = "";
	if(nome == "")
	{
		mensagem = "Nome do produto não pode ser vazio";
		msgs.push(mensagem);
	}

	if(qtd == "" || qtd <= 0 || qtd == null)
	{
		mensagem = "A quantidade precisa ser maior que 0 (zero)";
		msgs.push(mensagem);
	}

	if(preco == "" || preco <= 0 || preco == null)
	{
		mensagem = "O preço precisa ser maior que 0 (zero)";
		msgs.push(mensagem);
	}

	if(desc.length <= 0)
	{
		mensagem = "Digite alguma descrição do produto";
		msgs.push(mensagem);
	}
	return msgs;
}
construirTabela();
dom.querySelector('#table').style.visibility = 'hidden';
mostraTabela();
function mostraTabela()
{
	if(Produtos.length > 0)
		{
			dom.querySelector('#table').style.visibility = 'visible';
		}else{
			dom.querySelector('#table').style.visibility = 'hidden';
		}
}

function construirTabela()
{
	var table = dom.createElement('table');
	table.setAttribute('id', 'table');
	var tr_thead = dom.createElement('tr');
	var td_thead = dom.createElement('td');
	var thead = dom.createElement('thead');
	thead.textContent = "Produtos";
	tr_thead.appendChild(thead);	
	var tr = dom.createElement('tr');
	var td_nome = dom.createElement('td');
	td_nome.textContent = "Produdo";
	var td_qtd = dom.createElement('td');
	td_qtd.textContent = "Quantidade";
	var td_preco = dom.createElement('td');
	td_preco.textContent = "Preço";
	var td_desc = dom.createElement('td');
	td_desc.textContent = "Descrição";
	td_edit = dom.createElement('td');
	td_edit.textContent = "Editar";
	td_remover = dom.createElement('td');
	td_remover.textContent = "Remover"
	tr.appendChild(td_nome);
	tr.appendChild(td_qtd);
	tr.appendChild(td_desc);
	tr.appendChild(td_preco);
	tr.appendChild(td_edit);
	tr.appendChild(td_remover);
	
	
	table.appendChild(tr_thead);
	table.appendChild(tr);
	
	container.appendChild(table);





}

function updateDados()
{

	var table = dom.querySelector('#table');
	//Verifica se existe tbody, caso exista remove-o
	for(var i in table.children)
	{
		if(table.children[i].nodeName == 'TBODY')
		{
			table.removeChild(table.children[i]);
		}
	}

	var tbody = dom.createElement('tbody');

	for(var i in Produtos)
	{
		var tr_prods = dom.createElement('tr');
		var td_nome_produtos = dom.createElement('td');
		td_nome_produtos.textContent = Produtos[i].nome;
		var td_qtd_produtos = dom.createElement('td');
		td_qtd_produtos.textContent = Produtos[i].qtd;
		var td_desc_produtos = dom.createElement('td');
		td_desc_produtos.textContent = Produtos[i].descricao;
		var td_preco_produtos = dom.createElement('td');
		var td_edit_produtos = dom.createElement('td');
		var td_remover_produtos = dom.createElement('td');
		var btn_edit = dom.createElement('button');
		var btn_remove = dom.createElement("button");
		btn_remove.setAttribute('class', 'btn_crud danger');
		btn_remove.setAttribute('onClick', 'removeProdutos("'+i+'")');
		btn_edit.setAttribute('class', 'btn_crud success');
		btn_edit.setAttribute('onClick', 'editProdutos("'+i+'")');
		btn_remove.textContent = "Remover";
		btn_edit.textContent = "Editar";
		td_remover_produtos.appendChild(btn_remove);
		td_edit_produtos.appendChild(btn_edit);
		td_preco_produtos.textContent = "R$ "+Number.parseFloat(Produtos[i].preco).toFixed(2);
		tr_prods.appendChild(td_nome_produtos);
		tr_prods.appendChild(td_qtd_produtos);
		tr_prods.appendChild(td_desc_produtos);
		tr_prods.appendChild(td_preco_produtos);
		tr_prods.appendChild(td_edit_produtos);
		tr_prods.appendChild(td_remover_produtos);
		tbody.appendChild(tr_prods);

	}	

	table.appendChild(tbody);
}

function estilizaTabela(id){
dom.querySelector(id).style.width = "100%";
dom.querySelector(id).style.textAling = "center";
dom.querySelector(id).children[1].style.backgroundColor = "#00FA9A";
dom.querySelector(id).children[1].style.textAlign = "center";
var linhas = dom.querySelector(id).children[2];
	for(var i = 0; i < linhas.childElementCount; i++)
	{
		linhas.children[i].style.textAlign = "center";
		if((i % 2) != 0)
		{
			linhas.children[i].style.backgroundColor = "#98FB98";
		}
	}
}

function editProdutos(key)
{
	var i = Number.parseInt(key);
	formulario.nome.value = Produtos[i].nome;
	formulario.qtd.value  = Produtos[i].qtd;
	formulario.preco.value = Produtos[i].preco;
	formulario.descricao.value = Produtos[i].descricao;
	dom.querySelector("#btnInserir").style.display = 'none';
	dom.querySelector("#btnEdit").style.display = 'block';
	editable = i;

}

function removeProdutos(key)
{
Produtos.splice(key, 1);
updateDados();
mostraTabela();
}

function salvarProduto(key)
{

	if(confirm("Deseja alterar o produto ?")){
	var i = Number.parseInt(key);
	Produtos[i].nome = formulario.nome.value;
	Produtos[i].qtd = formulario.qtd.value;
	Produtos[i].preco = formulario.preco.value;
	Produtos[i].descricao = formulario.descricao.value;
	
	updateDados();
	
	}
	formulario.reset();
	editable = null;
dom.querySelector("#btnInserir").style.display = 'block';
dom.querySelector("#btnEdit").style.display = 'none';
}

function destacaLi()
{
	//ul li
	var ul = dom.querySelector('ul');
	ul.style.listStyleType = "none";
	ul.style.padding = "0px";
	var li = dom.querySelectorAll('ul > li');
	for(var i in li)
	{
	li[i].style.backgroundColor = "#EEDD82";
	li[i].style.listStyleType = "none";		
	}

}

