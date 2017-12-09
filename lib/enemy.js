function Enemy(typeOfEnemy) {
  this.isAlive = true;
  this.typeOfEnemy = typeOfEnemy;
  this.valuePoints = 0;
  this.direction = 0;
  this.positionX = 0;
  this.positionY = 0;
  this.scale = 0;
  this.speed = 0;
}

// function Enemy(canvas, sprite, typeOfEnemy) {
//   this.canvas = canvas;
//   this.ctx = ctx;
// }

// Enemy.prototype.draw() {
//   switch (typeOfEnemy) {
//     case this.typeOfEnemy == 1: this.sprite = 'images/Aliens.png';
//       break;
//
//     case 2:
// 
//       break;
//     default: this.sprite = 'images/aliens2.png';
//
//   }
// }
