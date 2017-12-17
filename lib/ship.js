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

//SHIP ATTACK
