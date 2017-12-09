function Board() {
  this.enemiesArray = [];
  this.canvas = canvas;
  this.ctx = ctx;
  this.enemiesRowLength = enemiesRowLength;
  this.enemiesColumnLength = enemiesColumnLength;
  this.maxTypeOfEnemy = maxTypeOfEnemy;
  this.ship = new ship(this.board, "images/ship.png");
}

Board.prototype.draw = function() {
  this.ctx.fillStyle = "blue";
  this.ctx.fillRect(0, 0, 300, 300);
};

Board.prototype.createStartingEnemies = function() {
  for (var i = 0; i < this.enemiesColumnLength; i++) {
    var row = [];
    this.enemiesArray.push(row);

    for(var j = 0; j < this.enemiesRowLength; j++) {
      if (j === 1) {
        this.enemiesArray[i].push(new Enemy(1));
      }
      if (j === 2) {
        this.enemiesArray[i].push(new Enemy(2));

      } else {
        this.enemiesArray[i].push(new Enemy(0));

      }
    }
  }
  console.log(this.enemiesArray);
};


Board.prototype.getRandomTypeOfEnemy = function() {
  var random = Math.floor(Math.random() * this.maxTypeOfEnemy);
};
