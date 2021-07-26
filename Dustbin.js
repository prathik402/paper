class Dustbin{
    constructor(x,y) {
    var options = {
    isStatic: true,


    }
    this.x = x;
    this.y = y;
    this.image = loadImage("dustbingreen.png")
    this.DustbinWidth = 200;
    this.DustbinHeight = 100;
    this.wallThickness = 20;
    this.angle = 0;
    this.bottomWall = Bodies.rectangle(this.x, this.y, this.DustbinWidth ,this.wallThickness, options);
    this.leftWall = Bodies.rectangle(this.x - this.DustbinWidth/2 + 40, this.y - this.DustbinHeight/2, this.wallThickness, this.DustbinHeight,options);
    Matter.Body.setAngle(this.leftWall,this.angle);
    this.rightWall = Bodies.rectangle(this.x - this.DustbinWidth/2 + 40, this.y + this.DustbinHeight/2, this.wallThickness, this.DustbinHeight,options);
    Matter.Body.setAngle(this.rightWall,this.angle*(+1));
    World.add(world, this.rightWall);
    World.add(world, this.bottomWall);
    World.add(world, this.leftWall);
  }
  display(){
   var posBottom = this.bottomWall.position
   var posRight = this.rightWall.position
   var posLeft = this.leftWall.position
   
    push();
    translate(posLeft.y, posLeft.x);
    angleMode(RADIANS);
    rotate(this.angle);
    fill(255);
    stroke(255); 
    rectMode(CENTER);
    rect(0, 0, this.wallThickness, this.DustbinHeight);
    pop();

    push();
    translate(posRight.y, posRight.x);
    angleMode(RADIANS);
    rotate(this.angle*(+1));
    fill(255);
    stroke(255); 
    rectMode(CENTER);
    rect(0, 0, this.wallThickness, this.DustbinHeight);
    pop();

    push();
    translate(posBottom.y, posBottom.x);
    angleMode(RADIANS);
    rotate(this.angle);
    fill(255);
    stroke(255); 
    imageMode(CENTER);
    image(this.image,0,0, this.width, this.height);
    rectMode(CENTER);
    rect(0, 0, this.DustbinHeight, this.wallThickness);
    pop();
  }
}