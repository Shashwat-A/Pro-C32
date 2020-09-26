const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var can1,can2,can3,can4,can5,can6,can7,can8,can9,can10,can11,can12,can13,can14,can15,can16;
var polygan;
var sling;
var hr, bg;
var backGroundIMG;

var score = 0;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  getTime();

  //making the base of tower
  ground = new Ground(920,300, 290, 25);

  //First Layer
  can1 = new Can(810, 260, 35, 60);
  can2 = new Can(846, 260, 35, 60);
  can3 = new Can(882, 260, 35, 60);
  can4 = new Can(918, 260, 35, 60);
  can5 = new Can(954, 260, 35, 60);
  can6 = new Can(990, 260, 35, 60);
  can7 = new Can(1026, 260, 35, 60);

  //Second layer
  can8 = new Can(846,  210, 35, 60);
  can9 = new Can(882,  210, 35, 60);
  can10 = new Can(918, 210, 35, 60);
  can11 = new Can(954, 210, 35, 60);
  can12 = new Can(990, 210, 35, 60);

  //Third Layer
  can13 = new Can(882, 170, 35, 60);
  can14 = new Can(918, 170, 35, 60);
  can15 = new Can(954, 170, 35, 60);

  //Top Can
  can16 = new Can(918, 130, 35, 60);

  //Shooter Polygan
  polygan = new Polygan(100, 200); 

  //Constraining the polygan
  sling = new Sling(polygan.body, {x: 200, y:170}, 0.2, 80);
}

async function draw() {
  await background(bg); 
  Engine.update(engine);
  
  ground.display();

  console.log(score)

  //First Layer
  can1.display();
  can1.score();
  can2.display();
  can2.score();
  can3.display();
  can3.score();
  can4.display();
  can4.score();
  can5.display();
  can5.score();
  can6.display();
  can6.score();
  can7.display();
  can7.score();

  //Second Layer
  can8.display();
  can8.score();
  can9.display();
  can8.score();
  can10.display();
  can8.score();
  can11.display();
  can8.score();
  can12.display();
  can8.score();

  //Third Layer
  can13.display();
  can8.score();
  can14.display();
  can8.score();
  can15.display();
  can8.score();

  //Top Can
  can16.display();
  can8.score();

  //Sling
  sling.display();

  //Shooter Polygan
  polygan.display();

  stroke("black");
  strokeWeight(3);
  fill("white");
  textSize(35);
  text("Score: " + score, 10, 50);
}

function mouseDragged() {   
  Matter.Body.setPosition(polygan.body, {x: mouseX, y: mouseY});
}

function mouseReleased () {
  sling.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    sling.attach(polygan.body);
  }
}

async function getTime() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();

    var dt = responseJson.datetime;

    var hr = dt.slice(11,13);

    //console.log(hr);

    if(hr > 6 && hr < 18) {
      bg = "yellow";
    } else {
      bg = "blue";
    }

    background(bg);

}