var soldire,soldireImg;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var protection1;
var protection2;
var carImg;
var bullet;
var cage1;
var cage2;
var cage3;

var bulletGroup;

function preload(){
soldireImg=loadImage('soldire 9.png')
carImg=loadImage('carDestroy.jpg')
}

function setup(){
    canvas = createCanvas(displayWidth-20,650);

    soldire = createSprite(600,340,10,10);
    soldire.addImage(soldireImg);
    soldire.scale=0.1;

    
    protection1=createSprite(420,500,10,10);
    protection1.addImage(carImg);
    protection1.scale=0.7;

    protection2=createSprite(1000,500,10,10);
    protection2.addImage(carImg);
    protection2.scale=0.7;

    bulletGroup= new Group();

    enemy1= createSprite (1200,350,50,50);
    enemy1.velocityX=-2

    enemy2= createSprite (100,250,50,50);
    enemy2.velocityX=2
    

    enemy3= createSprite (1200,150,50,50);
    enemy3.velocityX=-2

    enemy4= createSprite (100,50,50,50);
    enemy4.velocityX=2
  
    enemy5= createSprite (600,400,50,50);

    ///protection2.debug=true;
    protection1.setCollider("rectangle",0,0,200,60);
    protection2.setCollider("rectangle",0,0,200,60);

//cage1=createSprite();
//cage2=createSprite();
//cage3=createSprite();

}

function draw(){
    background(230,230,230);
  
    if(keyDown(LEFT_ARROW)){
        changePosition(-2,0);

    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(2,0);
        
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+2);
    }

    if(keyDown('space')){
        Bullet();
    }

    soldire.depth=protection1.depth;
    soldire.depth=protection2.depth;
    soldire.depth=soldire.depth+1;
    soldire.depth=soldire.depth+1;

    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();

    protection1.display();
    protection2.display();

 if(soldire.isTouching(protection1)||soldire.isTouching(protection2)){
soldire.collide(protection2);
soldire.collide(protection1);
 }

 

 function enemy1move(x,y){
if(enemy1.x===100){
enemy1.velocityX=x
}

if(enemy1.x===1200){
    enemy1.velocityX=y
    }
}

    function enemy2move(x,y){
    if(enemy2.x===1200){
        enemy2.velocityX=x;
        }
        
        if(enemy2.x===100){
            enemy2.velocityX=y;
            }
    }

    function enemy3move(x,y){
if(enemy3.x===100){
    enemy3.velocityX=x;
    }

    if(enemy3.x===1200){
        enemy3.velocityX=y;
        }
    }

    function enemy4move(x,y){
     if(enemy4.x===1200){
        enemy4.velocityX=x;
                }
            
    if(enemy4.x===100){
         enemy4.velocityX=y;
                }

            }
 enemy1move(2,-2);
 enemy2move(-2,2);
 enemy3move(2,-2);
 enemy4move(-2,2);

if(bulletGroup.isTouching(enemy1)||bulletGroup.isTouching(enemy2)||bulletGroup.isTouching(enemy3)||bulletGroup.isTouching(enemy4)){
       if(bulletGroup.isTouching(enemy1)){
           enemy1.destroy();
       
           enemy2move(-5,5);
           enemy3move(5,-5);
           enemy4move(-5,5);
           console.log(enemy2.velocityX);
    }
       
       else if(bulletGroup.isTouching(enemy2)){
        enemy2.destroy();
        enemy3move(10,-10);
        enemy4move(-10,10);
       }
    
    else if(bulletGroup.isTouching(enemy3)){
        enemy3.destroy();
        enemy4move(-15,15);
    }

    else if(bulletGroup.isTouching(enemy4)){
        enemy4.destroy();
    }
   }

    drawSprites();

}

function changePosition(x,y){
    soldire.x = soldire.x + x;
    soldire.y = soldire.y + y;
  }

function Bullet(){
  
 var    bullet = createSprite(100,100,60,10);
    bullet.x=soldire.x,
    bullet.y=soldire.y;
    bullet.velocityY=-12;
    bullet.lifetime=25;

    bulletGroup.add(bullet);
   
}

