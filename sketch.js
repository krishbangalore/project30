
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(2400,800);
    

    console.log(canvas);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,width,20);
    platform = new Ground(1200, height, 300, 170);

    alert(height);

    box8 = new Box(1130,height-100,30,40);
    box9 = new Box(1160,height-100,30,40);
    box10 = new Box(1190,height-100,30,40);
    box11 = new Box(1220,height-100,30,40);
    box12 = new Box(1250,height-100,30,40);

    box13 = new Box(1160,height-140,30,40);
    box14 = new Box(1190,height-140,30,40);
    box15 = new Box(1220,height-140,30,40);
   
    box16 = new Box(1190,height-180,30,40);

  //  pig1 = new Pig(810, 350);
//log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
   // pig3 = new Pig(810, 220);

   // log3 =  new Log(810,180,300, PI/2);

   // box5 = new Box(810,160,70,70);
  //  log4 = new Log(760,120,150, PI/7);
  //  log5 = new Log(870,120,150, -PI/7);

   mStone = new Stone(200,50);
//
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(mStone.body,{x:200, y:height-180});

    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();


    ground.display();
    //pig1.display();
   // log1.display();

    
   // box4.display();
   // pig3.display();
   // log3.display();


    //log4.display();
    //log5.display();

    mStone.display();
   platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(mStone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingshot.fly();
}