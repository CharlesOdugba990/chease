

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball1,ball2,ball3,ball4,ball5,roo
var chain1,chain2,chain3,chain4,chain5

	


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ball1 = new Ball(100,250)
	ball2 = new Ball(170,250)
	ball3 = new Ball(240,250)
	ball4 = new Ball(310,250)
	ball5 = new Ball(380,250)
	roo = new Roof(450,170,550,60)
	chain1 = new Chain(ball1.body,{x:200,y:150})
	chain2 = new Chain(ball2.body,{x:325,y:150})
	chain3 = new Chain(ball3.body,{x:450,y:150})
	chain4 = new Chain(ball4.body,{x:575,y:150})
	chain5 = new Chain(ball5.body,{x:700,y:150})



	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  roo.tcan()
  ball1.clown()
  ball2.clown()
  ball3.clown()
  ball4.clown()
  ball5.clown()
  chain1.Qc()
  chain2.Qc()
  chain3.Qc()
  chain4.Qc()
  chain5.Qc()


  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW)
Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85})
}



