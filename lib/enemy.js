function Enemy(typeOfEnemy) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.isAlive = true;
  this.typeOfEnemy = typeOfEnemy;
  this.valuePoints = 0;
  this.direction = 0;
  this.positionX = 50;
  this.positionY = 50;
  this.sprite = new Image();
  // if (this.sprite) {
  //   this.sprite.isReady = true;
  //   this.sprite.hFrames = 3;
  //   this.sprite.vFrames = 1;
  //   this.sprite.fWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
  //   this.sprite.fHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
  //   this.sprite.hfIndex = 0;
  //   this.sprite.vfIndex = 0;
  // }
  this.sprite.src = shipSrc;
  this.scale = 0;
  this.speed = 0;
  this.draw();
}

Enemy.prototype.draw = function() {
  console.log('Entro en draw');
  this.ctx.drawImage(this.sprite, 100, 100, 100, 100);
  // switch (typeOfEnemy) {
  //   case this.typeOfEnemy == 1: this.sprite = 'images/Aliens.png';
  //     break;
  //
  //   case 2:
  //
  //     break;
  //   default: this.sprite = 'images/aliens2.png';
  //
  // }
};
