var gardenImg,garden
var catLastImage ,cat1Img,catImg,cat3Img,catRunningImg
var mouseRunning,mouseLastImage,mouse1Img,mouse2Img,mouse3Image
function preload() {
    //load the images here
    gardenImg = loadImage("Images/garden.png")
  cat1Img = loadImage("Images/cat1.png")
  catImg = loadAnimation("Images/cat2.png","Images/cat3.png")
  mouse1Img = loadImage("Images/mouse1.png")
  mouse2Img = loadAnimation("Images/mouse2.png","Images/mouse3.png")
  mouse3Image = loadImage("Images/mouse4.png")
  cat3Img = loadImage("Images/cat4.png")
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
garden = createSprite(0,0,1000,1000)
garden.addImage("garden",gardenImg)
garden.scale = 1.3
  
 cat = createSprite(500,300,20,20);
cat.addImage("catLastImage",cat1Img)
  cat.scale = 0.1
  
 cat.setCollider("rectangle",10,10,20,20)
  cat.debug = false;
  
  
  mouse =createSprite(100,300,30,20)
 mouse.addImage("mouseLastImage",mouse1Img) 
  mouse.scale = 0.06
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x -mouse.x < (cat.width-mouse.width)/2)
  {
    cat.addAnimation("catLastImage",cat3Img)
  cat.changeAnimation("catLastImage")
  cat.velocityX = 0
    mouse.addImage("mouseLastImage",mouse3Image)
    mouse.changeAnimation("mouseLastImage")
  
}

  

  
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat.velocityX = -5
//catImg = createSprite(300,300,30,20) 
cat.addAnimation("catRunning",catImg)
cat.changeAnimation("catRunning")
  text(mouseX+','+mouseY,10,45)
    mouse.addAnimation("mouseRunning",mouse2Img)
  mouse.changeAnimation("mouseRunning")
}
  

}
