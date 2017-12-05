function Ship() {
  this.x = 100;
  this.y = 100;
  this.radius = 25;
  this.color = '#2e7d32';
}

Ship.prototype.draw = function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
};
