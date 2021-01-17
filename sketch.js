//creating things
var garden, gardenImage;
var jerry, jerryImage,jerryImage2, jerryImage3, jerryImage4;
var tom, tomImage, tomImage2, tomImage3, tomImage4;

function preload() {
    //load the images here
    gardenImage=loadImage("garden.png");
    jerryImage=loadAnimation( "jerryOne.png");
    jerryImage4= loadAnimation("jerryFour.png");
    jerryImage2= loadAnimation("jerryTwo.png", "jerryThree.png");
    tomImage=loadAnimation("tomOne.png");
    tomImage2=loadAnimation("tomTwo.png", "tomThree.png");
    tomImage4= loadAnimation("tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    
    
garden= createSprite(200, 200, 1000, 800);
garden.addImage("garden", gardenImage);
    //create tom and jerry sprites here
  jerry= createSprite(50, 400, 20, 20);
 jerry.addAnimation("jerry", jerryImage);
jerry.scale= 0.1;

 tom= createSprite(550, 400, 20, 20);
 tom.addAnimation("tom", tomImage);
 tom.scale= 0.1;

}

function draw() {
//background to black
   
    //Write condition here to evalute if tom and jerry collide
 if(tom.x-jerry.x<tom.width/3+jerry.width/3&& jerry.x-tom.x<tom.width/3+jerry.width/3){
    tom.addAnimation("tomStill", tomImage4);
    tom.changeAnimation("tomStill");
    tom.velocityX= 0;
    
 }
 
 keyPressed();

 drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
tom.velocityX= -3;
tom.addAnimation("tom_running", tomImage2);
tom.changeAnimation("tom_running");
jerry.addAnimation("nothing", jerryImage2);
jerry.changeAnimation("nothing");
}

}
