
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(400, 450, 100, 800);
	bobObject1 = new bob(200, 200, 50, 50);
	bobObject2 = new bob(250, 200, 50, 50);
	bobObject3 = new bob(300, 200, 50, 50);
	bobObject4 = new bob(350, 200, 50, 50);
	bobObject5 = new bob(400, 200, 50, 50);
	rope1 = new rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
  drawSprites();
 
}



