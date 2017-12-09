function Ship() {
  this.x = 200;
  this.y = 200;
  this.dirX = 0;
  this.dirY = 0;
  this.keyboard = new Keyboard();
  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.sprite.hFrames = 3;
    this.sprite.vFrames = 1;
    this.sprite.fWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
    this.sprite.fHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
    this.sprite.hfIndex = 0;
    this.sprite.vfIndex = 0;

});
}

Ship.prototype.isReady = function() {
  return this.sprite.isReady;
};

Ship.prototype.move = function() {
  this.x += this.speed * this.dirX;
  this.y += this.speed * this.dirY;
  this.ship.css({top: this.y, left: this.x});
};

Ship.prototype.keyboardEventLeft = function(e){
  if (this.keyboard.isKeyLeft(e)) {
    this.dirX = -1;
  }
  if (this.keyboard.isKeyRight(e)) {
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

//Ship draw
Ship.prototype.draw = function() {
  if (this.isReady()) {
    this.ctx.save();

    this.ctx.drawImage(
      this.sprite,
      this.sprite.hfIndex * this.sprite.fWidth,
      this.sprite.vfIndex * this.sprite.fHeight,
      this.sprite.fWidth,
      this.sprite.fHeight,
      Math.min(this.x, this.canvas.width / 2),
      this.y,
      this.width,
      this.height
    );
    this.ctx.restore();
  }
};
