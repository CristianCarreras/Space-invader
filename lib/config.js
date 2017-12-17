var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

// BOARD CONTROLS //
var enemiesRowLength = 4;
var enemiesColumnLength = 8;
var maxTypeOfEnemy = 19;


//SHIP CONTROLS

Ship.prototype.move = function() {
  this.x += this.speed * this.dirX;
  this.y += this.speed * this.dirY;
  this.ship.css({top: this.y, left: this.x});
};

function Keyboard() {

  this.keyLeft = 37;
  this.keyRight = 39;
}

Keyboard.prototype.isKeyLeft = function(e) {
  return this.keyLeft == e.keyCode;
};

Keyboard.prototype.isKeyRight = function(e) {
  return this.keyRight == e.keyCode;
};


Ship.prototype.keyboardEventLeft = function(e){
  if (this.keyboard.keyLeft(e)) {
    this.dirX = -1;
  }
  if (this.keyboard.keyRight(e)) {
    this.dirX = 1;
  }
};

Ship.prototype.keyboardEventRight = function(e){
  if (this.keyboard.isKeyLeft(e)) {
    this.dirX = -1;
  }
  if (this.keyboard.isKeyRight(e)) {
    this.dirX = 1;
  }
};

// ENEMY CONTROLS
