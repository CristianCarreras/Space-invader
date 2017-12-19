function Ship() {
  this.posX = 200;
  this.posY = 100;
  this.keyboard = new Keyboard();
  this.sprite = new Image();
  this.canvas = canvas;
  this.ctx = ctx;
  this.speed = 5;
  if (this.sprite) {
    this.sprite.isReady = true;
    this.sprite.hFrames = 3;
    this.sprite.vFrames = 1;
    this.sprite.fWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
    this.sprite.fHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
    this.sprite.hfIndex = 0;
    this.sprite.vfIndex = 0;
  }
  this.sprite.src = shipSrc;
}

Ship.prototype.isReady = function() {
  return this.sprite.isReady;
};

Ship.prototype.keyboardEventDown = function(e) {
  if (this.keyboard.isKeyLeft(e)) {
    this.posX += this.speed * -1;
  }
  if (this.keyboard.isKeyRight(e)) {
    this.posX += this.speed * 1;
  }
};

Ship.prototype.draw = function() {
  this.ctx.drawImage(this.sprite, this.posX, this.posY, 50, 50);
  // this.ctx.drawImage(
  //   this.sprite,
  //   this.sprite.hfIndex * this.sprite.fWidth,
  //   this.sprite.vfIndex * this.sprite.fHeight,
  //   this.sprite.fWidth,
  //   this.sprite.fHeight,
  //   Math.min(this.x, this.canvas.width / 2),
  //   this.y,
  //   this.width,
  //   this.height
  // );
  // this.ctx.restore();
};

//SHIP ATTACK
