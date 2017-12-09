var myBoard;
window.onload = function() {
  document.getElementById("btn-start").onclick = function() {

    console.log('Arranca el juego');
  };

  function hideStartScreen() {
    // Aquí el código para mostrar y ocultar div
         if(y.style.display == 'none')
            y.style.display = 'block';
         else
            y.style.display = 'none';

    var e = document.getElementById("btn-start");
          if(e.style.display == 'none')
              e.style.display = 'block';
          else
              e.style.display = 'none';
}


  function startGame() {
    myBoard = new Board();
    myBoard.draw();
    myBoard.createStartingEnemies();

}
};
