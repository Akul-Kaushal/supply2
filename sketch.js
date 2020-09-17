var h_image, heicopter, package,p_image;
var packageBody,ground;
var s1,s2,s3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	h_image=loadImage("helicopter.png")
	p_image=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(p_image);
	package.scale=0.2;

	heicopter=createSprite(width/2, 200, 10,10);
	heicopter.addImage(h_image);
	heicopter.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	s1=createSprite(400,650,200,20);
	s1.shapeColor=color(219, 4, 4);
	s2=createSprite(300,610,20,100);
	s2.shapeColor=color(219, 4, 4);
	s3=createSprite(500,610,20,100);
	s3.shapeColor=color(219, 4, 4);

	engine = Engine.create();
	world = engine.world;

	var package_options ={
		isStatic:true ,
		restitution:0.1
		
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 s1 = Bodies.rectangle(400,650,200,20,{restitution:0.1,isStatic:true})
	 World.add(world,s1);
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	 Matter.Body.restitution(packageBody,0.1)

	 }
	
}



