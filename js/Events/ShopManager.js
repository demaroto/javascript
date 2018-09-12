var btnInserir = dom.querySelector('#btnInserir');
var btnEdit = dom.querySelector("#btnEdit");
btnInserir.addEventListener('click', function(){
	inserir();

});
nav.addEventListener('click', function(){
	var protocol = window.location.protocol;
	var path = window.location.pathname;
	var hostname =  window.location.hostname;
	var home = protocol+"//"+hostname+""+path;
	window.location.href = home;
});

nav.addEventListener('mouseenter', function(){
	this.style.cursor = "pointer";
});

btnEdit.addEventListener('click', function(){

	salvarProduto(editable);

});

