function Board() {
  this.enemiesArray = [];
  this.canvas = canvas;
  this.ctx = ctx;
}

Board.prototype.draw = function() {
  this.ctx.fillStyle = "blue";
  this.ctx.fillRect(0, 0, 800, 300);
  // this.ctx.strokeRect(50, 50, 50, 50);
};

Board.prototype.createNewEnemy = function() {
  console.log('Hola');
};
