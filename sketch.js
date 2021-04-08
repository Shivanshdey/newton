
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(2000, 2000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofObject=new Roof(600,height,1200,20);
platform = new Ground(150, 305, 300, 170);
World.add(world,roof)
bobObject1 =new Bob(250,300);
rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
World.add(world,rope1)
bobObject2 =new Bob(260,300);
rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
World.add(world,rope2)
bobObject3 =new Bob(270,300);
rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
World.add(world,rope3)
bobObject4 =new Bob(280,300);
rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
World.add(world,rope4)
bobObject5=new Bob(290,300);
rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)
World.add(world,rope5)
}


function draw() {
  
  Engine.update(engine);
  background("white");
  

 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 roofObject.display();
 platform.display();
}



