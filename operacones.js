function sumar(){
	var n1=document.getElementById("num1").value; /*busca en el html el elemento que tiene el id de num1 y se lo asigna a la variable n1*/
	var n2=document.getElementById("num2").value;
	//parseInt() y parseFloat() para convertir el texto a entero
	var resul=parseInt(n1)+parseInt(n2); /*le asigna una variable resul la suma entre las 2 variables n1 y n2
	el parseInt convierte el texto a entero*/
	document.getElementById("r").innerHTML=resul; /* al elemento de id r se le agrega lo que tiene la varible resul*/
	/*el innerHTML toma lo que esta dentro de la etiqueta p y le pone la varible resul*/
}
function restar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	//parseInt() y parseFloat() para convertir el texto a entero
	var resul=parseInt(n1)-parseInt(n2);
	document.getElementById("r").innerHTML=resul;
}
function multilicar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	//parseInt() y parseFloat() para convertir el texto a entero
	var resul=parseInt(n1)*parseInt(n2);
	document.getElementById("r").innerHTML=resul;
}
function dividir(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	//parseInt() y parseFloat() para convertir el texto a entero
	var resul=parseInt(n1)/parseInt(n2);
	document.getElementById("r").innerHTML=resul;
}


