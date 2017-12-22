var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

// BOARD CONTROLS //
var enemiesRowLength = 4;
var enemiesColumnLength = 8;
var maxTypeOfEnemy = 19;


//KEYBOARD CONTROLS

function Keyboard() {
  this.keyLeft = 37;
  this.keyRight = 39;
}

Keyboard.prototype.isKeyLeft = function(e) {
  return this.keyLeft === e.keyCode;
};

Keyboard.prototype.isKeyRight = function(e) {
  return this.keyRight === e.keyCode;
};

// ENEMY CONTROLS

// URL TO GAME IMAGES
var shipSrc = "images/ship.png";
var enemySrc = "images/aliens2.png";
