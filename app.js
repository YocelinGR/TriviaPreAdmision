<!--Inicio de la funcion para el boton de inicio: iniciar sesion y mantener el formato html estático-->
function introducirNombre(user){

  <!--Zona de definición de variables-->
  var respuesta1 = ["1.Ciudad de México\n", "2.Tokio\n", "3.Estocolmo\n", "4.Zurich\n"];
  var respuesta2 = ["A.Nueva Delhi\n", "B.Beijin\n", "C.Pakistan\n", "D. Los Angeles California\n"];
  var respuesta3 = ["1.Lausanne\n","2.Fukuoka\n", "3.Amsterdam\n", "4.Barcelona\n"];
  var preguntas = ["¿Cuál es la capital más segura del mundo?\n", "¿Cuál es la ciudad más contaminada del mundo?\n", "¿Cuál es la mejor ciudad para vivir?\n"];
  var evaluacion = [2, "C", 3];
  var score = 0;

  <!--Variables de posición-->
  var element = document.getElementById("name");
  var zonaRC = [document.getElementById("RC1"), document.getElementById("RC2"), document.getElementById("RC3")];
  var zonaRI = [document.getElementById("RI1"), document.getElementById("RI2"), document.getElementById("RI3")];
  var zonaSco = document.getElementById("zoneSc");
  var zonaDef = document.getElementById("default");
   <!---->
  <!--Da bienvenida al usuario-->
  var name = prompt("Ingresa tu nombre :)");
  element.innerHTML = "Bienvenid@ " + name + " <3";
  <!--Pregunta si desea jugar-->
  var firstInter = confirm ("Bienvenid@ " + name + " ¿List@ para jugar?");
  if (firstInter){
      <!--Istrucciones de contestacion -->
      alert ("Por favor coloque el número o la letra que corresponda a la respuesta correcta.");
      <!--Switch para pregunta1-->
      switch (prompt(preguntas[0] + respuesta1)) {
             case "2": <!--Respuesta correcta-->
             score = score + 1;<!--Suma puntos-->
             alert("Respuesta correcta");
             zonaRC[0].innerHTML = "Tu respuesta a: "+ preguntas[0] + " fue: " + respuesta1[1]+ " . Felicidades, es correcto";
             break;

             default:<!--Respuestas incorrectas-->
             alert("Respuesta incorrecta");
             zonaRI[0].innerHTML = "Tu respuesta a: "+ preguntas[0] + "es incorrecta. La respuesta correcta es: " + respuesta1[1];
             break;
      }
      <!--Switch para pregunta2-->
      switch (prompt(preguntas[1] + respuesta2).toUpperCase()) {
             case "C":
             score = score + 1;
             alert("Respuesta correcta");
             zonaRC[1].innerHTML = "Tu respuestasta a: "+ preguntas[1] + " fue: " + respuesta2[2]+ ". Felicidades, es correcto";
             break;

             default:
             alert("Respuesta incorrecta");
             zonaRI[1].innerHTML = "Tu respuesta a: "+ preguntas[1] + "es incorrecta. La respuesta correcta es: " + respuesta2[2];
             break;
      }
      <!--Switch para pregunta3-->
      switch (prompt(preguntas[2] + respuesta3)) {
             case "3":
             score = score + 1;
             alert("Respuesta correcta");
             zonaRC[2].innerHTML = "Tu respuesta a: "+ preguntas[2] +" fue: " + respuesta3[2]+ " .Felicidades, es correcto";
             break;

             default:
             alert("Respuesta incorrecta");
             zonaRI[2].innerHTML = "Tu respuesta a: "+ preguntas[2] + "es incorrecta.La respuesta correcta es: " + respuesta3[2];
             break;
      }
      <!--Zona Score-->
      <!---->
      zonaSco.innerHTML = "Felicidades. Tu score es: "+score+"/3.";<!--Detiene el conteo y lo imprime en html-->
      <!---->
  }else { <!--El usuario no desea jugar, despide al usuario-->
  zonaDef.innerHTML = "Buuu Buuuu :( Juguemos después)";
  }
}<!--Fin de funcion de boton de inicio-->


<!--Funcion de boton de salida, actualiza la pagina web-->
function refrescarWeb(confirmation){
   <!--Condicion para refrescar la pagina: El usuario desea salir-->
   var confirmation = confirm("Qué tal la evaluación. Deseamos verte pronto. \n ¿Deseas salir?");
   if (confirmation)
   {
      window.location.reload();<!--Funcion del sistema js para realizar reload-->
   }else {<!--No actualizar la pagiana: Saluda de nuevo-->
      alert("Hola....De nuevo");
   }
}
