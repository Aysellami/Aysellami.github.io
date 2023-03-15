// this is for your game/web toy

var spaceshipImage;
var spaceship;
var spaceBg;
var laserImage;
var enemyShipImage;
var enemeyShip;
var canvasWidth = 600;
var canvasHeight = 600;
var laser;
var youWin;
var youWinImage;
var BLAST;
var BLASTImage;


//var angle = 0;

function preload(){ 
    spaceshipImage = loadImage('assets/Spaceship.png');
    enemyShipImage = loadImage('assets/Enemyship.png');
    spaceBg = loadImage('assets/spacebg.jpg');
    laserImage = loadImage('assets/laser.png');
    youWinImage = loadImage('assets/WIN.png');
    BLASTImage = loadImage('assets/BLAST.png');
}

function setup() {
    new Canvas(canvasWidth, canvasHeight);
   //enemy_ship[0] = new enemy_ship();

    // spaceship = loadImage('assets/Spaceship.png');
    spaceship = new Sprite(300, 500);
    spaceship.img = spaceshipImage;
    spaceship.scale = 0.15;
    spaceship.collider = 'kinematic'

    enemyShip = new Sprite(40, 100);
    enemyShip.vel.x = 3;
    enemyShip.img = enemyShipImage;
    enemyShip.scale = 0.25;
    enemyShip.rotation = 180;
    enemyShip.visible= true;
    // enemyShip.collider = 'kinematic';


    laser = new Sprite();
    laser.img = laserImage;
    laser.scale = 0.1;
    laser.rotation = 90;
    laser.collider = 'kinematic';
    laser.visible = false;

    
    youWin = new Sprite();
    youWin.img = youWinImage;
    youWinImage.scale = 2;
    youWin.collider = 'kinematic';
    youWin.visible= false;

    BLAST = new Sprite();
    BLAST.img = BLASTImage;
    BLAST.scale = 0.1;
    BLAST.rotation = 90;
    BLAST.collider = 'kinematic';
    BLAST.visible = false;

}

function draw() {
    background(spaceBg);

    enemyShipMove();  
    shipMove();  
    shipEdge();
    laserMove();
  
// if (enemyShip.position != canvasHeight, canvasWidth){
//         youWin.visible = true;
// }

if(laser.overlaps(enemyShip)){
    enemyShip.visible = false;
    BLAST.visible = true;
    BLAST.position.x = enemyShip.position.x;
    BLAST.position.y = enemyShip.position.y;
}

if(enemyShip.visible == false){
    youWin.visible = true;
}

}

function laserMove(){
    if (kb.pressing('up')){
        laser.visible = true;
        laser.position.x = spaceship.position.x;
        laser.position.y = spaceship.position.y;
        laser.vel.y = -25;
    }
}


function enemyShipMove(){
    if (enemyShip.position.x > canvasWidth - 40){
        enemyShip.vel.x = enemyShip.vel.x * -1;
    } 

    if (enemyShip.position.x < 40){
        enemyShip.vel.x = enemyShip.vel.x * -1;
    }
}

function shipMove(){    
    if (kb.pressing ('left')){
        spaceship.position.x -= 5;
    }
    else if (kb.pressing('right')){
        spaceship.position.x += 5;
    }
}

    
function shipEdge(){
if (spaceship.position.x > canvasWidth + 15){
        spaceship.position.x = -15;
    }
    else if (spaceship.position.x < -15) {
        spaceship.position.x = canvasWidth+15;
    }
}  



