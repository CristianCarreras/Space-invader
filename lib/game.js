var myBoard;
window.onload = function() {
  document.getElementById("btn-start").onclick = function() {
document.getElementById("pantalla-inicio").style.display = "none";
document.getElementById("pantalla-juego").style.display = "block";

    console.log('Arranca el juego');
  };

  function startGame() {
    myBoard = new Board();
    myBoard.draw();
    myBoard.createStartingEnemies();

}


};
