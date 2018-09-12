var Roboto = new FontFace('Roboto', 'url(Roboto/Roboto-Bold.ttf)');
document.fonts.add(Roboto);
body.style.backgroundColor = "#333";
body.style.margin = "0 auto";
body.style.width = "100%";
body.style.color = "#000";
body.style.fontFamily = "Roboto";



//main
dom.querySelector('.main').style.width = "98%";
dom.querySelector('.main').style.marginLeft = "auto";
dom.querySelector('.main').style.marginRight = "auto";
dom.querySelector('.main').style.backgroundColor = "#FFF";
dom.querySelector('.main').style.textAlign = "left";

//nav
dom.querySelector('.nav').style.fontSize = "2em";
dom.querySelector('.nav').style.backgroundColor = "#8B1A1A";
dom.querySelector('.nav').style.color = "#FFF";
dom.querySelector('.nav').style.minHeight = "50px";
dom.querySelector('.nav').style.height = "15%";
dom.querySelector('.nav').style.textAlign = 'center';

//form
var formulario = dom.forms.formulario;
for(var i = 0; i < formulario.length; i++)
{
	formulario[i].style.display = "block";
	formulario[i].style.width = "99.4%";
	formulario[i].style.height = "25px";
	//formulario[i].style.margin = "10px";
	if(formulario[i].type == 'number')
	{
	formulario[i].style.width = "10%";
	formulario[i].style.display = "block";
	}
	
}

//btnInserir
dom.querySelector("#btnInserir").style.width = "100%";
dom.querySelector("#btnInserir").style.height = "40px";
dom.querySelector("#btnInserir").style.border = "2px solid #00C5CD";
dom.querySelector("#btnInserir").style.backgroundColor = "#00F5FF";
dom.querySelector("#btnInserir").style.marginTop = "1%";
dom.querySelector("#btnInserir").style.fontSize = "2em";
dom.querySelector("#btnInserir").style.display = 'block';

//btnEdit
dom.querySelector("#btnEdit").style.width = "100%";
dom.querySelector("#btnEdit").style.height = "40px";
dom.querySelector("#btnEdit").style.border = "2px solid #00C5CD";
dom.querySelector("#btnEdit").style.backgroundColor = "#00FF7F";
dom.querySelector("#btnEdit").style.marginTop = "1%";
dom.querySelector("#btnEdit").style.fontSize = "2em";
dom.querySelector("#btnEdit").style.display = 'none';







