class Enemy {
    constructor(x, y) {
      this.enemy=createSprite(x,y,50,50);
      this.width = 50;
      this.height = 50;
    }
    display(){
  this.enemy.velocityX=-2;
    }
  };
  