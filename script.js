function main(){
	/*alert("se está ejecutando volcarConsola");*/

	/*Elementos de entrada de datos*/
	var ape = document.getElementById("apellido").value;
	var nom = document.getElementById("nombre").value;
	var ed = document.getElementById("edad").value;
	var pe = document.getElementById("peso").value;
	var tele = document.getElementById("telefono").value
	var dni = document.getElementById("documento").value
	var na = document.getElementById("nacionalidad").value
	var pro = document.getElementById("provincia").value
	/*-----Pantalla de salida por consola de navegador----*/

	/*Imprimimos las variable de entrada por pantalla*/
	console.log(ape+"  "+nom+"  "+ed+"  "+pe);

	/*Sumando podemos concatenar cadenas de caracteres*/
	var ed_pe = ed + pe;
	console.log(ed_pe);

	/*Podos convertir las variables de entrada a valores
	numéricos para realizar operaciones*/
	var number = parseInt(ed)+parseInt(pe);
	console.log(number);


/*----Pantalla de salida por documento html ------*/

/*document.getElementById("datoDeSalida").innerHTML = "Nombre y Apellido: "+nom+" "+ape;
document.getElementById("salidaHtml").innerHTML = "<h3>Peso:"+pe+"</h3>";
}*/
document.getElementById("nom").innerHTML= nom;
document.getElementById("ape").innerHTML= ape;
document.getElementById("ed").innerHTML= ed;
document.getElementById("pe").innerHTML= pe;
document.getElementById("tele").innerHTML= tele;
document.getElementById("dni").innerHTML= dni;
document.getElementById("na").innerHTML= na;
document.getElementById("pro").innerHTML= pro;
};



