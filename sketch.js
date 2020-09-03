
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var op={
	isStatic : true
}
	ground=Bodies.rectangle(400,690,800,20,op);
	World.add(world,ground);


	ball = new Paper(50,650,50);

	box1=new bx(650,670,200,10,{isStatic : true});
	
	box_side1=new bx(550,630,20,100,{isStatic : true});
    box_side2=new bx(750,630,20,100,{isStatic:true});
	
	Engine.run(engine);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,40);
  ball.display();
  drawSprites();
  box1.display();
  box_side1.display();
  box_side2.display();
 keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x : 30,y:-30})	
	}



		
		
}




