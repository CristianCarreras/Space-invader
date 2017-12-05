document.getElementById("btn-start").onclick = function() {
  console.log('Arranca el juego');
  // AÑADIR FUNCION QUE MUESTRA Y OCULTA LA PANTALLA DE INICIO
  // hideStartScreen
  var myBoard = new Board();
  myBoard.draw();

};

function hideStartScreen() {
  // Aquí el código para mostrar y ocultar div
}

// function btnStart(context, function){
//     var btn = document.createElement("button");
//     btn.value = "Start";
//     btn.onclick = function;
//     context.appendChild(btn);
// }
