var garden,rabbit;
var gardenImg,rabbitImg;
var apple_png,orange_png,red_png;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_png = loadImage("apple.png");
  orange_png = loadImage("orangeLeaf.png")
  red_png = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX

  var num = Math.round(random(1,3));
  if(frameCount %80===0){

  
    if(num===1){
    
      var rand1 = Math.round(random(1,400))
      var orange = createSprite(rand1,10,20,20)
      orange.velocityY=3
      orange.scale= 0.06
      orange.addImage(orange_png)
      orange.lifetime=140

      rabbit.depth = orange.depth;
      rabbit.depth = rabbit.depth +1;
    }
    else if(num===2){
      var rand2 = Math.round(random(1,400))
      var red = createSprite(rand2,10,20,20)
      red.velocityY=3
      red.scale= 0.05
      red.addImage(red_png)
      red.lifetime=140

      rabbit.depth = red.depth;
      rabbit.depth = rabbit.depth +1;
    }
    else{
      var rand = Math.round(random(1,400))
      var apple = createSprite(rand,10,20,20)
      apple.velocityY=3
      apple.scale= 0.06
      apple.addImage(apple_png)
      apple.lifetime=140

      rabbit.depth = apple.depth;
      rabbit.depth = rabbit.depth +1;
    }
    
  }
  drawSprites();
}