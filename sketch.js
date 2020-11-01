
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dust1,dust2,dust3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dust1 = new Dustbin(750,750,50,10);
dust2 = new Dustbin(750,750,10,50);
dust3 = new Dustbin(750,750,50,50);
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(0);
  dust1;
  dust2;
  dust3;
  drawSprites();
 
}



