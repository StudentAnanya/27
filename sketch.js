const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1
var roofObj;
var world;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
    world = engine.world;

    roofObj = new Roof(400,260,380,30);
    bobDiameter = 60;

    bobObject1 = new Bob(400,390,50);

	Engine.run(engine);
     
}

function draw() {

    rectMode(CENTER);
    background("lightgrey")
    bobObject1.display();
    roofObj.display();
    
  }
  