function Board() {
  this.enemiesArray = [];
  this.canvas = canvas;
  this.ctx = ctx;
  this.enemiesRowLength = enemiesRowLength;
  this.enemiesColumnLength = enemiesColumnLength;
  this.maxTypeOfEnemy = maxTypeOfEnemy;
  this.ship = new Ship();
}

Board.prototype.draw = function() {
  var that = this;
  setInterval(function() {
    that.ctx.fillStyle = '#FF0000';
    that.ctx.fillRect(0, 0, 300, 300);
    that.ship.draw();
    for (var i = 0; i < that.enemiesArray; i++) {
      console.log('Doble bucke I');
      for(var j = 0; j < that.enemiesArray[i]; j++) {
        console.log('Doble bucke J');
        that.enemiesArray[i][j].draw();
      }
    }
  }, 50);
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
    return random;
  };
