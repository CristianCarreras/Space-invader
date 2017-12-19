var myBoard;
var newShip;
window.onload = function() {
  document.getElementById("btn-start").onclick = function() {
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    console.log('Arranca el juego');
    startGame();
  };

  function startGame() {
    myBoard = new Board();
    myBoard.draw();
    myBoard.createStartingEnemies();
    addListeners();
  }

  function addListeners() {
    document.addEventListener('keydown', function(e) {
      myBoard.ship.keyboardEventDown(e);
    });

    // document.addEventListener('keyup', function(e) {
    //   myBoard.ship.keyboardEventUp(e);
    // });
  }
};
