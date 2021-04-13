
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;
var ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,670,800,20);
    dustbin = new Dustbin(650,670);
    paper = new Paper(500,500,50);

    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyCode === UP_ARROW){
  
  }
  dustbin.display();
  ground.display();
  paper.display();

  drawSprites();
 
}
function keyPressed(){
if(keyPressed === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});

}  

}


