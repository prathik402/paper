
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;
var ground;
var paper;
let img;
function preload()
{
	paper = loadImage("sprites/paper.png");
  dustbin = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
  var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });


  Image(img,0,0);

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

jump();  
drawSprites();
 
}
function jump(){
if(keyCode  === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:200});

}  

}


