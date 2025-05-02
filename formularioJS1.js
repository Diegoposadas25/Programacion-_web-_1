function leer(){
	var nom=document.forms["formulario"].elements[0].value;
	//tomamos el valor 0 del formulario
	var clave=document.getElementById("pass").value;
	var carrera1=document.getElementsByTagName("select")[0].value;
	
	var gen=document.getElementsByName("genero")
	var g,i;
	for(i=0; i<gen.length; i++){
		if(gen[i].checked)
			g=gen[i].value;
		
	}
	var ok=document.getElementById("casilla").checked;
	document.getElementById("resultado").innerHTML="\<br>tu nombre es:"+nom+
	"\<br>tu password es:"+clave+"\<br> Tu carrera es:"+carrera1+
	"\<br> tu genero es: "+g+"\<br>Aceptacion de los acuerdos: "+ok;


	}

