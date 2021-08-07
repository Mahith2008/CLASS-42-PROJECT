var bg,bgImg;
var iss,issImg;
var spacecraft;
var sp1Img,sp2Img,sp3Img,sp4Img;
var hasDocked = false;

function preload(){

bgImg = loadImage("images/spacebg.jpg");
issImg = loadImage("images/iss.png");
sp1Img = loadImage("images/spacecraft1.png");
sp2Img = loadImage("images/spacecraft2.png");
sp3Img = loadImage("images/spacecraft3.png");
sp4Img = loadImage("images/spacecraft4.png");

}



function setup() {
  createCanvas(1000,600);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.25;

  spacecraft = createSprite(380,290,50,50);
  spacecraft.addImage(sp1Img);
  spacecraft.scale = 0.15

}

function draw() {

  background(bgImg);  

  spacecraft.addImage(sp1Img);

  if(!hasDocked){

    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
 
      spacecraft.y = spacecraft.y-2
    }

    if(keyDown("LEFT_ARROW")){

      spacecraft.addImage(sp3Img);
      spacecraft.x = spacecraft.x-1
    }

    if(keyDown("RIGHT_ARROW")){

      spacecraft.addImage(sp4Img);
      spacecraft.x = spacecraft.x+1
    }

    if(keyDown("DOWN_ARROW")){
           
      spacecraft.addImage(sp2Img);
     
    }
  }

if(spacecraft.y<=(iss.y+40) && spacecraft.x<=(iss.x-6)){

  console.log("DONE");
  hasDocked = true;

  textSize(20);
  fill("white");
  text("DOCKING SUCCESFUL !",470,300);
}



  drawSprites();
}